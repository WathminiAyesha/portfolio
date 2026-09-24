import React from 'react';
import { ShieldCheck, Brain, BarChart3, Server, Database, Sparkles, BookOpen, GraduationCap, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-rose-soft" />,
  Brain: <Brain className="w-5 h-5 text-rose-soft" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-rose-soft" />,
  Server: <Server className="w-5 h-5 text-rose-soft" />,
  Database: <Database className="w-5 h-5 text-rose-soft" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-charcoal-900/60 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Background & Direction"
          title="A little about me"
          subtitle="Grounded in computing foundations, driven by rigorous quality verification, and actively exploring the frontier of data and machine learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Authentic Narrative Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-charcoal-850 border border-maroon-800/50 shadow-maroon-sm space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-maroon-900/60">
                <GraduationCap className="w-6 h-6 text-rose-dusty" />
                <div>
                  <h3 className="text-base font-bold text-warm-50 font-serif">
                    Undergraduate Journey at SUSL
                  </h3>
                  <p className="text-xs font-mono text-rose-soft/70">
                    BSc (Hons) in Information Systems
                  </p>
                </div>
              </div>

              {personalInfo.aboutSummary.map((para, idx) => (
                <p key={idx} className="text-sm md:text-base text-rose-soft/90 font-sans leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-3 border-t border-maroon-900/60 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-charcoal-900/80 border border-maroon-900/70">
                  <span className="block text-[11px] font-mono text-rose-soft/60 uppercase">Primary Focus</span>
                  <span className="text-sm font-semibold text-warm-100">Quality & Data Systems</span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-900/80 border border-maroon-900/70">
                  <span className="block text-[11px] font-mono text-rose-soft/60 uppercase">University</span>
                  <span className="text-sm font-semibold text-warm-100">Sabaragamuwa Univ.</span>
                </div>
              </div>
            </div>

            {/* University & Volunteering Footnote */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-maroon-950/70 to-charcoal-850 border border-maroon-800/40 flex items-start gap-3.5">
              <Users className="w-5 h-5 text-rose-dusty flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-rose-soft/80 leading-relaxed font-sans">
                Beyond coursework, I actively engage with <strong className="text-warm-100 font-semibold">IEEE Women in Engineering (WIE)</strong> and <strong className="text-warm-100 font-semibold">Rotaract SUSL</strong>, contributing to event organization, project documentation, and community initiatives.
              </p>
            </div>
          </div>

          {/* Right: Currently Exploring Cards */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-maroon-900/60">
              <h3 className="text-xl font-bold text-warm-50 font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-dusty" />
                <span>Currently Exploring</span>
              </h3>
              <span className="text-xs font-mono text-rose-soft/70">Active Learning Areas</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.currentlyExploring.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl bg-charcoal-850 border border-maroon-800/50 hover:border-rose-dusty/60 shadow-sm hover:shadow-maroon-sm transition-all duration-300 group ${
                    idx === 0 ? 'sm:col-span-2 bg-gradient-to-r from-charcoal-850 via-maroon-950/40 to-charcoal-850 border-maroon-700/60' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-maroon-900/60 border border-maroon-700/60 group-hover:bg-maroon-800 transition-colors">
                      {iconMap[item.icon] || <BookOpen className="w-5 h-5 text-rose-soft" />}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="text-sm font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-rose-soft/80 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Realistic Commitment Callout */}
            <div className="p-4 rounded-xl bg-charcoal-950/80 border border-maroon-900/80 text-xs font-mono text-rose-soft/70 text-center">
              "Honest progress over superficial claims — applying solid testing and data rigor step by step."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
