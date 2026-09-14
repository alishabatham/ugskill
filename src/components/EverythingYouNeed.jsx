import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Calendar, 
  ShieldCheck, 
  Code2, 
  UserCheck, 
  Briefcase 
} from 'lucide-react';

export default function EverythingYouNeed({ onOpenInteractiveModal }) {
  const cards = [
    {
      id: 'academic',
      title: 'Academic Management',
      desc: 'Manage departments, courses, batches, faculty, students and academic calendar.',
      icon: GraduationCap,
      iconBg: 'bg-blue-50 text-blue-600',
      tabTarget: 'dashboards'
    },
    {
      id: 'lms',
      title: 'AI-Powered LMS',
      desc: 'Create courses manually or using AI from your content (PDF/PPT/Video/Notes).',
      icon: BookOpen,
      iconBg: 'bg-purple-50 text-purple-600',
      tabTarget: 'lms-mst'
    },
    {
      id: 'assessment',
      title: 'Smart Assessment',
      desc: 'MCQ, Descriptive, Case Study, Diagram, File Upload, Coding, Aptitude & more.',
      icon: FileText,
      iconBg: 'bg-indigo-50 text-indigo-600',
      tabTarget: 'lms-mst'
    },
    {
      id: 'mst',
      title: 'MST & Exam Management',
      desc: 'AI-generated papers, scheduling, QR-based exam entry and complete automation.',
      icon: Calendar,
      iconBg: 'bg-blue-50 text-blue-600',
      tabTarget: 'lms-mst'
    },
    {
      id: 'proctoring',
      title: 'AI Proctoring',
      desc: 'Face verification, tab switching detection, suspicious activity logs and live monitoring.',
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 text-blue-600',
      tabTarget: 'proctoring'
    },
    {
      id: 'coding',
      title: 'Coding Test Environment',
      desc: 'In-browser IDE with multiple languages, hidden test cases, code analysis and plagiarism check.',
      icon: Code2,
      iconBg: 'bg-indigo-50 text-indigo-600',
      tabTarget: 'coding'
    },
    {
      id: 'interview',
      title: 'AI Interview & Skill Analysis',
      desc: 'Mock interviews, communication analysis, skill gaps and personalized feedback.',
      icon: UserCheck,
      iconBg: 'bg-purple-50 text-purple-600',
      tabTarget: 'interview'
    },
    {
      id: 'placement',
      title: 'Placement & Career Support',
      desc: 'Track applications, company tests, selection status and build a placement-ready profile.',
      icon: Briefcase,
      iconBg: 'bg-purple-50 text-purple-600',
      tabTarget: 'hr-matcher'
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need in One Place
          </h2>
          <p className="text-base text-slate-600 font-medium">
            A complete ecosystem for colleges, faculty and students
          </p>
        </div>

        {/* 8 Feature Cards Grid (2 rows x 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onOpenInteractiveModal(card.tabTarget)}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 card-shadow card-shadow-hover cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
