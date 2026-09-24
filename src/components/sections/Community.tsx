import React, { useState } from 'react';
import { Camera, Sparkles, MapPin, Calendar, ArrowUpRight, Images } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ExperienceGallery } from '../ui/ExperienceGallery';
import { communityActivities, type CommunityActivity, getPlaceholderSvg } from '../../data/communityData';

export const Community: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<CommunityActivity | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleOpenGallery = (activity: CommunityActivity) => {
    setSelectedActivity(activity);
  };

  const handleCloseGallery = () => {
    setSelectedActivity(null);
  };

  return (
    <section id="community" className="py-24 relative bg-charcoal-900/50 border-t border-maroon-900/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-maroon-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Involvement & Impact"
          title="Community & Leadership"
          subtitle="A visual record of university leadership, student branch initiatives, hackathon coordination, and STEM outreach."
        />

        {/* Visual Responsive Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {communityActivities.map((activity: CommunityActivity) => {
            const hasError = !!imgErrors[activity.id];
            const imgSrc = hasError
              ? getPlaceholderSvg(activity.shortTitle, activity.role, 1, activity.images.length)
              : activity.coverImage;

            return (
              <div
                key={activity.id}
                onClick={() => handleOpenGallery(activity)}
                className={`${activity.gridSpan} group relative rounded-3xl overflow-hidden cursor-pointer border border-maroon-800/70 hover:border-rose-dusty/80 bg-charcoal-850 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-maroon`}
              >
                {/* Image Container */}
                <div className={`relative w-full ${activity.aspectRatio} overflow-hidden bg-charcoal-950`}>
                  <img
                    src={imgSrc}
                    alt={activity.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={() => {
                      setImgErrors((prev) => ({ ...prev, [activity.id]: true }));
                    }}
                  />

                  {/* Multi-layer Gradient Overlay for high legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent pointer-events-none transition-opacity duration-300 group-hover:via-charcoal-950/50" />
                  
                  {/* Subtle top shade */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal-950/70 to-transparent pointer-events-none" />

                  {/* Top Badges Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-maroon-950/90 text-rose-soft border border-maroon-700/80 backdrop-blur-md shadow-md">
                      {activity.shortTitle}
                    </span>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-charcoal-950/85 text-rose-soft border border-maroon-800/70 backdrop-blur-md shadow-sm group-hover:border-rose-dusty/80 transition-colors">
                      <Images className="w-3.5 h-3.5 text-rose-dusty" />
                      <span>{activity.images.length} Photos</span>
                    </div>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 space-y-2 pointer-events-none">
                    {/* Role Tag & Title */}
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-mono text-rose-dusty font-semibold tracking-wide flex items-center gap-2">
                        <span>{activity.role}</span>
                        {activity.date && (
                          <>
                            <span className="text-rose-soft/40">•</span>
                            <span className="flex items-center gap-1 text-rose-soft/75">
                              <Calendar className="w-3 h-3 text-rose-dusty" />
                              {activity.date}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-warm-50 tracking-tight group-hover:text-rose-soft transition-colors">
                        {activity.title}
                      </h3>
                    </div>

                    {/* Metadata line if organization or location */}
                    {(activity.organization || activity.location || activity.focus) && (
                      <p className="text-xs sm:text-sm font-mono text-rose-soft/80 flex flex-wrap items-center gap-2">
                        {activity.organization && <span>{activity.organization}</span>}
                        {activity.focus && (
                          <span className="px-2 py-0.5 rounded bg-maroon-900/60 border border-maroon-700 text-rose-soft text-[11px]">
                            {activity.focus}
                          </span>
                        )}
                        {activity.location && (
                          <span className="flex items-center gap-1 text-rose-soft/70">
                            <MapPin className="w-3 h-3 text-rose-dusty" />
                            {activity.location}
                          </span>
                        )}
                      </p>
                    )}

                    {/* Concise one-line description */}
                    <p className="text-sm sm:text-base text-warm-200/90 font-sans leading-relaxed pt-1 line-clamp-2">
                      "{activity.description}"
                    </p>

                    {/* Visual Call-to-action cue */}
                    <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-rose-dusty group-hover:text-rose-soft transition-colors font-medium">
                      <span>Click to view photos</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Line */}
        <div className="mt-16 text-center">
          <p className="text-base sm:text-lg font-serif italic text-rose-soft/85 flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 h-px bg-maroon-700/80" />
            <span>Learning through every team, event and experience.</span>
            <span className="w-8 sm:w-12 h-px bg-maroon-700/80" />
          </p>
        </div>

      </div>

      {/* Lightbox / Gallery Modal */}
      <ExperienceGallery
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={handleCloseGallery}
      />
    </section>
  );
};
