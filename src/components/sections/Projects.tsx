import React from 'react';
import { Car, ShoppingBag, HeartPulse, CheckCircle2, Sparkles, Code2, ArrowUpRight, Github } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { projectsList, type ProjectItem } from '../../data/projectsData';

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6 text-rose-soft" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-rose-soft" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-soft" />,
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-charcoal-900/60 border-t border-maroon-900/40">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-maroon-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Featured Projects"
          title="Projects"
          subtitle="Key academic and engineering software projects demonstrating full-stack engineering, quality verification, and collaborative system design."
        />

        <div className="space-y-8">
          {projectsList.map((project: ProjectItem, index: number) => {
            const isCapstone = project.badge === 'Capstone Project';
            
            return (
              <div
                key={project.id}
                className={`rounded-3xl p-6 sm:p-10 transition-all duration-300 relative overflow-hidden group ${
                  isCapstone
                    ? 'bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-plum-dark border-2 border-maroon-700/70 shadow-2xl hover:border-rose-dusty/80'
                    : 'bg-charcoal-850/90 border border-maroon-800/60 shadow-xl hover:border-rose-dusty/60 hover:bg-charcoal-850'
                }`}
              >
                {/* Ambient glow in card corner */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-maroon-800/10 rounded-full blur-3xl pointer-events-none group-hover:bg-maroon-700/20 transition-all duration-500" />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Icon, Title, Subtitle, Badge */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-maroon-900/60">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-maroon-950/80 border border-maroon-800 shadow-inner text-rose-soft flex-shrink-0 group-hover:scale-105 group-hover:border-maroon-600 transition-all duration-300">
                        {iconMap[project.iconName] || <Code2 className="w-6 h-6 text-rose-soft" />}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-warm-50 font-serif">
                            {project.title}
                          </h3>
                          <span className="text-xl sm:text-2xl font-normal text-rose-dusty font-serif hidden sm:inline">
                            —
                          </span>
                          <span className="text-lg sm:text-xl font-medium text-rose-soft/90 font-sans">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold border ${project.badgeStyle}`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{project.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Bullet points section */}
                  <div className="space-y-3.5 py-2">
                    <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-rose-soft/70 font-semibold">
                      Key Highlights & Contributions:
                    </h4>
                    <ul className="space-y-3">
                      {project.bullets.map((bullet: string, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-warm-200/90 leading-relaxed font-sans">
                          <CheckCircle2 className="w-5 h-5 text-rose-dusty flex-shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Footer */}
                  <div className="pt-6 border-t border-maroon-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs sm:text-sm font-mono text-rose-soft/60 uppercase font-semibold mr-1">
                        Technologies:
                      </span>
                      {project.technologies.map((tech: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl text-xs sm:text-sm font-mono font-medium bg-charcoal-950/80 text-rose-soft/90 border border-maroon-900/70 group-hover:border-maroon-700/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-rose-soft hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
