import React, { useState } from 'react';
import { 
  Code2, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Terminal,
  FileCode,
  RotateCcw,
  Check
} from 'lucide-react';

export default function CodingSandbox() {
  const [language, setLanguage] = useState('python');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const sampleCodes = {
    python: `def two_sum(nums, target):
    lookup = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in lookup:
            return [lookup[diff], i]
        lookup[num] = i
    return []

# Test Invocation
print(two_sum([2, 7, 11, 15], 9))`,
    javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));`,
    java: `import java.util.*;

public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}`,
    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.length(); i++) {
            int diff = target - nums[i];
            if (map.find(diff) != map.end()) {
                return {map[diff], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`
  };

  const [code, setCode] = useState(sampleCodes.python);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(sampleCodes[lang] || '');
    setTestResults(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setTestResults({
        passed: 3,
        total: 3,
        runtime: '14 ms',
        memory: '14.2 MB',
        qualityScore: 94,
        similarity: '0% (Unique Code)',
        output: '[0, 1]\nExecution successful.',
        testCases: [
          { id: 1, name: 'Standard Array Case', input: 'nums = [2,7,11,15], target = 9', expected: '[0, 1]', actual: '[0, 1]', status: 'Passed' },
          { id: 2, name: 'Negative Integers Case', input: 'nums = [-3,4,3,90], target = 0', expected: '[0, 2]', actual: '[0, 2]', status: 'Passed' },
          { id: 3, name: 'Hidden Test Case (Edge Performance)', input: 'nums = 10,000 items, target = 19998', expected: '[9998, 9999]', actual: '[9998, 9999]', status: 'Passed' },
        ]
      });
    }, 1200);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>MODULE 11: IN-BROWSER CODING TEST &amp; PLAGIARISM ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Integrated Multi-Language Coding IDE
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Compile code in Python, Java, C++, JavaScript &amp; SQL with hidden test cases, runtime complexity benchmark, and plagiarism similarity checks.
        </p>
      </div>

      {/* Main IDE Container */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        
        {/* Top IDE Toolbar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-bold text-slate-300 font-mono flex items-center gap-2">
              <FileCode className="w-4 h-4 text-cyan-400" /> Challenge: Two Sum (Optimal Hash Map)
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-mono rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="python">Python 3.11</option>
              <option value="javascript">JavaScript ES6</option>
              <option value="java">Java 17 (OpenJDK)</option>
              <option value="cpp">C++ 20 (GCC)</option>
            </select>

            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-neon-cyan transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Compiling...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" /> Compile &amp; Run Test Cases
                </>
              )}
            </button>
          </div>

        </div>

        {/* IDE Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          
          {/* Code Editor Area */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-4 font-mono text-xs text-slate-200 border-b lg:border-b-0 lg:border-r border-slate-800 relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              className="w-full h-full min-h-[350px] bg-transparent resize-none focus:outline-none leading-relaxed text-cyan-100 selection:bg-indigo-500 selection:text-white"
            />
          </div>

          {/* Execution & Test Cases Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 p-5 flex flex-col justify-between space-y-4">
            
            {testResults ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                
                {/* Summary Metrics */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> All Test Cases Passed ({testResults.passed}/{testResults.total})
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                      Score: 100/100
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px] text-slate-300 font-mono">
                    <div>
                      <span className="text-slate-500 block">Runtime:</span>
                      <strong className="text-cyan-300">{testResults.runtime}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Memory:</span>
                      <strong className="text-cyan-300">{testResults.memory}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Plagiarism:</span>
                      <strong className="text-emerald-400">{testResults.similarity}</strong>
                    </div>
                  </div>
                </div>

                {/* Individual Test Cases List */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Test Case Verification</p>
                  {testResults.testCases.map((tc) => (
                    <div key={tc.id} className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                        <span>{tc.name}</span>
                        <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                          <Check className="w-3 h-3" /> {tc.status}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400">Input: <span className="text-slate-200">{tc.input}</span></p>
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 text-slate-400">
                <Terminal className="w-12 h-12 text-slate-600 mb-3" />
                <p className="text-xs font-bold text-slate-300">IDE Ready for Execution</p>
                <p className="text-[11px] text-slate-500 max-w-xs mt-1">
                  Click "Compile &amp; Run Test Cases" to run correctness analysis, runtime benchmarks, and similarity checks.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
