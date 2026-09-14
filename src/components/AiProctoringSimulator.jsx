import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Volume2, 
  AlertTriangle, 
  Eye, 
  QrCode, 
  Maximize, 
  Copy, 
  Users, 
  Radio, 
  XCircle, 
  Send,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles
} from 'lucide-react';

export default function AiProctoringSimulator() {
  const [examStatus, setExamStatus] = useState('active'); // active, paused, terminated
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [multipleFacesDetected, setMultipleFacesDetected] = useState(false);
  const [audioLevel, setAudioLevel] = useState(14); // 0 - 100
  const [logs, setLogs] = useState([
    { id: 1, time: '10:02:14 AM', type: 'QR Entry Verification', severity: 'Low', detail: 'Student Ananya Sharma identity matched via QR + Face scan.' },
    { id: 2, time: '10:05:30 AM', type: 'Full Screen Enforced', severity: 'Low', detail: 'Exam locked in secure kiosk container mode.' },
  ]);
  const [warningMessage, setWarningMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'AI System', text: 'Exam session initialized securely. Good luck!' }
  ]);

  // Audio level dynamic animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const randomAudio = Math.floor(Math.random() * 25) + 10;
      setAudioLevel(randomAudio);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerTabSwitch = () => {
    const newCount = tabSwitchCount + 1;
    setTabSwitchCount(newCount);
    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      type: 'Tab Switch Violation',
      severity: newCount >= 2 ? 'Critical' : 'Medium',
      detail: `Student switched away from exam browser window! (Attempt #${newCount})`
    };
    setLogs(prev => [newLog, ...prev]);
  };

  const triggerMultipleFaces = () => {
    setMultipleFacesDetected(prev => !prev);
    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      type: 'Multiple Faces Detected',
      severity: 'Critical',
      detail: 'Secondary person detected in webcam perimeter frame.'
    };
    setLogs(prev => [newLog, ...prev]);
  };

  const triggerAudioAnomaly = () => {
    setAudioLevel(88);
    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      type: 'Suspicious Audio Whispering',
      severity: 'Medium',
      detail: 'Background voice frequency matched potential whisper pattern.'
    };
    setLogs(prev => [newLog, ...prev]);
  };

  const sendWarningToStudent = (e) => {
    e.preventDefault();
    if (!warningMessage.trim()) return;
    setChatLog(prev => [...prev, { sender: 'Proctor (Faculty)', text: warningMessage }]);
    setWarningMessage('');
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>MODULES 8, 9 &amp; 10: AI PROCTORING &amp; LIVE STREAMING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Secure AI Exam Proctoring &amp; Live Monitoring
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Real-time face verification, tab-switch monitoring, voice anomaly recognition, and live streaming dashboard for faculty.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Live Exam & Webcam Feed Simulation */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 relative">
            
            {/* Top Bar inside Exam Preview */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">Mid-Semester Test: Database Management Systems</h3>
                  <p className="text-[10px] text-slate-400">Student: Ananya Sharma (UG2401256) • Duration: 60 mins</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" /> 42:18 Left
                </span>
              </div>
            </div>

            {/* Webcam & AI Frame Container */}
            <div className="relative aspect-video rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
              
              {/* Simulated Camera Video Stream Background */}
              <img 
                src={multipleFacesDetected 
                  ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                }
                alt="Proctored Camera Stream" 
                className="w-full h-full object-cover"
              />

              {/* Simulated AI Detection Bounding Boxes Overlay */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-400/40 m-6 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-cyan-500/30">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-cyan-400" /> Face Track: Verified</span>
                  <span>Confidence: 99.8%</span>
                </div>

                {multipleFacesDetected && (
                  <div className="bg-rose-600/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg animate-bounce self-center">
                    <AlertTriangle className="w-4 h-4" /> WARNING: MULTIPLE FACES DETECTED IN FRAME!
                  </div>
                )}

                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-300 bg-slate-900/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  <span>Audio Level: {audioLevel} dB</span>
                  <span>Screen Lock: Enforced</span>
                </div>
              </div>

              {/* Status Tag top right */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-200 text-[10px] font-bold border border-slate-700 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> Live Stream HD
              </div>
            </div>

            {/* Test Trigger Control Simulator Buttons */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <p className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Simulate Proctoring Violations (Test AI Engine Response):
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={triggerTabSwitch}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Copy className="w-3.5 h-3.5" /> Tab Switch ({tabSwitchCount})
                </button>

                <button
                  onClick={triggerMultipleFaces}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    multipleFacesDetected 
                      ? 'bg-rose-600 text-white border-rose-500' 
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300 hover:bg-rose-500/20'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" /> Toggle Multiple Faces
                </button>

                <button
                  onClick={triggerAudioAnomaly}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 text-indigo-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Noise Spike (88dB)
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Right 1 Col: Live Proctor Monitoring Feed & Incident Logs */}
        <div className="space-y-6">
          
          <div className="glass-panel rounded-3xl p-5 border border-slate-800 flex flex-col h-full">
            <h3 className="text-sm font-bold text-white flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Live Incident Audit Log
              </span>
              <span className="text-[10px] font-semibold text-slate-400">{logs.length} Recorded</span>
            </h3>

            {/* Log List */}
            <div className="space-y-2.5 my-4 max-h-[300px] overflow-y-auto pr-1">
              {logs.map((log) => (
                <div 
                  key={log.id} 
                  className={`p-3 rounded-xl border text-xs ${
                    log.severity === 'Critical' 
                      ? 'bg-rose-950/40 border-rose-500/50 text-rose-200' 
                      : log.severity === 'Medium'
                      ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-[10px] uppercase tracking-wider">{log.type}</span>
                    <span className="text-[9px] font-mono opacity-80">{log.time}</span>
                  </div>
                  <p className="text-[11px] mt-1 opacity-90">{log.detail}</p>
                </div>
              ))}
            </div>

            {/* Live Chat / Warning Console to Student */}
            <div className="mt-auto pt-4 border-t border-slate-800">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Faculty Proctor Action Console</p>
              
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 max-h-24 overflow-y-auto mb-2 space-y-1 text-[11px]">
                {chatLog.map((msg, i) => (
                  <div key={i} className="text-slate-300">
                    <strong className="text-indigo-400">{msg.sender}:</strong> {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={sendWarningToStudent} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Send live warning to student..."
                  value={warningMessage}
                  onChange={(e) => setWarningMessage(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
