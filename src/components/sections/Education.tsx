import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { educationDetails } from '../../data/experienceData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-charcoal-950 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Undergraduate studies in Information Systems at Sabaragamuwa University of Sri Lanka."
        />

        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-charcoal-850 to-charcoal-900 border border-maroon-700/60 shadow-2xl relative overflow-hidden">
            
            {/* Ambient corner light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-maroon-900/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-8 border-b border-maroon-900/60">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-maroon-950 text-rose-soft border border-maroon-800">
                  <GraduationCap className="w-4 h-4 text-rose-dusty" />
                  <span>{educationDetails.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-warm-50 font-serif">
                  {educationDetails.degree}
                </h3>

                <div className="space-y-1 text-sm font-sans text-rose-soft/90">
                  <div className="font-semibold text-warm-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-rose-dusty" />
                    <span>{educationDetails.institution}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-soft/80 pl-6">
                    {educationDetails.faculty} • {educationDetails.department}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="px-3.5 py-1 rounded-xl text-xs font-mono font-bold bg-maroon-900/70 text-rose-soft border border-maroon-700/60">
                  {educationDetails.batch}
                </span>
                <span className="text-xs font-mono text-rose-soft/70 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-dusty" />
                  {educationDetails.location}
                </span>
              </div>
            </div>

            {/* Coursework & Modules */}
            <div className="pt-8 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-soft font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rose-dusty" />
                <span>Relevant Key Coursework & Modules</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationDetails.courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-charcoal-950/70 border border-maroon-900/70 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-dusty flex-shrink-0" />
                    <span className="text-xs font-sans text-warm-100 font-medium">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
