import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, Sparkles, Shield, Cpu, Database, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial-maroon bg-subtle-mesh"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon-800/15 rounded-full blur-[100px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-plum/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-900/60 border border-maroon-700/60 shadow-maroon-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-rose-soft" />
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-rose-soft">
                QA • ML • DATA • SOFTWARE
              </span>
            </div>

            {/* Name & Academic Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-warm-50 font-serif">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-rose-dusty font-medium tracking-wide">
                {personalInfo.role} • {personalInfo.university}
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight text-gradient-maroon font-serif">
              {personalInfo.tagline}
            </h2>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-rose-soft/90 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base tracking-wide bg-gradient-to-r from-maroon-900 via-maroon-800 to-wine text-white border border-maroon-600/70 shadow-maroon hover:shadow-maroon-lg hover:border-rose-dusty transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-rose-soft animate-bounce" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Wathmini-Ayesha-CV.pdf"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base tracking-wide bg-charcoal-900/80 hover:bg-maroon-950 text-rose-soft hover:text-white border border-maroon-800/80 hover:border-maroon-600 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-rose-dusty" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links & Authentic Note */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-maroon-900/50">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900/80 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900/80 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-3 rounded-xl bg-charcoal-900/80 border border-maroon-800/60 text-rose-soft hover:text-white hover:bg-maroon-900/60 hover:border-maroon-600 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="text-sm text-rose-soft/80 font-mono flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for QA & Software Internships</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer decorative ambient blur ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-maroon-900 via-rose-dusty/40 to-wine rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />
              
              {/* Geometric floating accent rings */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-maroon-600/40 rounded-full animate-float pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 border border-rose-dusty/30 rounded-full animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

              {/* Main Card Frame */}
              <div className="relative rounded-[2rem] p-3 sm:p-4 bg-gradient-to-b from-charcoal-850 via-charcoal-900 to-plum-dark border border-maroon-700/60 shadow-2xl transition-all duration-500 group-hover:border-rose-dusty/70">
                
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-charcoal-950 border border-maroon-900/80 shadow-inner">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Graceful fallback to SVG if image not found
                      (e.target as HTMLImageElement).src = '/images/profile/profile.svg';
                    }}
                  />

                  {/* Gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-maroon-950/20 pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-maroon-700/60 shadow-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-warm-50 font-serif">Wathmini Ayesha</h3>
                      <p className="text-xs font-mono text-rose-soft/80">Information Systems Undergraduate</p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-xs font-mono bg-maroon-900 text-rose-soft border border-maroon-700">
                      SUSL
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
