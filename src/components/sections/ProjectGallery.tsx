import React, { useState } from 'react';
import { Eye, Image as ImageIcon, Sparkles, ZoomIn, Info, Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Lightbox } from '../ui/Lightbox';
import { vmasProject } from '../../data/vmasData';
import type { ProjectScreenshot } from '../../types';

export const ProjectGallery: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(vmasProject.screenshots.map(s => s.category)))];

  const filteredScreenshots = activeFilter === 'All'
    ? vmasProject.screenshots
    : vmasProject.screenshots.filter(s => s.category === activeFilter);

  return (
    <section className="py-20 relative bg-charcoal-900/50 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Interactive UI Gallery"
          title="V-Mas Application Views"
          subtitle="A comprehensive visual tour of the V-Mas system. Click on any module to open full-screen view and read functional notes."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-maroon-800 text-white border border-maroon-600 shadow-maroon-sm'
                  : 'bg-charcoal-850 text-rose-soft/70 hover:text-white hover:bg-maroon-950 border border-maroon-900/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedScreenshot(item)}
              className="group relative rounded-2xl bg-charcoal-850 border border-maroon-800/60 overflow-hidden shadow-lg hover:border-rose-dusty/60 hover:shadow-maroon-sm transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] bg-charcoal-950 overflow-hidden">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-maroon-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-800 text-white text-xs font-semibold shadow-lg border border-maroon-600">
                    <ZoomIn className="w-4 h-4" />
                    <span>Enlarge View</span>
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-charcoal-900/90 text-rose-soft border border-maroon-700/60 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2 bg-charcoal-850">
                <div>
                  <h4 className="text-base font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-rose-soft/80 font-sans leading-relaxed line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-maroon-900/60 flex items-center justify-between text-[11px] font-mono text-rose-soft/60">
                  <span className="flex items-center gap-1 text-rose-dusty">
                    <Info className="w-3.5 h-3.5" />
                    <span>View details</span>
                  </span>
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Replacement Hint */}
        <div className="mt-12 p-4 rounded-2xl bg-charcoal-850/80 border border-maroon-900/70 text-center max-w-xl mx-auto">
          <p className="text-xs font-mono text-rose-soft/70">
            Screenshots are loaded from <code className="text-rose-dusty bg-charcoal-900 px-2 py-0.5 rounded border border-maroon-900">public/images/projects/vmas/</code>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedScreenshot && (
        <Lightbox
          isOpen={!!selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
          imageSrc={selectedScreenshot.imagePath}
          title={selectedScreenshot.title}
          caption={selectedScreenshot.caption}
          category={selectedScreenshot.category}
        />
      )}
    </section>
  );
};
