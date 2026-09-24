import React from 'react';
import { Calendar, CheckCircle2, Sparkles, Milestone, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { journeyMilestones } from '../../data/journeyData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative bg-charcoal-950">
      {/* Background line aura */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Progression & Growth"
          title="My Journey"
          subtitle="A realistic timeline of my academic milestones, hands-on tool adoption, capstone execution, and ongoing skill refinement."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Stem */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -ml-0.5 w-0.5 bg-gradient-to-b from-maroon-800 via-rose-dusty/40 to-maroon-900" />

          <div className="space-y-12">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Center Node / Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-charcoal-900 border-2 border-rose-dusty flex items-center justify-center shadow-maroon-sm z-20 group-hover:scale-110 group-hover:border-rose-soft transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-maroon-600 group-hover:bg-rose-soft transition-colors" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-16 md:ml-0 md:w-1/2 px-0 md:px-8 w-full">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-charcoal-850 border ${
                        item.highlight
                          ? 'border-maroon-600/70 shadow-maroon-sm bg-gradient-to-b from-charcoal-850 to-maroon-950/40'
                          : 'border-maroon-800/50 hover:border-maroon-700'
                      } transition-all duration-300 group-hover:-translate-y-1 shadow-md`}
                    >
                      {/* Year badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-maroon-900/80 text-rose-soft border border-maroon-700/60">
                          <Calendar className="w-3 h-3 text-rose-dusty" />
                          {item.year}
                        </span>
                        {item.period && (
                          <span className="text-[11px] font-mono text-rose-soft/60">
                            {item.period}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-lg sm:text-xl font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-rose-dusty/90 mt-1 mb-3">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-rose-soft/80 font-sans leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-maroon-900/60">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-charcoal-900 text-rose-soft/90 border border-maroon-900"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-maroon-950 via-charcoal-850 to-maroon-950 border border-maroon-700/60 shadow-maroon-sm">
              <Sparkles className="w-5 h-5 text-rose-dusty animate-pulse" />
              <div className="text-xs sm:text-sm font-mono text-warm-100">
                Current Learning Horizon: <span className="text-rose-soft font-bold">QA • Machine Learning • Data Science</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
