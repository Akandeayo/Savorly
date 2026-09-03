import React from 'react';
import { CategoryType } from '../types';
import {
  Coffee,
  Utensils,
  Sun,
  Cake,
  Heart,
  Leaf,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import siteContent from '../data/siteContent.json';

interface CategoriesSectionProps {
  onSelectCategory: (cat: CategoryType) => void;
}

const CATEGORY_THEMES: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    bg: string;
    color: string;
    border: string;
  }
> = {
  Coffee: {
    icon: Coffee,
    bg: 'from-amber-500/10 to-orange-500/5',
    color: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200/60 dark:border-amber-900/40',
  },
  Sun: {
    icon: Sun,
    bg: 'from-orange-500/10 to-amber-500/5',
    color: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200/60 dark:border-orange-900/40',
  },
  Utensils: {
    icon: Utensils,
    bg: 'from-red-500/10 to-orange-500/5',
    color: 'text-red-600 dark:text-red-400',
    border: 'border-red-200/60 dark:border-red-900/40',
  },
  Cake: {
    icon: Cake,
    bg: 'from-pink-500/10 to-purple-500/5',
    color: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200/60 dark:border-pink-900/40',
  },
  Heart: {
    icon: Heart,
    bg: 'from-emerald-500/10 to-teal-500/5',
    color: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200/60 dark:border-emerald-900/40',
  },
  Leaf: {
    icon: Leaf,
    bg: 'from-green-500/10 to-emerald-500/5',
    color: 'text-green-600 dark:text-green-400',
    border: 'border-green-200/60 dark:border-green-900/40',
  },
};

const DEFAULT_THEME = {
  icon: Sparkles,
  bg: 'from-orange-500/10 to-amber-500/5',
  color: 'text-orange-600 dark:text-orange-400',
  border: 'border-orange-200/60 dark:border-orange-900/40',
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const categories = siteContent.categoriesSection.categories
    .filter((cat) => cat.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <section id="categories-section" className="py-16 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white font-display">
            {siteContent.categoriesSection.heading}
          </h2>
          <p className="text-[#6B7280] dark:text-gray-400 text-sm sm:text-base mt-2">
            {siteContent.categoriesSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((item) => {
            const theme = CATEGORY_THEMES[item.icon] || DEFAULT_THEME;
            const Icon = theme.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  onSelectCategory(item.categoryId as CategoryType);
                  const el = document.getElementById('recipes-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group p-5 rounded-3xl bg-gradient-to-br ${theme.bg} border ${theme.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center justify-between min-h-[160px]`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm ${theme.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="mt-3">
                  <h3 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-medium text-[#6B7280] dark:text-gray-400 block mt-0.5">
                    {item.count}
                  </span>
                </div>
                <div className="mt-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
