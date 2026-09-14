import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Code2, 
  CheckSquare, 
  UserCheck, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import heroStudentImg from '../assets/hero_student.jpg';

export default function Hero({ onOpenInteractiveModal }) {
  const stats = [
    { value: '500+', label: 'Colleges Onboarded' },
    { value: '1L+', label: 'Students Empowered' },
    { value: '10+', label: 'Integrated Modules' },
    { value: '95%', label: 'Placement Readiness' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill */}
            <div className="inline-block">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-3.5 py-1 rounded-full">
                AI-POWERED UNIFIED ACADEMIC ECOSYSTEM
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              From Classroom to Career, <br />
              All in <span className="text-indigo-600">One Platform</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              UGSkill integrates Learning, Assessment, Proctoring, Coding, AI Interviews and Placement — building a complete 360° digital skill record for every student.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onOpenInteractiveModal('get-started')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer text-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Statistics Counters Row */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-100 mt-8">
              {stats.map((s, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Pills */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Student Laptop Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={heroStudentImg}
                  alt="Student holding laptop with UGSkill"
                  className="w-full h-[460px] sm:h-[500px] object-cover"
                />
              </div>

              {/* Desktop Floating Pill Badges (hidden on mobile, floating on tablet/desktop) */}
              <div className="hidden sm:block">
                {/* Pill 1: Learn */}
                <div 
                  onClick={() => onOpenInteractiveModal('lms-mst')}
                  className="absolute top-4 -left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Learn</p>
                    <p className="text-[10px] text-slate-500 font-medium">AI-Powered LMS</p>
                  </div>
                </div>

                {/* Pill 2: Code */}
                <div 
                  onClick={() => onOpenInteractiveModal('coding')}
                  className="absolute top-8 -right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Code</p>
                    <p className="text-[10px] text-slate-500 font-medium">In-Browser IDE</p>
                  </div>
                </div>

                {/* Pill 3: Assess */}
                <div 
                  onClick={() => onOpenInteractiveModal('lms-mst')}
                  className="absolute top-44 -left-10 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Assess</p>
                    <p className="text-[10px] text-slate-500 font-medium">MST, Quizzes, Tests</p>
                  </div>
                </div>

                {/* Pill 4: Get Interview Ready */}
                <div 
                  onClick={() => onOpenInteractiveModal('interview')}
                  className="absolute top-48 -right-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Interview Ready</p>
                    <p className="text-[10px] text-slate-500 font-medium">AI Mock Interviews</p>
                  </div>
                </div>

                {/* Pill 5: Be Verified */}
                <div 
                  onClick={() => onOpenInteractiveModal('proctoring')}
                  className="absolute bottom-16 -left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Be Verified</p>
                    <p className="text-[10px] text-slate-500 font-medium">AI Proctoring</p>
                  </div>
                </div>

                {/* Pill 6: Get Placed */}
                <div 
                  onClick={() => onOpenInteractiveModal('hr-matcher')}
                  className="absolute bottom-12 -right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl badge-float-shadow border border-slate-100 flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Get Placed</p>
                    <p className="text-[10px] text-slate-500 font-medium">Top Companies</p>
                  </div>
                </div>

                {/* Desktop Handwritten Script Annotation */}
                <div className="absolute -bottom-8 right-2 z-30 font-handwriting text-slate-700 text-2xl rotate-[-4deg] flex items-center gap-2 pointer-events-none">
                  <span>Skills Today <br />A Better Tomorrow</span>
                  <span className="text-3xl text-indigo-600">⤵</span>
                </div>
              </div>

            </div>

            {/* Mobile Feature Grid & Annotation (Rendered neatly below photo on mobile screens) */}
            <div className="sm:hidden w-full space-y-3 mt-4">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { title: 'Learn', desc: 'AI-Powered LMS', icon: BookOpen, color: 'bg-purple-100 text-purple-600', target: 'lms-mst' },
                  { title: 'Code', desc: 'In-Browser IDE', icon: Code2, color: 'bg-blue-100 text-blue-600', target: 'coding' },
                  { title: 'Assess', desc: 'MST & Quizzes', icon: CheckSquare, color: 'bg-emerald-100 text-emerald-600', target: 'lms-mst' },
                  { title: 'Interview Ready', desc: 'AI Mock Interview', icon: UserCheck, color: 'bg-indigo-100 text-indigo-600', target: 'interview' },
                  { title: 'Be Verified', desc: 'AI Proctoring', icon: ShieldCheck, color: 'bg-blue-100 text-blue-600', target: 'proctoring' },
                  { title: 'Get Placed', desc: 'Top Companies', icon: Briefcase, color: 'bg-teal-100 text-teal-600', target: 'hr-matcher' },
                ].map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => onOpenInteractiveModal(pill.target)}
                      className="bg-white p-2.5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
                    >
                      <div className={`w-8 h-8 rounded-xl ${pill.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">{pill.title}</p>
                        <p className="text-[10px] text-slate-500 font-medium truncate">{pill.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Handwritten Script Annotation */}
              <div className="font-handwriting text-slate-700 text-xl text-center flex items-center justify-center gap-2 pt-2">
                <span>Skills Today, A Better Tomorrow</span>
                <span className="text-2xl text-indigo-600">✨</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
