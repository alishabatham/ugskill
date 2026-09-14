import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenInteractiveModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    if (id === 'hero') {
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'platform') {
      const el = document.getElementById('platform');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'features') {
      const el = document.getElementById('workflow');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'for-colleges') {
      const el = document.getElementById('stakeholders');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'for-students') {
      const el = document.getElementById('passport');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'pricing') {
      onOpenInteractiveModal('pricing');
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'platform', label: 'Platform' },
    { id: 'features', label: 'Features' },
    { id: 'for-colleges', label: 'For Colleges' },
    { id: 'for-students', label: 'For Students' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-sans block leading-none">
                UG<span className="text-indigo-600">Skill</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-tight block mt-0.5">
                Learn. Assess. Code. Get Placed
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive 
                      ? 'text-indigo-600 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInteractiveModal('login')}
              className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold transition-all hover:bg-slate-50 cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={() => onOpenInteractiveModal('get-started')}
              className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-2.5 text-left text-sm font-medium rounded-lg ${
                  activeTab === link.id ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenInteractiveModal('login');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold text-center"
            >
              Login
            </button>
            <button
              onClick={() => {
                onOpenInteractiveModal('get-started');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
