import React from 'react';
import { 
  Building2, 
  BookOpen, 
  FileText, 
  ShieldCheck, 
  BarChart3, 
  UserCheck, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';

export default function WorkflowEngine({ onOpenInteractiveModal }) {
  const steps = [
    {
      num: 1,
      title: 'College Setup',
      subtitle: 'Add academic structure, students, faculty, syllabus',
      icon: Building2,
      iconBg: 'bg-blue-100 text-blue-600',
      target: 'dashboards'
    },
    {
      num: 2,
      title: 'Learn',
      subtitle: 'AI-powered LMS and structured courses',
      icon: BookOpen,
      iconBg: 'bg-blue-100 text-blue-600',
      target: 'lms-mst'
    },
    {
      num: 3,
      title: 'Practice & Assess',
      subtitle: 'Quizzes, Assignments, MST, Coding Tests',
      icon: FileText,
      iconBg: 'bg-blue-100 text-blue-600',
      target: 'lms-mst'
    },
    {
      num: 4,
      title: 'Be Verified',
      subtitle: 'AI proctoring with secure exam environment',
      icon: ShieldCheck,
      iconBg: 'bg-blue-100 text-blue-600',
      target: 'proctoring'
    },
    {
      num: 5,
      title: 'Build Skills',
      subtitle: 'Track progress, identify gaps, get recommendations',
      icon: BarChart3,
      iconBg: 'bg-blue-100 text-blue-600',
      target: 'passport'
    },
    {
      num: 6,
      title: 'Get Interview Ready',
      subtitle: 'AI mock interviews and feedback',
      icon: UserCheck,
      iconBg: 'bg-purple-100 text-purple-600',
      target: 'interview'
    },
    {
      num: 7,
      title: 'Get Placed',
      subtitle: 'Connect with top companies',
      icon: Briefcase,
      iconBg: 'bg-purple-100 text-purple-600',
      target: 'hr-matcher'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The UGSkill Workflow
          </h2>
          <p className="text-base text-slate-600 font-medium">
            A seamless journey from enrollment to placement
          </p>
        </div>

        {/* 7-Step Pipeline */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pb-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.num}>
                <div
                  onClick={() => onOpenInteractiveModal(step.target)}
                  className="flex-1 w-full max-w-xs lg:max-w-none text-center group cursor-pointer bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl border border-slate-100 lg:border-0 shadow-sm lg:shadow-none hover:shadow-md transition-all"
                >
                  {/* Circle Icon Container */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${step.iconBg} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.num}. {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-[10px] text-slate-500 font-medium mt-1 leading-snug max-w-[180px] lg:max-w-[130px] mx-auto">
                    {step.subtitle}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block text-slate-300 self-start mt-6">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="lg:hidden text-indigo-400 my-1">
                      ↓
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
