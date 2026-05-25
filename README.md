# Vireon — Event Intelligence Platform

## Tech Stack

### Frontend

* Next.js 16
* TypeScript
* TailwindCSS

### Backend

* FastAPI
* Python

### Database & Infrastructure

* PostgreSQL
* Prisma ORM
* Redis
* BullMQ
* Docker

---

# Project Structure

```txt
Wise@TI/
│
├── frontend/        → Next.js frontend
├── backend/         → FastAPI backend
├── docker-compose.yml
└── README.md
```

---

# Initial Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd Wise@TI
```

---

# FRONTEND SETUP

## 2️⃣ Navigate to Frontend

```bash
cd frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Required Frontend Packages

These are already included in package.json after npm install.

Main packages:

* next
* react
* prisma
* @prisma/client
* bullmq
* ioredis

---

# BACKEND SETUP

## 5️⃣ Navigate to Backend

```bash
cd ../backend
```

---

## 6️⃣ Create Virtual Environment

### Windows

```bash
python -m venv venv
.\venv\Scripts\Activate
```

### Mac/Linux

```bash
python -m venv venv
source venv/bin/activate
```

---

## 7️⃣ Install Backend Dependencies

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv redis
```

---

# DOCKER SETUP

## 8️⃣ Install Docker Desktop

Download:
https://www.docker.com/products/docker-desktop/

Make sure Docker Engine is running.

---

## 9️⃣ Run Docker Containers

From project root:

```bash
docker-compose up -d
```

This starts:

* PostgreSQL
* Redis

---

## 🔟 Verify Containers

```bash
docker ps
```

Expected containers:

* vireon_postgres
* vireon_redis

---

# DATABASE SETUP

## 1️⃣1️⃣ Prisma Environment Variable

Create/update:

```txt
frontend/.env
```

Add:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/vireon_db"
```

---

## 1️⃣2️⃣ Run Prisma Migration

Inside frontend:

```bash
npx prisma migrate dev --name init
```

---

## 1️⃣3️⃣ Open Prisma Studio

```bash
npx prisma studio
```

This opens database GUI.

Tables:

* Participant
* Team
* Judge
* Evaluation
* Event

---

# RUNNING THE APPLICATION

# Frontend

Inside frontend:

```bash
npm run dev
```

Runs on:
http://localhost:3000

---

# Backend

Inside backend:

Activate venv first.

Then:

```bash
uvicorn main:app --reload
```

Runs on:
http://127.0.0.1:8000

---

# REDIS + BULLMQ

## Redis Port

Redis Docker container runs on:

```txt
6380
```

---

## Queue File

```txt
frontend/lib/queue.ts
```

BullMQ is configured here.

---

# TESTING QUEUE

Test API:

```txt
http://localhost:3000/api/test-queue
```

Expected response:

```json
{
  "success": true,
  "message": "Job added to queue"
}
```

---

# IMPORTANT NOTES

## ⚠ Prisma 7 Configuration

Prisma datasource URL is configured in:

```txt
frontend/prisma.config.ts
```

NOT directly inside schema.prisma.

---

## ⚠ Redis Port Conflict

Windows local Redis service may conflict with Docker Redis.

We use:

```txt
6380:6379
```

inside docker-compose.yml.

# MVP Goal

Build:

* participant upload
* team generation
* AI rationale
* judge scoring
* anomaly detection
* leaderboard
* participant portal

