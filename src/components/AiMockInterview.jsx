import React, { useState } from 'react';
import { 
  Sparkles, 
  Mic, 
  MicOff, 
  BrainCircuit, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  ArrowRight,
  MessageSquare,
  Volume2,
  TrendingUp,
  Award
} from 'lucide-react';

export default function AiMockInterview() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [evaluation, setEvaluation] = useState(null);

  const questions = [
    {
      id: 1,
      category: "Technical Core (DBMS & Indexing)",
      question: "Can you explain how B-Tree indexing improves SQL query performance, and when would indexing actually slow down database operations?",
      sampleAnswer: "B-Tree indexing creates a balanced tree data structure that reduces search time complexity from O(N) full table scans to O(log N). However, excessive indexing slows down write operations like INSERT, UPDATE, and DELETE because the database engine must rebuild index trees upon every modification."
    },
    {
      id: 2,
      category: "HR & Behavioral (Problem Solving)",
      question: "Describe a situation where a technical project deadline was threatened due to a bug. How did you prioritize tasks and communicate with stakeholders?",
      sampleAnswer: "I identified the root bottleneck early, implemented an isolated temporary patch to keep core services live, and immediately communicated realistic delivery timelines to team leads without overpromising."
    }
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    setStudentAnswer('');
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setStudentAnswer(questions[currentStep].sampleAnswer);
  };

  const handleEvaluateAnswer = () => {
    setEvaluation({
      overallScore: 88,
      technicalDepth: 90,
      communicationClarity: 85,
      confidenceScore: 89,
      feedback: "Excellent explanation of B-Tree O(log N) lookup mechanics. Great mention of write-overhead trade-offs during INSERT/UPDATE operations.",
      skillGapIdentified: "Consider adding explicit mention of Composite Multi-Column Indexes for complex JOIN queries."
    });
  };

  const handleNextQuestion = () => {
    setCurrentStep((prev) => (prev + 1) % questions.length);
    setStudentAnswer('');
    setEvaluation(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>MODULE 12: ADAPTIVE AI MOCK INTERVIEWER &amp; VIVA ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Real-Time AI Technical &amp; HR Interviewer
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Adaptive questions, voice response scoring, speech clarity evaluation, confidence metrics, and instant skill gap report.
        </p>
      </div>

      {/* Main AI Interview Shell */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 5 Cols: AI Avatar & Question */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
          
          <div>
            {/* AI Avatar Top Header */}
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-0.5 shadow-neon-emerald">
                  <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#090d16] animate-ping" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">UGSkill AI Interviewer</h3>
                <p className="text-[10px] text-slate-400">Adaptive Evaluation • Question {currentStep + 1} of {questions.length}</p>
              </div>
            </div>

            {/* Question Card */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {questions[currentStep].category}
              </span>
              <p className="text-sm font-semibold text-white leading-relaxed pt-1">
                "{questions[currentStep].question}"
              </p>
            </div>
          </div>

          {/* AI Voice Prompt Indicator */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-emerald-400 shrink-0 animate-pulse" />
            <p className="text-xs text-emerald-200">
              AI Voice output synthesized. Speak your response into microphone or type below.
            </p>
          </div>

        </div>

        {/* Right 7 Cols: Student Answer & AI Feedback Output */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Speech &amp; Text Response</h4>
              <div className="flex items-center gap-2">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <Mic className="w-3.5 h-3.5" /> Start Speech Mic
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all animate-pulse"
                  >
                    <MicOff className="w-3.5 h-3.5" /> Stop &amp; Transcribe Speech
                  </button>
                )}
              </div>
            </div>

            <textarea
              value={studentAnswer}
              onChange={(e) => setStudentAnswer(e.target.value)}
              placeholder="Speak using microphone or type your response here..."
              className="w-full h-36 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 leading-relaxed"
            />

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setStudentAnswer(questions[currentStep].sampleAnswer)}
                className="text-xs text-indigo-400 hover:underline font-medium"
              >
                Auto-fill Exemplary Answer
              </button>

              <button
                onClick={handleEvaluateAnswer}
                disabled={!studentAnswer.trim()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-neon-emerald hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-40"
              >
                <Sparkles className="w-4 h-4" /> Evaluate with AI
              </button>
            </div>

            {/* AI Evaluation Result Card */}
            {evaluation && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-4 animate-in fade-in duration-200">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-white">AI Evaluation Score</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-400">{evaluation.overallScore}/100</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Technical Depth</p>
                    <p className="text-sm font-bold text-indigo-300">{evaluation.technicalDepth}%</p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Communication</p>
                    <p className="text-sm font-bold text-cyan-300">{evaluation.communicationClarity}%</p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Confidence</p>
                    <p className="text-sm font-bold text-emerald-300">{evaluation.confidenceScore}%</p>
                  </div>
                </div>

                <div className="text-xs space-y-2">
                  <p className="text-slate-200"><strong>Detailed Feedback:</strong> {evaluation.feedback}</p>
                  <p className="text-amber-300 bg-amber-950/40 p-2.5 rounded-xl border border-amber-500/30">
                    <strong>Identified Skill Gap:</strong> {evaluation.skillGapIdentified}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    Next Question <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
