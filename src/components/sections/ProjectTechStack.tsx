import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Send, 
  Lock, 
  GitBranch, 
  Cpu, 
  Workflow, 
  Sparkles,
  Layers
} from 'lucide-react';
import { vmasProject } from '../../data/vmasData';

const techIcons: Record<string, React.ReactNode> = {
  "React": <Code2 className="w-6 h-6 text-rose-soft" />,
  "Spring Boot": <Server className="w-6 h-6 text-rose-soft" />,
  "Java": <Cpu className="w-6 h-6 text-rose-soft" />,
  "MySQL": <Database className="w-6 h-6 text-rose-soft" />,
  "REST APIs": <Workflow className="w-6 h-6 text-rose-soft" />,
  "JWT": <Lock className="w-6 h-6 text-rose-soft" />,
  "Postman": <Send className="w-6 h-6 text-rose-soft" />,
  "Git & GitHub": <GitBranch className="w-6 h-6 text-rose-soft" />,
};

export const ProjectTechStack: React.FC = () => {
  return (
    <section className="py-16 relative bg-charcoal-950 border-t border-maroon-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-maroon-900/40 text-rose-soft border border-maroon-800/60">
            <Layers className="w-3.5 h-3.5 text-rose-dusty" />
            <span>Architecture & Stack</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-warm-50 font-serif">
            V-Mas Technology Visualization
          </h3>
          <p className="text-xs sm:text-sm text-rose-soft/70">
            Engineered with modern modular frameworks, enterprise Java micro-patterns, and relational data integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vmasProject.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-charcoal-850 border border-maroon-800/50 hover:border-rose-dusty/60 shadow-sm hover:shadow-maroon-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-charcoal-900 border border-maroon-700/60 group-hover:bg-maroon-900/60 transition-colors">
                  {techIcons[tech.name] || <Sparkles className="w-6 h-6 text-rose-soft" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-rose-dusty block">
                    {tech.category}
                  </span>
                  <h4 className="text-base font-bold text-warm-50 font-serif group-hover:text-rose-soft transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-rose-soft/80 font-sans leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
