import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-maroon-900/50 text-rose-soft border border-maroon-700/50 shadow-maroon-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-dusty animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-warm-50 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-rose-soft/80 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
