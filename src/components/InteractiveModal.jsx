import React, { useState } from 'react';
import { X, Sparkles, Check, GraduationCap, ShieldCheck, UserCheck, ArrowRight, Building2, Users, Mail, Phone, BookOpen } from 'lucide-react';
import DigitalPassportDemo from './DigitalPassportDemo';
import WorkflowEngine from './WorkflowEngine';
import AiProctoringSimulator from './AiProctoringSimulator';
import CodingSandbox from './CodingSandbox';
import AiMockInterview from './AiMockInterview';
import LmsAndMstGenerator from './LmsAndMstGenerator';
import HrCandidateMatcher from './HrCandidateMatcher';
import RoleDashboards from './RoleDashboards';
import AiAgentsSuite from './AiAgentsSuite';
import ModuleGrid from './ModuleGrid';

export default function InteractiveModal({ modalTarget, onClose, activeRole, setActiveRole }) {
  const [loginRole, setLoginRole] = useState('student');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Get Started Form States
  const [formData, setFormData] = useState({
    role: 'student',
    fullName: '',
    collegeName: '',
    department: 'Computer Science & Engineering',
    email: '',
    phone: '',
    batchYear: '2022-2026',
  });
  const [registerSubmitted, setRegisterSubmitted] = useState(false);
  const [generatedUgId, setGeneratedUgId] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dbSaved, setDbSaved] = useState(false);

  if (!modalTarget) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      if (setActiveRole) setActiveRole(loginRole);
      setLoginSuccess(false);
    }, 1200);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    const newUgId = 'UG' + Math.floor(1000000 + Math.random() * 9000000);
    setGeneratedUgId(newUgId);

    const payload = {
      ...formData,
      ugId: newUgId,
      formType: 'registration'
    };

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setDbSaved(true);
      } else {
        console.warn('Backend warning:', data.error);
        setSubmitError(data.error || 'Failed to sync with database');
      }
    } catch (err) {
      console.error('API Error connecting to backend:', err);
      setSubmitError('Backend server disconnected');
    } finally {
      setIsSubmitting(false);
      setRegisterSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container (Light Mode Clean Card) */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white text-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-y-auto">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">UGSkill Interactive Platform Sandbox</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-6">
          
          {/* GET STARTED REGISTRATION FORM VIEW (LIGHT MODE) */}
          {modalTarget === 'get-started' && (
            <div className="max-w-xl mx-auto py-4 space-y-6">
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-indigo-600/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Get Started with UGSkill</h3>
                <p className="text-xs text-slate-500 mt-1">Create your institution or student digital passport profile</p>
              </div>

              {registerSubmitted ? (
                <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-emerald-900">Registration Complete!</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Welcome, <strong className="text-slate-900">{formData.fullName || 'Student'}</strong>! Your digital skill passport has been created.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-emerald-200 text-xs inline-block space-y-1 shadow-sm">
                    <p className="text-slate-400 font-mono text-[10px]">VERIFIED UGSKILL ID</p>
                    <p className="text-2xl font-black text-indigo-600 font-mono">{generatedUgId}</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">✓ 100% Placement Ready Profile Activated</p>
                    {dbSaved ? (
                      <p className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-mono font-bold mt-1 inline-block">
                        ✓ Response Stored in MongoDB (collection: ugskillname)
                      </p>
                    ) : submitError ? (
                      <p className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-mono mt-1 inline-block">
                        ⚠️ {submitError}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        if (setActiveRole) setActiveRole(formData.role);
                        onClose();
                      }}
                      className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Explore {formData.role.toUpperCase()} Digital Passport Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                  
                  {/* Role Selector */}
                  <div>
                    <label className="block text-slate-700 font-bold mb-2">Select Your Role:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'student', label: '🎓 Student' },
                        { id: 'faculty', label: '👩‍🏫 Faculty' },
                        { id: 'admin', label: '🏛️ Admin' },
                        { id: 'hr', label: '🏢 HR' },
                      ].map(r => (
                        <button
                          type="button"
                          key={r.id}
                          onClick={() => setFormData({ ...formData, role: r.id })}
                          className={`py-2.5 px-3 rounded-xl border font-bold text-xs transition-all cursor-pointer ${
                            formData.role === r.id 
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20' 
                              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Full Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">College / University:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prestige Institute of Engg."
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address:</label>
                      <input
                        type="email"
                        required
                        placeholder="ananya.sharma@prestige.edu.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Phone Number:</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Department / Branch:</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 cursor-pointer"
                      >
                        <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electronics & Communication">Electronics &amp; Communication</option>
                        <option value="Mechanical & Automation">Mechanical &amp; Automation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Batch / Graduation Year:</label>
                      <select
                        value={formData.batchYear}
                        onChange={(e) => setFormData({ ...formData, batchYear: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 cursor-pointer"
                      >
                        <option value="2022-2026">2022 - 2026</option>
                        <option value="2023-2027">2023 - 2027</option>
                        <option value="2024-2028">2024 - 2028</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>{isSubmitting ? 'Saving Response to MongoDB...' : 'Generate Digital Skill Passport & Register'}</span>
                  </button>

                </form>
              )}

            </div>
          )}

          {/* LOGIN MODAL VIEW (LIGHT MODE) */}
          {modalTarget === 'login' && (
            <div className="max-w-md mx-auto py-8 space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-indigo-600/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Sign In to UGSkill</h3>
                <p className="text-xs text-slate-500 mt-1">Access your Digital Passport, LMS, MST &amp; HR Portals</p>
              </div>

              {loginSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in zoom-in-95">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">Login Successful!</h4>
                  <p className="text-xs text-slate-600">Redirecting to {loginRole.toUpperCase()} Portal...</p>
                  <button
                    onClick={() => {
                      if (setActiveRole) setActiveRole(loginRole);
                      onClose();
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer"
                  >
                    Open Portal View Now &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1.5">Select Role Perspective:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'student', label: '🎓 Student' },
                        { id: 'faculty', label: '👩‍🏫 Faculty' },
                        { id: 'admin', label: '🏛️ Admin' },
                      ].map(r => (
                        <button
                          type="button"
                          key={r.id}
                          onClick={() => setLoginRole(r.id)}
                          className={`py-2 rounded-xl border font-bold text-xs cursor-pointer ${
                            loginRole === r.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">UGSkill ID / Email:</label>
                    <input
                      type="text"
                      defaultValue="ananya.sharma@prestige.edu.in"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Password:</label>
                    <input
                      type="password"
                      defaultValue="••••••••••••"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    Authenticate &amp; Open {loginRole.toUpperCase()} Dashboard
                  </button>
                </form>
              )}
            </div>
          )}

          {/* PRICING MODAL VIEW (LIGHT MODE) */}
          {modalTarget === 'pricing' && (
            <div className="py-6 space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="text-2xl font-extrabold text-slate-900">Transparent Plans for Institutions</h3>
                <p className="text-xs text-slate-500 mt-1">Scale from single departments to university-wide campuses</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'College Standard', price: '₹450', unit: '/ student / yr', desc: 'Ideal for colleges onboarding LMS & basic exams.', features: ['Full AI-LMS Course Engine', 'Standard MST Exams', 'Student Digital Passports', 'Email Support'] },
                  { name: 'University Pro (Popular)', price: '₹750', unit: '/ student / yr', desc: 'Complete ecosystem with AI Proctoring & Coding IDE.', features: ['AI Live Proctoring Engine', 'In-Browser Coding IDE', 'AI Mock Interviewer', 'TPO & HR Screening Portal', 'ERP API Integration'] },
                  { name: 'Enterprise Campus', price: 'Custom', unit: 'Dedicated Cloud', desc: 'Custom white-label university deployment.', features: ['Unlimited Students & AI Agents', 'Custom AI LLM Fine-tuning', 'On-premise / Private Cloud', 'Dedicated 24/7 Account Manager'] },
                ].map((plan, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{plan.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{plan.desc}</p>
                      <div className="my-4">
                        <span className="text-3xl font-extrabold text-indigo-600">{plan.price}</span>
                        <span className="text-xs text-slate-400">{plan.unit}</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button onClick={onClose} className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}



          {modalTarget === 'passport' && <DigitalPassportDemo />}
          {modalTarget === 'workflow' && <WorkflowEngine setActiveTab={() => {}} />}
          {modalTarget === 'proctoring' && <AiProctoringSimulator />}
          {modalTarget === 'coding' && <CodingSandbox />}
          {modalTarget === 'interview' && <AiMockInterview />}
          {modalTarget === 'lms-mst' && <LmsAndMstGenerator />}
          {modalTarget === 'hr-matcher' && <HrCandidateMatcher />}
          {modalTarget === 'dashboards' && <RoleDashboards activeRole={activeRole} setActiveRole={setActiveRole} />}
          {modalTarget === 'agents' && <AiAgentsSuite />}
          {modalTarget === 'grid' && <ModuleGrid setActiveTab={() => {}} />}
        </div>

      </div>

    </div>
  );
}
