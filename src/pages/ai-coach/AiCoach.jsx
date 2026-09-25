import React, { useState } from 'react'

const sampleReplies = [
  "That's a great question! Focus on building 2-3 solid projects that showcase your skills — quality over quantity always impresses recruiters more.",
  "For your target role, I'd suggest strengthening your fundamentals first, then moving to hands-on projects to apply what you've learned.",
  "Networking matters as much as skills — try reaching out to people in your target company on LinkedIn with a short, genuine message.",
  "Tailor your resume for each job you apply to. Match the keywords from the job description — many companies use automated filters.",
  "Practice explaining your projects out loud. Interviewers care as much about how you think as what you built.",
  "Don't wait to feel 100% ready to apply. Apply as you learn — most people get hired while still growing their skills.",
]

const AICoach = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI Career Coach. Ask me anything about jobs, skills, or interview prep." }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = { role: "user", content: input }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    setTimeout(() => {
      const reply = sampleReplies[Math.floor(Math.random() * sampleReplies.length)]
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
      setLoading(false)
    }, 900)
  }

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-bold text-slate-900">AI Coach</h1>
      <p className="mt-1 text-sm text-slate-500">Ask for personalized career guidance.</p>

<div className="mt-6 flex h-100 flex-col rounded-xl border border-slate-200 bg-white">
       <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                m.role === "user"
                  ? "ml-auto bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {m.content}
            </div>
          ))}
          {loading && <p className="text-xs text-slate-400">AI Coach is typing...</p>}
        </div>

        <div className="flex gap-2 border-t border-slate-200 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            onClick={sendMessage}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default AICoach