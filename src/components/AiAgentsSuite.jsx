import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  BrainCircuit, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Briefcase, 
  RotateCcw
} from 'lucide-react';

export default function AiAgentsSuite() {
  const [selectedAgent, setSelectedAgent] = useState('student');
  const [queryInput, setQueryInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'AI Student Assistant', text: 'Hello Ananya! I analyzed your latest MST exam in DBMS. You did great in SQL Joins (92%), but your score in Multithreading was 68%. Would you like me to generate a 15-minute quick revision module?' }
  ]);

  const agents = [
    { id: 'admin', name: 'AI Admin Assistant', role: 'College Operations & Accreditation', icon: GraduationCap, color: 'text-blue-400', border: 'border-blue-500/40' },
    { id: 'faculty', name: 'AI Faculty Assistant', role: 'Course, Quiz & MST Generator', icon: BookOpen, color: 'text-indigo-400', border: 'border-indigo-500/40' },
    { id: 'student', name: 'AI Student Assistant', role: 'Personalized Learning & Career Guidance', icon: Bot, color: 'text-emerald-400', border: 'border-emerald-500/40' },
    { id: 'training', name: 'AI Training Assistant', role: 'Skill Gap & Remedial Automation', icon: RotateCcw, color: 'text-amber-400', border: 'border-amber-500/40' },
    { id: 'placement', name: 'AI Placement Assistant', role: 'Company Eligibility & Drive Manager', icon: Briefcase, color: 'text-purple-400', border: 'border-purple-500/40' },
    { id: 'hr', name: 'AI HR Assistant', role: 'JD Screening & Interview Ranking', icon: Building2, color: 'text-rose-400', border: 'border-rose-500/40' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!queryInput.trim()) return;

    const userMsg = queryInput;
    setChatMessages(prev => [...prev, { sender: 'You', text: userMsg }]);
    setQueryInput('');

    setTimeout(() => {
      const active = agents.find(a => a.id === selectedAgent);
      setChatMessages(prev => [
        ...prev, 
        { 
          sender: active.name, 
          text: `[${active.name} Response]: Processed your request regarding "${userMsg}". AI orchestrator has updated your digital skill passport record automatically.` 
        }
      ]);
    }, 1000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
          <Bot className="w-3.5 h-3.5" />
          <span>MODULE 24: SPECIALIZED DEDICATED AI AGENTS SUITE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          6 Specialized AI Assistants
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Autonomous AI agents serving College Admins, Faculty, Students, Remedial Trainers, Placement Officers, and HR Recruiters.
        </p>
      </div>

      {/* Agents Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {agents.map((ag) => {
          const Icon = ag.icon;
          const isSelected = selectedAgent === ag.id;
          return (
            <button
              key={ag.id}
              onClick={() => setSelectedAgent(ag.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isSelected 
                  ? 'bg-slate-800 border-indigo-500 shadow-neon-indigo' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Icon className={`w-6 h-6 ${ag.color} mb-2`} />
              <h4 className="text-xs font-bold text-white line-clamp-1">{ag.name}</h4>
              <p className="text-[9px] text-slate-400 line-clamp-2 mt-0.5">{ag.role}</p>
            </button>
          );
        })}
      </div>

      {/* Chat Sandbox with Selected AI Agent */}
      <div className="glass-panel-glow rounded-3xl p-6 border border-indigo-500/30">
        
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">
              Chatting with {agents.find(a => a.id === selectedAgent)?.name}
            </h3>
            <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Active AI Agent Session
            </p>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 h-56 overflow-y-auto space-y-3 font-sans text-xs">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
              <span className="text-[9px] text-slate-500 font-mono mb-0.5">{msg.sender}</span>
              <div className={`p-3 rounded-2xl max-w-lg ${
                msg.sender === 'You'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder={`Ask ${agents.find(a => a.id === selectedAgent)?.name} anything...`}
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5"
          >
            <Send className="w-4 h-4" /> Send
          </button>
        </form>

      </div>
    </section>
  );
}
