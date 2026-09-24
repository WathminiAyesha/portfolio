import React, { useState } from 'react';
import { Users, Heart, Sparkles, Calendar, Award, CheckCircle2, ChevronRight, Image as ImageIcon, Camera } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { volunteeringExperiences } from '../../data/experienceData';
import type { ExperienceItem } from '../../types';

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'IEEE', 'Rotaract', 'Event / Hackathon', 'Volunteering'];

  const filteredExperiences = selectedCategory === 'All'
    ? volunteeringExperiences
    : volunteeringExperiences.filter(e => e.category === selectedCategory);

  return (
    <section id="experience" className="py-24 relative bg-charcoal-900/50 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Community & Leadership"
          title="Beyond the Classroom"
          subtitle="Active involvement in IEEE Women in Engineering, Rotaract initiatives, hackathons, and STEM educational outreach."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-maroon-900 to-maroon-800 text-white border border-maroon-600 shadow-maroon-sm'
                  : 'bg-charcoal-850 text-rose-soft/70 hover:text-white hover:bg-maroon-950 border border-maroon-900/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-charcoal-850 border border-maroon-800/60 hover:border-rose-dusty/60 shadow-sm hover:shadow-maroon-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category tag & Period */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-maroon-950 text-rose-soft border border-maroon-800">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-rose-soft/70 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-rose-dusty" />
                    {item.period}
                  </span>
                </div>

                {/* Role & Title */}
                <div>
                  <h4 className="text-lg font-bold text-warm-50 font-serif leading-snug group-hover:text-rose-soft transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-rose-dusty font-semibold mt-1">
                    {item.role} • <span className="text-rose-soft/80 font-normal">{item.organization}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-rose-soft/80 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Key Contributions */}
                <div className="pt-2 border-t border-maroon-900/60 space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-rose-soft/70 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-dusty flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Photo Folder Indicator */}
              <div className="mt-6 pt-4 border-t border-maroon-900/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-900 text-rose-soft/70 border border-maroon-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.imageFolder && (
                  <span className="text-[10px] font-mono text-rose-soft/50 flex items-center gap-1" title={`Photo folder: ${item.imageFolder}`}>
                    <Camera className="w-3 h-3 text-rose-dusty" />
                    <span>Photos</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Real Photo Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-charcoal-850/80 border border-maroon-900/70 text-center max-w-xl mx-auto">
          <p className="text-xs font-mono text-rose-soft/70">
            Real event photographs can be added into <code className="text-rose-dusty bg-charcoal-900 px-2 py-0.5 rounded border border-maroon-900">public/images/experiences/</code>
          </p>
        </div>

      </div>
    </section>
  );
};
