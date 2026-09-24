import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  FileCheck, 
  Repeat, 
  Bug, 
  Compass, 
  Sparkles, 
  Terminal, 
  Play, 
  Clock, 
  Check, 
  ShieldCheck,
  AlertCircle,
  Code
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { qaPhilosophy, qaFocusAreas, sampleApiTestCases } from '../../data/qaData';
import type { TestCaseItem } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-rose-soft" />,
  Send: <Send className="w-5 h-5 text-rose-soft" />,
  FileCheck: <FileCheck className="w-5 h-5 text-rose-soft" />,
  Repeat: <Repeat className="w-5 h-5 text-rose-soft" />,
  Bug: <Bug className="w-5 h-5 text-rose-soft" />,
  Compass: <Compass className="w-5 h-5 text-rose-soft" />,
};

export const QAShowcase: React.FC = () => {
  const [selectedTestCase, setSelectedTestCase] = useState<TestCaseItem>(sampleApiTestCases[0]);
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  const runTestSimulation = (tc: TestCaseItem) => {
    setSelectedTestCase(tc);
    setIsRunningSim(true);
    setSimOutput(null);

    setTimeout(() => {
      setIsRunningSim(false);
      setSimOutput(`PASS • [${tc.method}] ${tc.endpoint} (Status: ${tc.expectedStatus} OK, ${tc.responseTiming})`);
    }, 400);
  };

  return (
    <section id="qa" className="py-24 relative bg-charcoal-950 border-t border-maroon-900/40">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-maroon-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Specialized Focus Area"
          title="Quality Assurance"
          subtitle={qaPhilosophy.headline}
        />

        {/* Philosophy & Disclaimer Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-maroon-950/80 via-charcoal-850 to-charcoal-900 border border-maroon-700/60 shadow-maroon-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-rose-dusty font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Verification Mindset & Authenticity</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-warm-50 font-serif">
                {qaPhilosophy.subheading}
              </h3>
              <p className="text-xs sm:text-sm text-rose-soft/80 font-sans max-w-3xl leading-relaxed">
                {qaPhilosophy.note}
              </p>
            </div>
            
            <div className="px-4 py-2 rounded-xl bg-charcoal-950/80 border border-maroon-800 text-xs font-mono text-rose-soft flex-shrink-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Representative Testing Artifacts</span>
            </div>
          </div>
        </div>

        {/* 6 Core QA Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {qaFocusAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-charcoal-850 border border-maroon-800/60 hover:border-rose-dusty/60 shadow-sm hover:shadow-maroon-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-maroon-900/60 border border-maroon-700/60 group-hover:bg-maroon-800 transition-colors">
                    {iconMap[area.iconName] || <CheckCircle2 className="w-5 h-5 text-rose-soft" />}
                  </div>
                  <h4 className="text-base font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                    {area.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-rose-soft/80 font-sans leading-relaxed">
                  {area.description}
                </p>

                <div className="p-2.5 rounded-lg bg-charcoal-900/80 border border-maroon-900 text-[11px] font-mono text-rose-dusty">
                  {area.metricsOrNotes}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-maroon-900/60">
                {area.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-950 text-rose-soft/80 border border-maroon-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive V-Mas API & Test Case Runner Simulation */}
        <div className="rounded-3xl bg-charcoal-900 border border-maroon-700/60 overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-charcoal-850 border-b border-maroon-900/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-maroon-900/70 border border-maroon-700">
                <Terminal className="w-4 h-4 text-rose-soft" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-warm-50 font-serif">
                  V-Mas API Testing Suite • Sample Runner
                </h4>
                <p className="text-[11px] font-mono text-rose-soft/70">
                  Select a test case to inspect Postman assertions, response benchmarks, and execution flow.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-rose-dusty px-3 py-1 rounded-full bg-charcoal-950 border border-maroon-800">
              Postman Collection Mode
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-maroon-900/60">
            
            {/* Left: Test Case Selector list */}
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-2 bg-charcoal-900">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-soft/70 font-semibold block mb-2">
                Available Test Cases
              </span>

              {sampleApiTestCases.map((tc) => {
                const isSelected = selectedTestCase.id === tc.id;
                return (
                  <div
                    key={tc.id}
                    onClick={() => runTestSimulation(tc)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-maroon-900/60 border-rose-dusty/60 shadow-sm'
                        : 'bg-charcoal-850/60 border-maroon-900/60 hover:border-maroon-700 hover:bg-charcoal-850'
                    }`}
                  >
                    <div className="space-y-1 truncate">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          tc.method === 'GET' ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}>
                          {tc.method}
                        </span>
                        <span className="text-xs font-mono font-semibold text-warm-100 truncate">
                          {tc.id}
                        </span>
                      </div>
                      <p className="text-xs text-rose-soft/80 truncate font-sans">
                        {tc.title}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <Check className="w-3 h-3" />
                        {tc.expectedStatus}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Test Execution & Assertion Viewer */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-charcoal-950 space-y-6">
              
              {/* Top Details */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-maroon-900/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold text-warm-50">{selectedTestCase.id}: {selectedTestCase.title}</span>
                  </div>
                  <p className="text-xs text-rose-soft/80 font-sans">{selectedTestCase.description}</p>
                </div>

                <button
                  onClick={() => runTestSimulation(selectedTestCase)}
                  disabled={isRunningSim}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-maroon-800 hover:bg-maroon-700 text-white border border-maroon-600 transition-colors shadow-sm"
                >
                  <Play className={`w-3.5 h-3.5 ${isRunningSim ? 'animate-spin' : ''}`} />
                  <span>{isRunningSim ? 'Testing...' : 'Re-run Assertions'}</span>
                </button>
              </div>

              {/* Endpoint & Benchmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-charcoal-900 border border-maroon-900/80">
                  <span className="text-[10px] font-mono uppercase text-rose-soft/60 block">Endpoint</span>
                  <span className="text-xs font-mono font-semibold text-warm-100 truncate block">{selectedTestCase.endpoint}</span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-900 border border-maroon-900/80">
                  <span className="text-[10px] font-mono uppercase text-rose-soft/60 block">Status Code</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">{selectedTestCase.expectedStatus} OK</span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-900 border border-maroon-900/80">
                  <span className="text-[10px] font-mono uppercase text-rose-soft/60 block">Response Time</span>
                  <span className="text-xs font-mono font-bold text-warm-100 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-rose-dusty" />
                    {selectedTestCase.responseTiming}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-900 border border-maroon-900/80">
                  <span className="text-[10px] font-mono uppercase text-rose-soft/60 block">Assertions</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Passed (100%)
                  </span>
                </div>
              </div>

              {/* Assertion Script Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-rose-soft/70">
                  <span className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-rose-dusty" />
                    <span>Postman Assertion Logic (JavaScript)</span>
                  </span>
                  <span>pm.test() Sandbox</span>
                </div>
                <pre className="p-4 rounded-xl bg-charcoal-900 border border-maroon-900/80 font-mono text-xs text-rose-soft leading-relaxed overflow-x-auto">
                  <code>{selectedTestCase.assertionSnippet}</code>
                </pre>
              </div>

              {/* Simulation Result Output */}
              <div className="p-3.5 rounded-xl bg-charcoal-900/90 border border-maroon-900 flex items-center justify-between text-xs font-mono">
                <span className="text-rose-soft/80">
                  {simOutput || `PASS • Status code ${selectedTestCase.expectedStatus} validated in ${selectedTestCase.responseTiming}`}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                  PASSED
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
