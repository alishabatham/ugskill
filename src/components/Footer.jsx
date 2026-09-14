import React from 'react';
import { GraduationCap, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenInteractiveModal }) {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pb-12 border-b border-slate-100">
          
          {/* Logo & Tagline (2 cols) */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                UG<span className="text-indigo-600">Skill</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              AI-Powered Academic Ecosystem
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-3">Product</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><button onClick={() => setActiveTab('features')} className="hover:text-indigo-600">Features</button></li>
              <li><button onClick={() => setActiveTab('pricing')} className="hover:text-indigo-600">Pricing</button></li>
              <li><button onClick={() => onOpenInteractiveModal('workflow')} className="hover:text-indigo-600">Integrations</button></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-3">Company</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-600">About Us</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-600">Careers</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-600">Contact</button></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-3">Resources</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><button onClick={() => setActiveTab('features')} className="hover:text-indigo-600">Blogs</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-600">Help Center</button></li>
              <li><button onClick={() => setActiveTab('features')} className="hover:text-indigo-600">Documentation</button></li>
            </ul>
          </div>

          {/* Follow Us & Empowering Tagline */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-3">Follow Us</h4>
            <div className="flex items-center gap-3 text-slate-400 mb-4">
              <a href="#linkedin" className="hover:text-indigo-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#twitter" className="hover:text-indigo-600 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#youtube" className="hover:text-indigo-600 transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#instagram" className="hover:text-indigo-600 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-slate-500 text-[11px] font-medium">
              <span>Empowering Students <br />Building Better Futures</span>
              <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0" />
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-medium gap-4">
          <p>© 2025 UGSkill. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600">Terms of Service</a>
            <a href="#support" className="hover:text-slate-600">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
