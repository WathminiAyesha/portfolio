import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal-950 border-t border-maroon-900/60 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-maroon-800/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-maroon-900/50">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-maroon-800 to-plum-dark flex items-center justify-center border border-maroon-600/50 shadow-maroon-sm">
                <span className="font-serif font-bold text-base text-warm-50">W</span>
              </div>
              <span className="font-serif font-bold text-xl text-warm-50">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-rose-soft/80 max-w-md font-sans leading-relaxed">
              Information Systems undergraduate at Sabaragamuwa University of Sri Lanka.
              Dedicated to learning, building, and verifying robust software through Quality Assurance,
              Machine Learning, Data Science, and modern development practices.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-charcoal-900 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-charcoal-900 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-2.5 rounded-xl bg-charcoal-900 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-soft font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-300/80 font-sans">
              <li><a href="#about" className="hover:text-rose-soft transition-colors">About Me</a></li>
              <li><a href="#journey" className="hover:text-rose-soft transition-colors">Learning Journey</a></li>
              <li><a href="#vmas" className="hover:text-rose-soft transition-colors">V-Mas Capstone</a></li>
              <li><a href="#qa" className="hover:text-rose-soft transition-colors">Quality Assurance</a></li>
              <li><a href="#skills" className="hover:text-rose-soft transition-colors">Technical Skills</a></li>
            </ul>
          </div>

          {/* Col 3: Academic & Community */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-soft font-semibold mb-4">
              Credentials & Affiliations
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-300/80 font-sans">
              <li><a href="#certifications" className="hover:text-rose-soft transition-colors">Certifications</a></li>
              <li><a href="#experience" className="hover:text-rose-soft transition-colors">IEEE & Volunteering</a></li>
              <li><a href="#education" className="hover:text-rose-soft transition-colors">Education (SUSL)</a></li>
              <li><a href="#contact" className="hover:text-rose-soft transition-colors">Get In Touch</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-400/70 font-sans">
          <p className="flex items-center gap-1.5">
            Designed for <span className="text-rose-soft font-medium">{personalInfo.name}</span> • Learn → Build → Test → Contribute → Grow
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-maroon-400">Authentic Undergraduate Portfolio</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-900 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
