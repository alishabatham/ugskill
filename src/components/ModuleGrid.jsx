import React, { useState } from 'react';
import { 
  Grid, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  BookOpen,
  UserCheck,
  Cpu,
  ShieldCheck,
  Code2,
  BrainCircuit,
  RotateCcw,
  Building2,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

export default function ModuleGrid({ setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState('');

  const modules = [
    { num: 1, title: "College & Academic Setup", cat: "Admin", desc: "College info, departments, courses, semesters, batches, subjects, faculty & student bulk import via CSV/API." },
    { num: 2, title: "Student Complete Digital Profile", cat: "Passport", desc: "Single UGSkill ID tracking 360° student journey (LMS, MST, Coding, Communication, AI Interview, Placement)." },
    { num: 3, title: "AI-Powered LMS", cat: "LMS", desc: "Manual Mode & AI Mode: Upload PDF/PPT/Video -> AI generates modules, notes, quizzes & final tests." },
    { num: 4, title: "AI Content Engine", cat: "LMS", desc: "Auto-generates MCQs, descriptive questions, viva questions, case studies & coding problems from uploaded notes." },
    { num: 5, title: "Student Learning Experience", cat: "LMS", desc: "Automated progress tracking (Started, In-progress, Completed, Time spent, Weak topics) with next-action triggers." },
    { num: 6, title: "Unified Assessment Engine", cat: "Assessment", desc: "MCQ, Fill Blanks, Numerical, Case Study, Viva, Coding, Aptitude, LSRW & Diagram-based tests in one system." },
    { num: 7, title: "Mid-Semester Test (MST) System", cat: "Assessment", desc: "AI generates balanced paper sets, question randomization, answer key, scheduling & faculty approval." },
    { num: 8, title: "QR Exam Entry", cat: "Proctoring", desc: "Unique QR scan for exam entry with instant face verification and identity eligibility checks." },
    { num: 9, title: "AI Proctoring Engine", cat: "Proctoring", desc: "Face verification, multiple faces detection, tab switching, mic noise gauge, copy/paste lock & timestamped evidence." },
    { num: 10, title: "Live Proctor Monitoring & Streaming", cat: "Proctoring", desc: "Faculty dashboard with live camera/screen feeds, warning chat, flag suspicious attempt & terminate session." },
    { num: 11, title: "In-Browser Coding IDE", cat: "Coding", desc: "Supports C, C++, Java, Python, JS, SQL with compilation, hidden test cases, memory/runtime benchmarks & similarity check." },
    { num: 12, title: "AI Mock Interviewer", cat: "Interview", desc: "Adaptive technical & HR questions, speech clarity scoring, confidence index, feedback & skill gap analysis." },
    { num: 13, title: "Placement Training Engine", cat: "Training", desc: "Batch creation, live class integration, automated assignment of practice material & mock tests." },
    { num: 14, title: "Remedial Automation", cat: "Training", desc: "If score < benchmark, AI automatically triggers targeted practice modules and re-testing until passing." },
    { num: 15, title: "Skill Engine", cat: "Passport", desc: "Aggregates learning, MST, coding & interview performance into holistic technical & soft skill radar." },
    { num: 16, title: "Placement Readiness Score", cat: "Placement", desc: "AI computes overall readiness score (e.g. 81%) and provides actionable module recommendations." },
    { num: 17, title: "HR Portal", cat: "HR", desc: "Recruiters post company, JD, required skills, eligibility criteria, salary range & test/interview rules." },
    { num: 18, title: "HR Automatic Assessment", cat: "HR", desc: "AI parses HR JD to automatically create matching MCQs, coding challenges & viva interview rounds." },
    { num: 19, title: "Automatic Candidate Filtering", cat: "HR", desc: "Auto-filters eligible pool (CGPA >= 7, Java >= 70, Coding >= 60) and delivers ranked shortlists." },
    { num: 20, title: "Communication Automation", cat: "System", desc: "Automated Email, App Notification, SMS & WhatsApp alerts for exam invites, schedules & placement results." },
    { num: 21, title: "Connected Workflow Engine", cat: "Core", desc: "The brain of UGSkill: Course pass -> Quiz unlock -> MST -> Coding -> AI Interview -> HR Match -> Selection." },
    { num: 22, title: "Faculty Automation", cat: "Faculty", desc: "Natural language commands ('Create DBMS MST for Unit 1-5') auto-configure papers, proctoring & reports." },
    { num: 23, title: "Placement Cell Automation", cat: "Placement", desc: "TPO automated candidate invite, screening, ranking & direct HR report delivery." },
    { num: 24, title: "Dedicated AI Agents Suite", cat: "AI Agents", desc: "6 specialized agents: AI Admin, AI Faculty, AI Student, AI Training, AI Placement & AI HR." },
    { num: 25, title: "Dashboard & Analytics", cat: "Analytics", desc: "Tailored 360° dashboards for Principal, Faculty, TPO, HR & Students." },
    { num: 26, title: "Additional Systems", cat: "College", desc: "Parent portal, Mentor-mentee, Hackathons, Clubs, Internships, Research & Alumni management." },
    { num: 27, title: "Security & Compliance", cat: "Security", desc: "Role-based access (RBAC), SSO, audit logs, data encryption & proctoring evidence retention policy." },
    { num: 28, title: "Integration Bridge", cat: "Integration", desc: "Connects with existing college ERPs via bi-directional REST APIs." },
    { num: 29, title: "End-to-End Execution Flow", cat: "Core", desc: "Complete practical workflow demonstration (e.g. Prestige College 1,800 students walkthrough)." },
  ];

  const filteredModules = modules.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
          <Grid className="w-3.5 h-3.5" />
          <span>UGSkill COMPLETE SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          All 29 System Modules &amp; Features
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Explore the complete breakdown of the UGSkill unified platform from academic setup to HR placement.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-10 relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search all 29 modules (e.g. Proctoring, MST, Coding, HR)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-md"
        />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredModules.map((m) => (
          <div 
            key={m.num}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center border border-indigo-500/30">
                  {m.num}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {m.cat}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{m.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{m.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-end text-[10px] text-indigo-400 font-semibold">
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Module <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
