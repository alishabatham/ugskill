import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  FileText, 
  Upload, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Calendar, 
  Download, 
  Clock,
  Eye,
  FileCheck
} from 'lucide-react';

export default function LmsAndMstGenerator() {
  const [generationMode, setGenerationMode] = useState('ai'); // manual vs ai
  const [syllabusInput, setSyllabusInput] = useState('DBMS Unit 1-5: Relational Algebra, SQL Joins, B-Tree Indexing, ACID Transactions & Normalization (1NF to BCNF).');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCourse, setGeneratedCourse] = useState(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedCourse({
        title: "Database Management Systems (MST Complete Master Course)",
        modulesCount: 5,
        lessonsCount: 22,
        quizzesCount: 10,
        mstPaper: {
          code: "CS302-MST",
          duration: "60 Minutes",
          totalMarks: 50,
          setsGenerated: ["Set A (Randomized)", "Set B (Randomized)"],
          sections: [
            { name: "Section A: Conceptual MCQs", count: "10 Questions", marks: 10 },
            { name: "Section B: SQL Query & Relational Algebra", count: "4 Questions", marks: 20 },
            { name: "Section C: B-Tree Indexing & Normalization Proofs", count: "2 Questions", marks: 20 },
          ],
          proctoringRules: "AI Face Tracking Enforced • Screen Lock Active • Noise Meter Active"
        }
      });
    }, 1500);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>MODULES 3, 4, 7 &amp; 22: AI LMS &amp; MST EXAM GENERATOR</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Syllabus-to-Course &amp; Proctored MST Generator
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Faculty uploads PDF/PPT notes or types syllabus guidelines — AI automatically creates modules, summary notes, randomized MST paper sets, and proctoring schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 5 Cols: Input & Mode Controls */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 space-y-5">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" /> Mode Selector
            </h3>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setGenerationMode('ai')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  generationMode === 'ai' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Mode
              </button>
              <button
                onClick={() => setGenerationMode('manual')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  generationMode === 'manual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Manual Mode
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Syllabus Outline or Upload PDF/PPT Notes:
            </label>
            <textarea
              value={syllabusInput}
              onChange={(e) => setSyllabusInput(e.target.value)}
              className="w-full h-32 bg-slate-950 border border-slate-800 rounded-2xl p-3.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 leading-relaxed"
            />
          </div>

          <div className="p-4 rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 text-center hover:border-indigo-500/50 transition-all cursor-pointer">
            <Upload className="w-6 h-6 text-indigo-400 mx-auto mb-1.5" />
            <p className="text-xs font-bold text-slate-200">Drag &amp; Drop Syllabus PDF / PPT / Notes</p>
            <p className="text-[10px] text-slate-400">Supports PDF, PPTX, MP4 Video, TXT up to 100MB</p>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-neon-indigo hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                AI Building Course &amp; MST Paper...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Generate Course &amp; MST Paper with AI
              </>
            )}
          </button>

        </div>

        {/* Right 7 Cols: Output Generated Course & MST Preview */}
        <div className="lg:col-span-7">
          {generatedCourse ? (
            <div className="glass-panel-glow rounded-3xl p-6 border border-indigo-500/30 space-y-5 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    GENERATED &amp; APPROVED BY AI
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{generatedCourse.title}</h3>
                </div>
                <button className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" /> Approve &amp; Publish
                </button>
              </div>

              {/* Course Overview Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <p className="text-[10px] text-slate-400">Chapters</p>
                  <p className="text-lg font-extrabold text-indigo-300">{generatedCourse.modulesCount} Modules</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <p className="text-[10px] text-slate-400">Lessons &amp; Notes</p>
                  <p className="text-lg font-extrabold text-cyan-300">{generatedCourse.lessonsCount} Lessons</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <p className="text-[10px] text-slate-400">Auto Quizzes</p>
                  <p className="text-lg font-extrabold text-emerald-300">{generatedCourse.quizzesCount} Quizzes</p>
                </div>
              </div>

              {/* Generated MST Paper Specification Box */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" /> Mid-Semester Test Paper Blueprint ({generatedCourse.mstPaper.code})
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {generatedCourse.mstPaper.duration} • {generatedCourse.mstPaper.totalMarks} Marks
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {generatedCourse.mstPaper.sections.map((sec, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-900 p-2.5 rounded-lg text-slate-300">
                      <span>{sec.name} ({sec.count})</span>
                      <span className="font-bold text-white">{sec.marks} Marks</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-400 border-t border-slate-800">
                  <span>Randomized Sets: <strong className="text-slate-200">Set A, Set B</strong></span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> AI Proctoring Auto-Configured
                  </span>
                </div>
              </div>

            </div>
          ) : (
            <div className="glass-panel rounded-3xl p-12 border border-slate-800 flex flex-col items-center justify-center text-center h-full text-slate-400">
              <Cpu className="w-14 h-14 text-indigo-500/40 mb-3" />
              <h4 className="text-sm font-bold text-white">AI Content Engine Ready</h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                Enter your syllabus notes on the left or upload documents to generate structured learning modules and proctored MST papers instantly.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
