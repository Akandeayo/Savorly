import React from 'react';
import { ShieldCheck, HeartHandshake, ChefHat, Sparkles } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const ICON_CONFIG: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; bg: string; color: string }
> = {
  ShieldCheck: {
    icon: ShieldCheck,
    bg: 'bg-orange-500/10',
    color: 'text-orange-500',
  },
  HeartHandshake: {
    icon: HeartHandshake,
    bg: 'bg-emerald-500/10',
    color: 'text-[#15803D] dark:text-emerald-400',
  },
  Sparkles: {
    icon: Sparkles,
    bg: 'bg-amber-500/10',
    color: 'text-amber-500',
  },
};

const DEFAULT_ICON = {
  icon: Sparkles,
  bg: 'bg-orange-500/10',
  color: 'text-orange-500',
};

export const AboutSection: React.FC = () => {
  const features = siteContent.aboutSection.features
    .filter((f) => f.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const stats = siteContent.aboutSection.stats
    .filter((s) => s.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <section id="about-section" className="py-20 bg-[#FAFAFA] dark:bg-neutral-900/60 border-t border-gray-100 dark:border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ChefHat className="w-4 h-4" />
              <span>{siteContent.aboutSection.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] dark:text-white font-display leading-tight mb-6">
              {siteContent.aboutSection.heading}
            </h2>
            <p className="text-[#6B7280] dark:text-gray-300 text-base leading-relaxed mb-6">
              {siteContent.aboutSection.description}
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              {features.map((item) => {
                const conf = ICON_CONFIG[item.icon] || DEFAULT_ICON;
                const IconComponent = conf.icon;
                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-2xl ${conf.bg} ${conf.color} flex items-center justify-center shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] dark:text-white">{item.title}</h4>
                      <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 shadow-xl relative z-10">
              <blockquote className="text-lg font-medium text-[#111827] dark:text-white italic leading-relaxed">
                {siteContent.aboutSection.quote}
              </blockquote>
              <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-3 font-normal">
                {siteContent.aboutSection.quoteAuthor}
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-700 grid grid-cols-3 gap-4 text-center">
                {stats.map((st) => (
                  <div key={st.id}>
                    <span className="block text-2xl font-black text-orange-500 font-display">{st.value}</span>
                    <span className="text-[11px] text-[#6B7280] dark:text-gray-400 font-medium">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Ambient Shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl -z-0 blur-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};
