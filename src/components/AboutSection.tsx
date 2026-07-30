import React from 'react';
import { ShieldCheck, HeartHandshake, ChefHat, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-20 bg-[#FAFAFA] dark:bg-neutral-900/60 border-t border-gray-100 dark:border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ChefHat className="w-4 h-4" />
              <span>About Savorly</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] dark:text-white font-display leading-tight mb-6">
              Our Mission: Bring Joy Back to Everyday Cooking
            </h2>
            <p className="text-[#6B7280] dark:text-gray-300 text-base leading-relaxed mb-6">
              At Savorly, we believe that cooking shouldn't feel like a chore. Whether you're a beginner trying your first pasta sauce or an experienced foodie hosting weekend dinner parties, our curated recipes are tested and perfected to work every single time.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] dark:text-white">Triple-Tested Recipe Accuracy</h4>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-0.5">Every measurement and temperature is rigorously verified in real home kitchens.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-[#15803D] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] dark:text-white">Home Cook Community Driven</h4>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-0.5">Over 50,000 home cooks leave authentic ratings, reviews, and ingredient swaps daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] dark:text-white">Zero Waste & Ingredient Tips</h4>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-0.5">Chef tips and substitute options ensure you use what is already in your pantry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 shadow-xl relative z-10">
              <blockquote className="text-lg font-medium text-[#111827] dark:text-white italic leading-relaxed">
                "Cook with confidence. Eat with joy."
              </blockquote>
              <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-3 font-normal">
                — Savorly Culinary Team
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-700 grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block text-2xl font-black text-orange-500 font-display">100%</span>
                  <span className="text-[11px] text-[#6B7280] dark:text-gray-400 font-medium">Tested Recipes</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-orange-500 font-display">15 Min</span>
                  <span className="text-[11px] text-[#6B7280] dark:text-gray-400 font-medium">Avg Prep Option</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-orange-500 font-display">4.9/5</span>
                  <span className="text-[11px] text-[#6B7280] dark:text-gray-400 font-medium">User Rating</span>
                </div>
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
