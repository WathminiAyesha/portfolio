import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  FileText, 
  Fuel, 
  Bell, 
  Layers, 
  CheckCircle2, 
  UserCheck, 
  GitBranch, 
  Sparkles,
  ChevronRight,
  Database,
  Lock,
  Workflow,
  AlertTriangle,
  Flame,
  FileSpreadsheet
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { vmasProject } from '../../data/vmasData';

export const ProjectVMas: React.FC = () => {
  const [activeStoryTab, setActiveStoryTab] = useState<'problem' | 'solution' | 'contributions'>('contributions');

  return (
    <section id="vmas" className="py-24 relative bg-charcoal-900/40 border-t border-maroon-900/40">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-maroon-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Featured Capstone Project"
          title="V-Mas"
          subtitle="Smart Vehicle Service Management System — an end-to-end full-stack platform simplifying fleet maintenance, compliance documents, fuel tracking, and automated service alerts."
        />

        {/* Hero Card for V-Mas */}
        <div className="rounded-3xl bg-gradient-to-b from-charcoal-850 via-charcoal-900 to-plum-dark border border-maroon-700/60 p-6 sm:p-10 shadow-2xl space-y-10">
          
          {/* Top Banner: Title, Category, Roles */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-maroon-900/70">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-maroon-950 text-rose-soft border border-maroon-800">
                <Car className="w-3.5 h-3.5 text-rose-dusty" />
                <span>University Capstone Project</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-warm-50 font-serif">
                {vmasProject.title}
                <span className="block sm:inline text-xl sm:text-2xl font-normal text-rose-soft/80 sm:ml-3 font-sans">
                  • {vmasProject.tagline}
                </span>
              </h3>
              <p className="text-sm sm:text-base text-rose-soft/90 max-w-3xl leading-relaxed font-sans">
                {vmasProject.description}
              </p>
            </div>

            {/* Status & Tech Highlights */}
            <div className="flex flex-wrap lg:flex-col gap-3 lg:items-end">
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-maroon-900/70 text-rose-soft border border-maroon-600/70">
                {vmasProject.status}
              </span>
              <div className="text-xs font-mono text-rose-soft/70">
                React • Spring Boot • MySQL • JWT
              </div>
            </div>
          </div>

          {/* System Roles Breakdown */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-soft font-semibold flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-rose-dusty" />
              <span>Multi-Role Access Governance</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vmasProject.roles.map((roleStr, rIdx) => {
                const [roleName, roleDesc] = roleStr.split('(');
                return (
                  <div
                    key={rIdx}
                    className="p-4 rounded-xl bg-charcoal-950/70 border border-maroon-900/70 hover:border-maroon-700/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-warm-100 mb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-dusty" />
                      {roleName.trim()}
                    </div>
                    {roleDesc && (
                      <p className="text-xs text-rose-soft/80 font-sans leading-relaxed">
                        {roleDesc.replace(')', '')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Project Story Tabs */}
          <div className="space-y-6 pt-4 border-t border-maroon-900/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 bg-charcoal-950 p-1.5 rounded-2xl border border-maroon-900/80">
                <button
                  onClick={() => setActiveStoryTab('contributions')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === 'contributions'
                      ? 'bg-maroon-800 text-white shadow-maroon-sm border border-maroon-600'
                      : 'text-rose-soft/70 hover:text-white hover:bg-maroon-950'
                  }`}
                >
                  My Contribution (Authentic)
                </button>
                <button
                  onClick={() => setActiveStoryTab('problem')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === 'problem'
                      ? 'bg-maroon-800 text-white shadow-maroon-sm border border-maroon-600'
                      : 'text-rose-soft/70 hover:text-white hover:bg-maroon-950'
                  }`}
                >
                  The Problem
                </button>
                <button
                  onClick={() => setActiveStoryTab('solution')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === 'solution'
                      ? 'bg-maroon-800 text-white shadow-maroon-sm border border-maroon-600'
                      : 'text-rose-soft/70 hover:text-white hover:bg-maroon-950'
                  }`}
                >
                  The Solution & Impact
                </button>
              </div>

              <span className="text-xs font-mono text-rose-soft/60 hidden sm:inline-block">
                * Authentic Capstone Collaboration
              </span>
            </div>

            {/* Tab 1: Authentic Contribution */}
            {activeStoryTab === 'contributions' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-xl bg-maroon-950/60 border border-maroon-800/60 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-rose-dusty flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-rose-soft/90 font-sans leading-relaxed">
                    <strong className="text-warm-100 font-semibold">Authenticity Note:</strong> As a university team capstone project, I contributed to key frontend components, document upload subsystems, profile management, notification workflows, and conducted API verification using Postman.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vmasProject.myContributions.map((contrib, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-5 rounded-2xl bg-charcoal-850 border border-maroon-800/60 hover:border-rose-dusty/50 transition-all duration-300 shadow-sm flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-dusty flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <h5 className="text-sm font-bold text-warm-50 font-serif">
                            {contrib.area}
                          </h5>
                        </div>
                        <p className="text-xs text-rose-soft/80 font-sans leading-relaxed">
                          {contrib.description}
                        </p>
                      </div>

                      <ul className="mt-4 pt-3 border-t border-maroon-900/60 space-y-1.5">
                        {contrib.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-[11px] text-rose-soft/70 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-maroon-500 mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: The Problem */}
            {activeStoryTab === 'problem' && (
              <div className="p-8 rounded-2xl bg-charcoal-850 border border-maroon-800/60 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-rose-dusty">
                  <AlertTriangle className="w-6 h-6" />
                  <h4 className="text-xl font-bold font-serif text-warm-50">
                    The Challenge of Disconnected Vehicle Management
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-rose-soft/90 leading-relaxed font-sans">
                  {vmasProject.problemStory.problem}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  <div className="p-3.5 rounded-xl bg-charcoal-950/70 border border-maroon-900">
                    <span className="block text-xs font-mono text-rose-soft/60 uppercase">Issue 1</span>
                    <span className="text-xs font-semibold text-warm-200">Missed Service Deadlines & Over-mileage</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-950/70 border border-maroon-900">
                    <span className="block text-xs font-mono text-rose-soft/60 uppercase">Issue 2</span>
                    <span className="text-xs font-semibold text-warm-200">Expired Revenue & Insurance Policies</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-950/70 border border-maroon-900">
                    <span className="block text-xs font-mono text-rose-soft/60 uppercase">Issue 3</span>
                    <span className="text-xs font-semibold text-warm-200">Opaque Fuel Costs & Mileage Inaccuracies</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: The Solution */}
            {activeStoryTab === 'solution' && (
              <div className="p-8 rounded-2xl bg-charcoal-850 border border-maroon-800/60 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 text-rose-dusty" />
                  <h4 className="text-xl font-bold font-serif text-warm-50">
                    Centralized, Automated & Proactive Web Platform
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-rose-soft/90 leading-relaxed font-sans">
                  {vmasProject.problemStory.solution}
                </p>
                <div className="p-4 rounded-xl bg-maroon-950/50 border border-maroon-800/60 mt-4">
                  <h5 className="text-xs font-mono uppercase text-rose-dusty font-bold mb-1">
                    Direct Impact & Operational Benefits
                  </h5>
                  <p className="text-xs sm:text-sm text-rose-soft/80 leading-relaxed">
                    {vmasProject.problemStory.impact}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Key System Features Grid */}
          <div className="space-y-6 pt-6 border-t border-maroon-900/60">
            <h4 className="text-xl font-bold text-warm-50 font-serif flex items-center gap-2">
              <Layers className="w-5 h-5 text-rose-dusty" />
              <span>Key System Features</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {vmasProject.keyFeatures.map((categoryGroup, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-charcoal-850 border border-maroon-900/70 hover:border-maroon-700 transition-colors space-y-3"
                >
                  <h5 className="text-xs font-mono uppercase tracking-wider text-rose-soft font-bold border-b border-maroon-900/80 pb-2">
                    {categoryGroup.category}
                  </h5>
                  <ul className="space-y-2">
                    {categoryGroup.items.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-rose-soft/80 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-rose-dusty flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
