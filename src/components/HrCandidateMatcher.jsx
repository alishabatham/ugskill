import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  UserCheck, 
  Search, 
  Download, 
  ArrowRight, 
  Award,
  Users,
  Briefcase
} from 'lucide-react';

export default function HrCandidateMatcher() {
  const [jdText, setJdText] = useState('Senior Java Developer: Requires Java OOPs >= 75%, SQL >= 70%, Coding Score >= 65%, CGPA >= 7.0, No active backlogs. Package: 12 LPA.');
  const [isMatching, setIsMatching] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  const handleMatchCandidates = () => {
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setMatchResult({
        totalEvaluated: 1800,
        eligibleCount: 320,
        shortlistedTop: [
          { id: "UG2401256", name: "Ananya Sharma", cgpa: "8.8", javaScore: "85%", codingScore: "68%", aiInterview: "78%", matchIndex: "96%", status: "Auto Shortlisted" },
          { id: "UG2401188", name: "Rohan Verma", cgpa: "8.4", javaScore: "90%", codingScore: "82%", aiInterview: "84%", matchIndex: "94%", status: "Auto Shortlisted" },
          { id: "UG2401302", name: "Priya Nair", cgpa: "8.2", javaScore: "82%", codingScore: "75%", aiInterview: "80%", matchIndex: "91%", status: "Auto Shortlisted" },
          { id: "UG2401410", name: "Vikramaditya Singh", cgpa: "7.9", javaScore: "78%", codingScore: "72%", aiInterview: "76%", matchIndex: "88%", status: "Assessment Sent" },
        ]
      });
    }, 1400);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
          <Building2 className="w-3.5 h-3.5" />
          <span>MODULES 17, 18, 19 &amp; 23: HR PORTAL &amp; AI CANDIDATE SCREENING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          HR Job Description Parsing &amp; Candidate Matcher
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Upload Job Description (JD) — AI extracts skill criteria, auto-configures test assessments, filters eligible candidate pool, and ranks top talents instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 5 Cols: JD Input */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
          
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold text-white">HR Job Description Upload</h3>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Paste Job Description or Criteria:
            </label>
            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              className="w-full h-40 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 leading-relaxed"
            />
          </div>

          <button
            onClick={handleMatchCandidates}
            disabled={isMatching}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-neon-indigo hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            {isMatching ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                AI Screenings 1,800 Digital Passports...
              </>
            ) : (
              <>
                <Filter className="w-4 h-4" /> Filter &amp; Match Eligible Candidates
              </>
            )}
          </button>

        </div>

        {/* Right 7 Cols: Filtered Candidates List */}
        <div className="lg:col-span-7">
          {matchResult ? (
            <div className="glass-panel-glow rounded-3xl p-6 border border-purple-500/30 space-y-5 animate-in fade-in duration-300">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400 shrink-0" /> AI Candidate Pipeline Analysis
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Evaluated <strong>{matchResult.totalEvaluated}</strong> total students • <strong>{matchResult.eligibleCount}</strong> met eligibility criteria
                  </p>
                </div>
                <button className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0">
                  <Download className="w-3.5 h-3.5" /> Export HR Shortlist
                </button>
              </div>

              {/* Shortlisted Candidate Rows */}
              <div className="space-y-3">
                {matchResult.shortlistedTop.map((cand) => (
                  <div key={cand.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{cand.name}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                          {cand.id}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Match: {cand.matchIndex}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-1">
                        <span>CGPA: <strong className="text-white">{cand.cgpa}</strong></span>
                        <span>•</span>
                        <span>Java: <strong className="text-indigo-300">{cand.javaScore}</strong></span>
                        <span>•</span>
                        <span>Coding: <strong className="text-cyan-300">{cand.codingScore}</strong></span>
                        <span>•</span>
                        <span>AI Interview: <strong className="text-emerald-300">{cand.aiInterview}</strong></span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                      {cand.status}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-12 border border-slate-800 flex flex-col items-center justify-center text-center h-full text-slate-400">
              <Building2 className="w-14 h-14 text-purple-500/40 mb-3" />
              <h4 className="text-sm font-bold text-white">HR Screening Engine Ready</h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                Paste your Job Description on the left to automatically match student digital passports against required CGPA, coding, and interview benchmarks.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
