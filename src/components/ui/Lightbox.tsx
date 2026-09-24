import React, { useEffect } from 'react';
import { X, ZoomIn, Info, Download } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  category?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  category,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal-950/90 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-charcoal-900 border border-maroon-700/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-maroon-900/60 bg-charcoal-850/80">
          <div className="flex items-center gap-3">
            {category && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-maroon-950 text-rose-soft border border-maroon-800">
                {category}
              </span>
            )}
            <h3 className="text-lg font-semibold text-warm-50 truncate max-w-md">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-rose-soft/80 hover:text-white hover:bg-maroon-900/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 min-h-[300px] max-h-[65vh] bg-charcoal-950 flex items-center justify-center p-4 overflow-auto">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-full max-w-full object-contain rounded-lg shadow-maroon-sm border border-maroon-900/40"
          />
        </div>

        {/* Caption bar */}
        {caption && (
          <div className="px-6 py-4 bg-charcoal-850/90 border-t border-maroon-900/60 flex items-start gap-3">
            <Info className="w-4 h-4 text-rose-dusty flex-shrink-0 mt-0.5" />
            <p className="text-sm text-rose-soft/90 leading-relaxed font-sans">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
