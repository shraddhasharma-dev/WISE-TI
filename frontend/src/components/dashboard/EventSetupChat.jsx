import React, { useState, useRef, useEffect } from "react";
import { aiApi } from "../../api";

export default function EventSetupChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! Describe your event and I'll extract its configuration automatically. For example: \"A 24-hour hackathon with teams of 4, 3 judges, scored on innovation and execution, top 5 teams advance to finals.\""
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    const newHistory = [...history, { role: "user", content: userText }];
    setMessages(prev => [...prev, { role: "user", text: userText }]);
    setHistory(newHistory);
    setLoading(true);
    try {
      const res = await aiApi.configureEvent({ description: userText, history });
      const parsed = res.config;
      if (res.status === "needs_clarification") {
        const reply = parsed.clarification_needed;
        setMessages(prev => [...prev, { role: "assistant", text: reply }]);
        setHistory(prev => [...prev, { role: "assistant", content: reply }]);
      } else if (res.status === "complete") {
        setConfig(parsed);
        setMessages(prev => [...prev, { role: "assistant", text: "Got it! I've extracted your event configuration. Review it on the right and confirm when ready." }]);
        setHistory(prev => [...prev, { role: "assistant", content: "Configuration extracted successfully." }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please try again." }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Failed to reach the AI. Please check your connection." }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const reset = () => {
    setMessages([{ role: "assistant", text: "Hi! Describe your event and I'll extract its configuration automatically." }]);
    setHistory([]);
    setConfig(null);
    setInput("");
  };

  return (
    <div className="bg-white rounded-2xl border border-[#cbe8eb] overflow-hidden">

      {/* Header */}
      <div className="px-8 pt-4 pb-3 border-b border-[#d6f3f7] flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-[#012d1d]">Event Setup Assistant</h3>
          <p className="text-xs text-gray-500 mt-0.5">Describe your event in plain English — AI will configure it</p>
        </div>
        <button onClick={reset} className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5">
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#e8f5f7]">

        {/* CHAT PANEL */}
        <div className="flex flex-col h-[320px]">

          <div className="flex-1 overflow-y-auto px-6 pt-3 pb-2 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#012d1d] text-white rounded-br-sm"
                    : "bg-[#eafdff] text-[#012d1d] rounded-bl-sm border border-[#cbe8eb]"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#eafdff] border border-[#cbe8eb] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0f6e56]"
                      style={{ animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-6 py-3 border-t border-[#e8f5f7] flex gap-3 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your event..."
              rows={2}
              className="flex-1 resize-none border border-[#cbe8eb] rounded-xl px-4 py-2.5 text-sm text-[#012d1d] bg-[#f8fffe] focus:outline-none focus:border-[#0f6e56] placeholder-gray-400"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="bg-[#012d1d] text-white rounded-xl px-5 py-2.5 text-sm font-medium disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>

        {/* CONFIG PANEL */}
        <div className="h-[320px] overflow-y-auto px-6 py-4">
          {!config ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#eafdff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0f6e56] text-2xl">auto_awesome</span>
              </div>
              <p className="text-sm text-gray-400">Your extracted event config will appear here once the AI processes your description.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-[#012d1d]">Extracted Configuration</h4>
                <span className="text-[10px] bg-green-100 text-green-700 border border-green-200 rounded-full px-2.5 py-0.5 font-medium uppercase">Ready</span>
              </div>

              {[
                { label: "Event Name", value: config.event_name },
                { label: "Type", value: config.event_type },
                { label: "Team Size", value: config.team_size },
                { label: "Judges", value: config.num_judges },
                { label: "Advancement", value: config.advancement_rule },
              ].map(({ label, value }) => value && (
                <div key={label} className="flex justify-between items-start border-b border-[#e8f5f7] pb-3">
                  <span className="text-xs text-gray-500">{label}</span>
                  <span className="text-xs font-medium text-[#012d1d] text-right max-w-[60%]">{value}</span>
                </div>
              ))}

              {config.stages?.length > 0 && (
                <div className="border-b border-[#e8f5f7] pb-3">
                  <span className="text-xs text-gray-500 block mb-2">Stages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {config.stages.map((s, i) => (
                      <span key={i} className="text-[11px] bg-[#eafdff] border border-[#cbe8eb] text-[#0f6e56] rounded-full px-2.5 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {config.scoring_criteria?.length > 0 && (
                <div className="border-b border-[#e8f5f7] pb-3">
                  <span className="text-xs text-gray-500 block mb-2">Scoring Criteria</span>
                  <div className="flex flex-wrap gap-1.5">
                    {config.scoring_criteria.map((s, i) => (
                      <span key={i} className="text-[11px] bg-[#f0f9ff] border border-[#bae0f5] text-[#185fa5] rounded-full px-2.5 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {config.communication_touchpoints?.length > 0 && (
                <div className="pb-3">
                  <span className="text-xs text-gray-500 block mb-2">Communication</span>
                  <div className="flex flex-wrap gap-1.5">
                    {config.communication_touchpoints.map((s, i) => (
                      <span key={i} className="text-[11px] bg-[#faf5ff] border border-[#e9d5ff] text-[#7c3aed] rounded-full px-2.5 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={reset} className="w-full mt-2 bg-[#012d1d] text-white rounded-xl py-2.5 text-sm font-medium">
                Confirm & Reset
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}