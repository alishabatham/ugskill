import React from 'react';
import { 
  Building2, 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Calendar, 
  FileText,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function RoleDashboards({ activeRole, setActiveRole }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>MODULES 1 &amp; 25: 5-IN-1 MULTI-ROLE STAKEHOLDER DASHBOARDS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Role-Based Stakeholder Analytics
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Custom interactive dashboards engineered specifically for College Admins, Faculty, Students, TPOs, and HR recruiters.
        </p>
      </div>

      {/* Role Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'admin', label: '🏛️ College Admin / Principal' },
          { id: 'faculty', label: '👩‍🏫 Faculty Portal' },
          { id: 'student', label: '🎓 Student Passport View' },
          { id: 'tpo', label: '💼 Placement Cell (TPO)' },
          { id: 'hr', label: '🏢 HR & Recruiter Portal' },
        ].map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveRole(r.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeRole === r.id 
                ? 'bg-indigo-600 text-white shadow-neon-indigo scale-105' 
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Dashboard View Shell */}
      <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-indigo-500/30 space-y-6 shadow-2xl">
        
        {/* VIEW 1: COLLEGE ADMIN / PRINCIPAL */}
        {activeRole === 'admin' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">🏛️ College Executive Dashboard</h3>
                <p className="text-xs text-slate-400">Prestige Institute of Engineering &amp; Technology • NAAC A++ Metrics</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold">
                ERP API Bridge: Connected
              </span>
            </div>

            {/* Admin Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Total Enrolled Students</p>
                <p className="text-2xl font-black text-white mt-1">1,800</p>
                <p className="text-[10px] text-emerald-400 mt-1">100% Unique UGSkill IDs</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Active AI LMS Courses</p>
                <p className="text-2xl font-black text-indigo-400 mt-1">42</p>
                <p className="text-[10px] text-slate-400 mt-1">Across 6 Departments</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Proctored MST Exams</p>
                <p className="text-2xl font-black text-purple-400 mt-1">18</p>
                <p className="text-[10px] text-emerald-400 mt-1">0 Security Breaches</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Overall Placement Index</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">81.4%</p>
                <p className="text-[10px] text-emerald-400 mt-1">+12% vs last batch</p>
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Department Performance Breakdown</h4>
              <div className="space-y-2">
                {[
                  { dept: "Computer Science & Engineering", count: "480 Students", readiness: "86%", color: "bg-emerald-500" },
                  { dept: "Information Technology", count: "360 Students", readiness: "83%", color: "bg-cyan-500" },
                  { dept: "Electronics & Communication", count: "420 Students", readiness: "78%", color: "bg-indigo-500" },
                  { dept: "Mechanical & Automation", count: "300 Students", readiness: "71%", color: "bg-amber-500" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-900 p-3 rounded-xl text-xs">
                    <div>
                      <span className="font-bold text-white">{d.dept}</span>
                      <span className="text-[10px] text-slate-400 block">{d.count}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-200">{d.readiness}</span>
                      <div className="w-24 bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full rounded-full ${d.color}`} style={{ width: d.readiness }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FACULTY PORTAL */}
        {activeRole === 'faculty' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">👩‍🏫 Faculty Course &amp; MST Operations</h3>
                <p className="text-xs text-slate-400">Prof. Dr. Rajesh Sharma • Dept of CSE</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold">
                AI Assistant Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white mb-2">DBMS Unit 1-5 MST Schedule</h4>
                <p className="text-xs text-slate-300">Friday, 10:00 AM • 60 Mins</p>
                <p className="text-[10px] text-emerald-400 font-semibold mt-2">✓ AI Proctoring On • Set A &amp; B Ready</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white mb-2">Weak Student Identification</h4>
                <p className="text-xs text-slate-300">14 Students scored &lt; 50% in Quiz 3</p>
                <p className="text-[10px] text-amber-400 font-semibold mt-2">⚡ Remedial Java Module Auto-Triggered</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white mb-2">Uploaded Notes AI Status</h4>
                <p className="text-xs text-slate-300">Syllabus PDF -&gt; 8 Modules Generated</p>
                <p className="text-[10px] text-cyan-400 font-semibold mt-2">✓ 100% Viva Questions Compiled</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: STUDENT PASSPORT VIEW */}
        {activeRole === 'student' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">🎓 Student Skill Passport View</h3>
                <p className="text-xs text-slate-400">Ananya Sharma (UG2401256)</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                Overall Readiness: 81%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <span>Next Action: <strong>AI Technical Mock Interview Round 2</strong></span>
              <span className="text-indigo-400 font-bold hover:underline cursor-pointer">Launch Session &rarr;</span>
            </div>
          </div>
        )}

        {/* VIEW 4: TPO PLACEMENT CELL */}
        {activeRole === 'tpo' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">💼 Placement Cell (TPO) Dashboard</h3>
                <p className="text-xs text-slate-400">Training &amp; Placement Automation Engine</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold">
                12 Active Company Drives
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white">TCS Digital Drive</h4>
                <p className="text-[11px] text-slate-400 mt-1">320 Eligible Candidates</p>
                <p className="text-xs text-emerald-400 font-semibold mt-2">88 Shortlisted for HR</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white">Infosys Specialist</h4>
                <p className="text-[11px] text-slate-400 mt-1">210 Eligible Candidates</p>
                <p className="text-xs text-cyan-400 font-semibold mt-2">54 AI Interview Passed</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-white">Amazon SDE Drive</h4>
                <p className="text-[11px] text-slate-400 mt-1">115 Eligible Candidates</p>
                <p className="text-xs text-indigo-400 font-semibold mt-2">Assessment Active</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: HR PORTAL */}
        {activeRole === 'hr' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">🏢 HR Recruiter Talent Pipeline</h3>
                <p className="text-xs text-slate-400">Global Tech Talent Acquisition Portal</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                Senior Java Role Active
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Top AI Candidate Ranking available for 320 applicants.</span>
              <span className="text-purple-400 font-bold hover:underline cursor-pointer">Open HR Candidate Matcher &rarr;</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
