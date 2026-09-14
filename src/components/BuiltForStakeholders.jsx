import React from 'react';
import { Building2, Users, User, Check, ArrowRight } from 'lucide-react';

export default function BuiltForStakeholders({ onOpenInteractiveModal, setActiveRole }) {
  const cards = [
    {
      roleId: 'admin',
      title: 'For Colleges / Admin',
      icon: Building2,
      iconBg: 'bg-blue-100 text-blue-600',
      bullets: [
        'Manage entire academic ecosystem',
        'Track student performance & outcomes',
        'Ensure secure and fair assessments',
        'Get placement insights',
      ],
      btnText: 'Explore for Colleges →',
      target: 'dashboards'
    },
    {
      roleId: 'faculty',
      title: 'For Faculty',
      icon: Users,
      iconBg: 'bg-blue-100 text-blue-600',
      bullets: [
        'Create courses with AI or manually',
        'Design and conduct exams (MST)',
        'Track student learning and performance',
        'Save time with automated tools',
      ],
      btnText: 'Explore for Faculty →',
      target: 'lms-mst'
    },
    {
      roleId: 'student',
      title: 'For Students',
      icon: User,
      iconBg: 'bg-blue-100 text-blue-600',
      bullets: [
        'Learn from structured, AI-powered courses',
        'Take quizzes, tests and coding challenges',
        'Get AI interview practice and feedback',
        'Build a career-ready digital profile',
      ],
      btnText: 'Explore for Students →',
      target: 'passport'
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Every Stakeholder
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Different roles, one unified platform
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 card-shadow card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    {card.title}
                  </h3>

                  <ul className="space-y-3.5 mb-8">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0 font-bold">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (setActiveRole) setActiveRole(card.roleId);
                    onOpenInteractiveModal(card.target);
                  }}
                  className="w-full py-3 rounded-xl border border-blue-200 text-indigo-600 hover:bg-indigo-50 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{card.btnText}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
