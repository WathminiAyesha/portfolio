import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { certificationsList } from '../../data/certificationsData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-charcoal-950 border-t border-maroon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Verified Continuous Learning"
          title="Certifications & Specializations"
          subtitle="Formal coursework, academic specializations, and foundational credentials completed through Stanford, DeepLearning.AI, IBM, and University programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-charcoal-850 border border-maroon-800/60 hover:border-rose-dusty/60 shadow-sm hover:shadow-maroon-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Issuer & Platform Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-maroon-900/60 border border-maroon-700/60 group-hover:bg-maroon-800 transition-colors">
                      <Award className="w-5 h-5 text-rose-dusty" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-rose-soft/80 block">
                        {cert.issuer}
                      </span>
                      {cert.platform && (
                        <span className="text-[10px] font-mono text-rose-soft/60">
                          via {cert.platform}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-soft/70">
                    <Calendar className="w-3 h-3 text-rose-dusty" />
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Title */}
                <h4 className="text-base font-bold text-warm-50 font-serif leading-snug group-hover:text-rose-soft transition-colors">
                  {cert.title}
                </h4>

                {/* Acquired Skills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-900 text-rose-soft/80 border border-maroon-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Credential Placeholder Link */}
              <div className="mt-6 pt-4 border-t border-maroon-900/60 flex items-center justify-between text-xs font-mono">
                <span className="text-rose-soft/60 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Curriculum Verified</span>
                </span>

                <a
                  href={cert.credentialUrl}
                  onClick={(e) => {
                    if (cert.credentialUrl === '#') {
                      e.preventDefault();
                      alert('Certificate verification link placeholder — ready for your direct Coursera/Institute URL!');
                    }
                  }}
                  className="inline-flex items-center gap-1 text-rose-dusty hover:text-white transition-colors"
                >
                  <span>Verification</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center text-xs font-mono text-rose-soft/60">
          * Direct credential verification URLs can be linked in <code className="text-rose-dusty bg-charcoal-850 px-2 py-0.5 rounded border border-maroon-900">src/data/certificationsData.ts</code>
        </div>

      </div>
    </section>
  );
};
