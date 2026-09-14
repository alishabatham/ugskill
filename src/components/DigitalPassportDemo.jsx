import React, { useState } from 'react';
import { 
  UserCheck, 
  Award, 
  CheckCircle2, 
  BrainCircuit, 
  TrendingUp, 
  Code2, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  RotateCcw, 
  Building2, 
  ExternalLink,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export default function DigitalPassportDemo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [remedialTriggered, setRemedialTriggered] = useState(false);

  const studentData = {
    id: "UG2401256",
    name: "Ananya Sharma",
    college: "Prestige Institute of Engineering & Technology",
    course: "B.Tech Computer Science & Engineering",
    batch: "2022 - 2026",
    semester: "Semester 6",
    email: "ananya.sharma@prestige.edu.in",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    readinessScore: 81,
    metrics: {
      courseCompletion: 87,
      quizScore: 82,
      mstScore: 74,
      codingScore: 68,
      communication: 72,
      aiInterview: 78,
      proctorTrust: 99.4,
    },
    skills: [
      { name: "Java & OOPs", level: 85, status: "Mastered" },
      { name: "Data Structures & Algo", level: 78, status: "Proficient" },
      { name: "DBMS & SQL", level: 92, status: "Mastered" },
      { name: "Web Dev (React/Node)", level: 80, status: "Proficient" },
      { name: "Communication & LSRW", level: 72, status: "Needs Practice" },
      { name: "System Design", level: 60, status: "Weak Gap" },
    ],
    attempts: [
      { company: "TCS Digital", role: "Software Engineer", date: "2026-08-20", status: "Shortlisted", score: "88/100" },
      { company: "Infosys Specialist", role: "Power Programmer", date: "2026-08-25", status: "AI Interview Passed", score: "84/100" },
      { company: "Amazon", role: "SDE Intern", date: "2026-09-02", status: "In Assessment Queue", score: "Pending" },
    ],
    certificates: [
      { title: "Advanced Java Programming & Collections", issuer: "UGSkill AI Engine", date: "Aug 2026", id: "CERT-UG-9982" },
      { title: "DBMS SQL Proctored MST Certification", issuer: "Prestige College & UGSkill", date: "Jul 2026", id: "CERT-UG-8812" },
      { title: "AI Technical Interview Readiness", issuer: "UGSkill Career passport", date: "Aug 2026", id: "CERT-UG-7741" },
    ]
  };

  const handleTriggerRemedial = () => {
    setRemedialTriggered(true);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
          <UserCheck className="w-3.5 h-3.5" />
          <span>MODULE 2: COMPLETE 360° STUDENT SKILL &amp; PLACEMENT DASHBOARD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Every Student’s Verified Skill Profile
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          From enrollment to placement — every course, quiz, MST exam, proctor score, coding challenge, and AI interview is permanently recorded under a single UGSkill ID.
        </p>
      </div>

      {/* Main Passport Card Shell */}
      <div className="glass-panel-glow rounded-3xl p-4 sm:p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
        
        {/* Top Student Badge Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-800/80 pb-6 gap-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              <img 
                src={studentData.avatar} 
                alt={studentData.name}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-500 shadow-neon-indigo"
              />
              <span className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-emerald-500 text-white font-bold text-[9px] sm:text-[10px] shadow">
                VERIFIED
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">{studentData.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  ID: {studentData.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Job Ready
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-1">{studentData.course} ({studentData.semester})</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{studentData.college} • Batch {studentData.batch}</p>
            </div>
          </div>

          {/* Overall Placement Readiness Meter */}
          <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex items-center justify-between lg:justify-end gap-6">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Placement Readiness Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {studentData.readinessScore}%
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +4.2% this month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 animate-pulse-slow" />
            </div>
          </div>

        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 mt-6 border-b border-slate-800 pb-3 overflow-x-auto">
          {[
            { id: 'overview', label: '360° Journey Overview', icon: Sparkles },
            { id: 'skills', label: 'Skill Matrix & Gaps', icon: BrainCircuit },
            { id: 'attempts', label: 'Placement Drives & HR', icon: Building2 },
            { id: 'certificates', label: 'Verified Credentials', icon: Award },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-neon-indigo' 
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: Overview */}
        {activeTab === 'overview' && (
          <div className="mt-6 space-y-6 animate-in fade-in duration-200">
            
            {/* Metric Score Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {[
                { label: 'Course Progress', score: `${studentData.metrics.courseCompletion}%`, color: 'text-blue-400', desc: '8/9 Modules' },
                { label: 'Quiz Average', score: `${studentData.metrics.quizScore}%`, color: 'text-indigo-400', desc: '24 Quizzes' },
                { label: 'MST Exam Score', score: `${studentData.metrics.mstScore}%`, color: 'text-purple-400', desc: 'Unit 1-5 Final' },
                { label: 'Coding IDE', score: `${studentData.metrics.codingScore}%`, color: 'text-cyan-400', desc: '14 Challenges' },
                { label: 'AI Interview', score: `${studentData.metrics.aiInterview}%`, color: 'text-emerald-400', desc: 'Mock Tech Round' },
                { label: 'Communication', score: `${studentData.metrics.communication}%`, color: 'text-amber-400', desc: 'Speech Analysis' },
                { label: 'Proctor Integrity', score: `${studentData.metrics.proctorTrust}%`, color: 'text-teal-400', desc: '0 Violations' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all">
                  <p className="text-[10px] font-semibold text-slate-400">{item.label}</p>
                  <p className={`text-xl font-extrabold ${item.color} mt-1`}>{item.score}</p>
                  <p className="text-[9px] text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* AI Automated Remedial Trigger Box */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    AI Gap Diagnostic Identified Weak Topic: <span className="text-amber-300">Java Collections &amp; Multithreading</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Student scored &lt; 70% in Multithreading coding test case. Auto-remedial workflow ready to trigger.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto">
                {remedialTriggered ? (
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Remedial Module Auto-Assigned!
                  </div>
                ) : (
                  <button
                    onClick={handleTriggerRemedial}
                    className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Trigger Remedial Automation
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Skills */}
        {activeTab === 'skills' && (
          <div className="mt-6 space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentData.skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">{skill.name}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      skill.level >= 80 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {skill.level}% ({skill.status})
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        skill.level >= 80 ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' : 'bg-gradient-to-r from-amber-500 to-orange-400'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Placement Drives */}
        {activeTab === 'attempts' && (
          <div className="mt-6 space-y-4 animate-in fade-in duration-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Company</th>
                    <th className="p-3">Job Role</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {studentData.attempts.map((att, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-3 font-bold text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        {att.company}
                      </td>
                      <td className="p-3">{att.role}</td>
                      <td className="p-3 text-slate-400">{att.date}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {att.status}
                        </span>
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-400">{att.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 4: Certificates */}
        {activeTab === 'certificates' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {studentData.certificates.map((cert, idx) => (
              <div key={idx} className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>ID: {cert.id}</span>
                  <span className="text-indigo-400 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                    Verify Badge <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
