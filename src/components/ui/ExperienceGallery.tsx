import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { type CommunityActivity, getPlaceholderSvg } from '../../data/communityData';

interface ExperienceGalleryProps {
  activity: CommunityActivity | null;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({
  activity,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imgErrorMap, setImgErrorMap] = useState<Record<number, boolean>>({});

  // Reset index & errors when active activity opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setImgErrorMap({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex, activity]);

  const handleNext = useCallback(() => {
    if (!activity) return;
    setCurrentIndex((prev) => (prev + 1) % activity.images.length);
  }, [activity]);

  const handlePrev = useCallback(() => {
    if (!activity) return;
    setCurrentIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  }, [activity]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !activity) return null;

  const totalPhotos = activity.images.length;
  const currentPhoto = activity.images[currentIndex];
  const hasError = !!imgErrorMap[currentIndex];

  const photoSrc = hasError
    ? getPlaceholderSvg(activity.shortTitle, activity.role, currentIndex + 1, totalPhotos)
    : currentPhoto.url;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-2xl animate-fadeIn p-2 sm:p-6"
      onClick={onClose}
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-maroon-900/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div
        className="relative z-10 w-full max-w-6xl max-h-[96vh] flex flex-col justify-between bg-charcoal-900/90 border border-maroon-800/80 rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-maroon-900/60 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-maroon-950 border border-maroon-700 flex items-center justify-center text-rose-soft shadow-inner">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg text-warm-50">
                  {activity.title}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-maroon-900/70 text-rose-soft border border-maroon-700/60">
                  {activity.role}
                </span>
              </div>
              <p className="text-xs text-rose-soft/75 font-sans line-clamp-1">
                {activity.organization ? `${activity.organization} • ` : ''}{activity.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Photo Counter Pill */}
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-charcoal-950 text-rose-soft border border-maroon-800/70">
              {currentIndex + 1} / {totalPhotos}
            </span>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-charcoal-950 text-rose-soft hover:text-white hover:bg-maroon-900 border border-maroon-800 hover:border-maroon-600 transition-colors shadow-sm"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Image Viewport */}
        <div className="relative flex-1 min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center my-3 overflow-hidden rounded-2xl bg-charcoal-950/80 border border-maroon-950/60">
          <img
            src={photoSrc}
            alt={currentPhoto.caption || activity.title}
            className="max-h-[52vh] sm:max-h-[60vh] max-w-full w-auto object-contain rounded-xl shadow-2xl transition-all duration-300"
            onError={() => {
              setImgErrorMap((prev) => ({ ...prev, [currentIndex]: true }));
            }}
          />

          {/* Left Arrow Button */}
          {totalPhotos > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal-950/85 hover:bg-maroon-900 text-rose-soft hover:text-white border border-maroon-800/70 hover:border-maroon-600 backdrop-blur-md shadow-xl transition-all transform hover:scale-105 active:scale-95"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {totalPhotos > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal-950/85 hover:bg-maroon-900 text-rose-soft hover:text-white border border-maroon-800/70 hover:border-maroon-600 backdrop-blur-md shadow-xl transition-all transform hover:scale-105 active:scale-95"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption & Thumbnail Strip Footer */}
        <div className="pt-3 border-t border-maroon-900/60 space-y-3">
          {/* Caption */}
          {currentPhoto.caption && (
            <p className="text-center text-xs sm:text-sm font-sans text-rose-soft/90 max-w-3xl mx-auto italic">
              "{currentPhoto.caption}"
            </p>
          )}

          {/* Thumbnails Row */}
          {totalPhotos > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
              {activity.images.map((photo, idx) => {
                const isSelected = idx === currentIndex;
                const thumbError = !!imgErrorMap[idx];
                const thumbSrc = thumbError
                  ? getPlaceholderSvg(activity.shortTitle, activity.role, idx + 1, totalPhotos)
                  : photo.url;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 ${
                      isSelected
                        ? 'border-rose-dusty ring-2 ring-maroon-700 scale-105 shadow-maroon-sm'
                        : 'border-maroon-900/80 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumbSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={() => {
                        setImgErrorMap((prev) => ({ ...prev, [idx]: true }));
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
