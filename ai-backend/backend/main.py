from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from dotenv import load_dotenv
from database import get_db
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)

def call_llm(prompt: str, fallback: str) -> str:
    try:
        response = client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception:
        return fallback

@app.get("/")
def home():
    return {"message": "EventFlow backend is running"}

@app.post("/generate-rationale")
def generate_rationale(team: dict):
    members = team.get("members", [])
    members_text = "\n".join([
        f"- {m['name']}: {m['skill']}" 
        for m in members
    ])
    
    cache_key = f"rationale_{members_text}"
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT content FROM ai_responses WHERE response_type = ? AND details = ?",
        ("rationale", cache_key)
    )
    cached = cursor.fetchone()
    if cached:
        conn.close()
        return {"rationale": cached["content"], "cached": True}
    
    prompt = f"""You are an event organizer AI. Given these team members and their skills, write a 2-3 sentence rationale explaining why this is a strong team. Be specific about their skills, not generic.

Team members:
{members_text}

Return only the rationale, nothing else."""

    result = call_llm(prompt, "This team brings complementary skills that together cover the full stack of requirements for a successful project.")
    
    cursor.execute(
        "INSERT INTO ai_responses (response_type, content, details) VALUES (?, ?, ?)",
        ("rationale", result, cache_key)
    )
    conn.commit()
    conn.close()
    return {"rationale": result, "cached": False}

@app.post("/draft-email")
def draft_email(data: dict):
    stage = data.get("stage", "")
    team_name = data.get("team_name", "")
    participant_name = data.get("participant_name", "")
    
    cache_key = f"email_{stage}_{team_name}_{participant_name}"
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT content FROM ai_responses WHERE response_type = ? AND details = ?",
        ("email", cache_key)
    )
    cached = cursor.fetchone()
    if cached:
        conn.close()
        return {"email": cached["content"], "cached": True}
    
    prompt = f"""You are an event organizer AI. Draft a warm, professional email for the following event stage.

Stage: {stage}
Team Name: {team_name}
Participant Name: {participant_name}

Write a short 3-4 sentence email appropriate for this stage. Be specific and warm, not generic.
Return only the email body, no subject line, no sign-off."""

    result = call_llm(prompt, f"Hi {participant_name}, we have an update regarding your participation in {team_name}. Please check the portal for more details. We look forward to your continued engagement with the event.")
    
    cursor.execute(
        "INSERT INTO ai_responses (response_type, content, details) VALUES (?, ?, ?)",
        ("email", result, cache_key)
    )
    conn.commit()
    conn.close()
    return {"email": result, "cached": False}

@app.post("/generate-rubric")
def generate_rubric(data: dict):
    team_name = data.get("team_name", "")
    challenge = data.get("challenge", "")
    
    cache_key = f"rubric_{team_name}_{challenge}"
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT content FROM ai_responses WHERE response_type = ? AND details = ?",
        ("rubric", cache_key)
    )
    cached = cursor.fetchone()
    if cached:
        conn.close()
        return {"rubric": cached["content"], "cached": True}
    
    prompt = f"""You are an event organizer AI. Generate a structured judging rubric for evaluating a team's project.

Team Name: {team_name}
Challenge/Project: {challenge}

Create a rubric with exactly 4 criteria. For each criterion provide:
- Criterion name
- What to look for (1 sentence)
- Score range (out of 10)

Return only the rubric, nothing else."""

    result = call_llm(prompt, "1. Innovation (0-10): Evaluate the originality of the solution.\n2. Technical Implementation (0-10): Assess the quality of code and architecture.\n3. Impact (0-10): Consider the real-world applicability.\n4. Presentation (0-10): Judge clarity and communication of the solution.")
    
    cursor.execute(
        "INSERT INTO ai_responses (response_type, content, details) VALUES (?, ?, ?)",
        ("rubric", result, cache_key)
    )
    conn.commit()
    conn.close()
    return {"rubric": result, "cached": False}

@app.post("/explain-anomaly")
def explain_anomaly(data: dict):
    team_name = data.get("team_name", "")
    judge_name = data.get("judge_name", "")
    judge_score = data.get("judge_score", 0)
    panel_average = data.get("panel_average", 0)
    threshold = data.get("threshold", 2.0)
    
    prompt = f"""You are an event organizer AI. A score anomaly has been detected.

Team: {team_name}
Judge: {judge_name}
Judge's Score: {judge_score}/10
Panel Average: {panel_average}/10
Deviation: {abs(judge_score - panel_average):.1f} points (threshold: {threshold})

Write a 2-3 sentence explanation for the committee about this anomaly. Include the actual numbers, suggest possible reasons, and recommend what the committee should review. Be specific and helpful.

Return only the explanation, nothing else."""

    result = call_llm(prompt, f"Judge {judge_name} scored {judge_score}/10 which deviates significantly from the panel average of {panel_average}/10. The committee should review this score before publishing results.")
    
    return {"explanation": result}

@app.post("/participants")
def add_participant(data: dict):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO participants (name, email, skill, institution) VALUES (?, ?, ?, ?)",
        (data.get("name"), data.get("email"), data.get("skill"), data.get("institution", ""))
    )
    conn.commit()
    participant_id = cursor.lastrowid
    conn.close()
    return {"message": "Participant added", "id": participant_id}

@app.get("/participants")
def get_participants():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM participants")
    participants = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return {"participants": participants}

@app.post("/teams")
def create_team(data: dict):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO teams (name, rationale, status) VALUES (?, ?, ?)",
        (data.get("name"), data.get("rationale", ""), "pending")
    )
    conn.commit()
    team_id = cursor.lastrowid
    for participant_id in data.get("participant_ids", []):
        cursor.execute(
            "INSERT INTO team_members (team_id, participant_id) VALUES (?, ?)",
            (team_id, participant_id)
        )
    conn.commit()
    conn.close()
    return {"message": "Team created", "id": team_id}

@app.get("/teams")
def get_teams():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM teams")
    teams = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return {"teams": teams}

@app.post("/scores")
def submit_score(data: dict):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO scores (team_id, judge_name, score) VALUES (?, ?, ?)",
        (data.get("team_id"), data.get("judge_name"), data.get("score"))
    )
    cursor.execute(
        "INSERT INTO activity_log (action, details) VALUES (?, ?)",
        ("score_submitted", f"Judge {data.get('judge_name')} scored team {data.get('team_id')}: {data.get('score')}")
    )
    conn.commit()
    conn.close()
    return {"message": "Score submitted"}

@app.get("/scores/{team_id}")
def get_scores(team_id: int):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM scores WHERE team_id = ?", (team_id,))
    scores = [dict(row) for row in cursor.fetchall()]
    if scores:
        avg = sum(s["score"] for s in scores) / len(scores)
        anomalies = [s for s in scores if abs(s["score"] - avg) > 2.0]
    else:
        avg = 0
        anomalies = []
    conn.close()
    return {"scores": scores, "average": avg, "anomalies": anomalies}

@app.get("/activity-log")
def get_activity_log():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM activity_log ORDER BY created_at DESC")
    logs = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return {"logs": logs}