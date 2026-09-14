import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

export default function DigitalPassportBanner({ onOpenInteractiveModal }) {
  const studentData = {
    id: "UG2401256",
    name: "Ananya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    readinessScore: 81,
    metrics: [
      { label: 'Course Completion', score: '87%', iconColor: 'text-emerald-500', barBg: 'bg-emerald-500' },
      { label: 'MST Score', score: '74%', iconColor: 'text-emerald-500', barBg: 'bg-emerald-500' },
      { label: 'Coding Score', score: '68%', iconColor: 'text-blue-500', barBg: 'bg-blue-500' },
      { label: 'AI Interview', score: '78%', iconColor: 'text-emerald-500', barBg: 'bg-emerald-500' },
      { label: 'Communication', score: '72%', iconColor: 'text-purple-500', barBg: 'bg-purple-500' },
    ]
  };

  return (
    <section className="py-20 bg-[#09152b] text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Banner Headline & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Complete <br />
              Academic &amp; Placement Profile
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-md">
              Track your learning, certifications, test scores, skills, interviews and placement journey — all in one profile.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInteractiveModal('get-started')}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all shadow-xl flex items-center gap-2 group cursor-pointer"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Passport Preview Card */}
          <div className="lg:col-span-7 relative">
            
            {/* White Passport Preview Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-slate-900 shadow-xl border border-slate-100 relative z-10 max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-3 sm:pb-5 gap-2.5 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <img
                    src={studentData.avatar}
                    alt={studentData.name}
                    className="w-11 h-11 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-slate-200 shadow-sm shrink-0"
                  />
                  <div>
                    <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">{studentData.name}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      UGSkill ID: <strong className="text-slate-800">{studentData.id}</strong>
                    </p>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Placement Ready
                    </span>
                  </div>
                </div>

                {/* Overall Readiness Radial Ring */}
                <div className="flex items-center gap-2.5 bg-slate-50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 w-full sm:w-auto justify-center">
                  <div className="relative w-9 h-9 sm:w-14 sm:h-14 rounded-full border-[3px] sm:border-4 border-emerald-500 border-t-emerald-200 flex items-center justify-center shrink-0">
                    <span className="text-[11px] sm:text-sm font-extrabold text-slate-900">81%</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tight">Overall</p>
                    <p className="text-[11px] sm:text-xs font-extrabold text-slate-900">Readiness</p>
                  </div>
                </div>
              </div>

              {/* 5 Progress Metrics Grid (Compact 3-col on mobile, 5-col on desktop) */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-3 mt-3 sm:mt-4">
                {studentData.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50/80 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 text-center">
                    <p className={`text-xs sm:text-base font-extrabold ${m.iconColor}`}>{m.score}</p>
                    <p className="text-[8px] sm:text-[9px] font-bold text-slate-500 mt-0.5 truncate">{m.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Handwritten White Annotation on right */}
            <div className="hidden sm:flex absolute -bottom-10 right-4 z-20 font-handwriting text-white text-3xl rotate-[-3deg] items-center gap-2 pointer-events-none">
              <span>Learn Improve <br />Get Placed</span>
              <span className="text-4xl text-blue-300">⤵</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
