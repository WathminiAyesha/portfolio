import React, { useState } from 'react';
import { Sparkles, Code2, ShieldCheck, Brain, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { skillsList, skillCategories, levelColors } from '../../data/skillsData';

const categoryIcons: Record<string, React.ReactNode> = {
  "QA": <ShieldCheck className="w-4 h-4 text-rose-soft" />,
  "Machine Learning & Data": <Brain className="w-4 h-4 text-rose-soft" />,
  "Programming": <Code2 className="w-4 h-4 text-rose-soft" />,
  "Development": <Server className="w-4 h-4 text-rose-soft" />,
  "Database": <Database className="w-4 h-4 text-rose-soft" />,
  "Tools": <Wrench className="w-4 h-4 text-rose-soft" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-charcoal-900/50 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Authentic Technical Capabilities"
          title="Skills & Technologies"
          subtitle="A transparent representation of my working capabilities, categorized by practical application, active learning, and tools adopted."
        />

        {/* Legend for Realistic Labels */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 p-4 rounded-2xl bg-charcoal-850 border border-maroon-900/70 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-soft/70 font-semibold mr-1">
            Proficiency Levels:
          </span>
          {Object.entries(levelColors).map(([level, style]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
              <span className="text-xs font-sans font-medium text-warm-200">{level}</span>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-maroon-900 to-maroon-800 text-white border border-maroon-600 shadow-maroon-sm'
                  : 'bg-charcoal-850 text-rose-soft/70 hover:text-white hover:bg-maroon-950 border border-maroon-900/70'
              }`}
            >
              {categoryIcons[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredSkills.map((skill, idx) => {
            const levelStyle = levelColors[skill.level] || levelColors["Familiar"];
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-charcoal-850 border border-maroon-900/70 hover:border-rose-dusty/60 hover:bg-charcoal-800 transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-rose-soft/60 uppercase block">
                    {skill.category}
                  </span>
                  <h4 className="text-sm font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                    {skill.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-maroon-900/50 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono border ${levelStyle.bg} ${levelStyle.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${levelStyle.dot}`} />
                    <span>{skill.level}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Assurance Notice */}
        <div className="mt-12 text-center text-xs font-mono text-rose-soft/60">
          * Clear authentic ratings representing undergraduate coursework, practical projects, and continuous study.
        </div>

      </div>
    </section>
  );
};
