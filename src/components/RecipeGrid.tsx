import React, { useState, useMemo } from 'react';
import {
  Clock,
  Flame,
  Star,
  Bookmark,
  Sparkles,
  Search,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { CategoryType, Recipe } from '../types';
import siteContent from '../data/siteContent.json';

interface RecipeGridProps {
  recipes: Recipe[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onSelectRecipe,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [sortBy, setSortBy] = useState<'rating' | 'prep' | 'views'>('rating');

  const categories: CategoryType[] = useMemo(() => {
    const fromCategories = siteContent.categoriesSection.categories
      .filter((c) => c.visible !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((c) => c.categoryId as CategoryType);
    return ['All', ...fromCategories];
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((rec) => {
        const matchesCategory =
          selectedCategory === 'All' || rec.category.toLowerCase() === selectedCategory.toLowerCase();
        
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !q ||
          rec.title.toLowerCase().includes(q) ||
          rec.description.toLowerCase().includes(q) ||
          rec.ingredients.some((i) => i.toLowerCase().includes(q)) ||
          rec.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'views') return parseFloat(b.views) - parseFloat(a.views);
        return parseInt(a.prepTime) - parseInt(b.prepTime);
      });
  }, [recipes, searchQuery, selectedCategory, sortBy]);

  return (
    <section id="recipes-section" className="py-16 bg-[#FAFAFA] dark:bg-neutral-900/50 border-t border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteContent.recipesSection.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white font-display">
              {siteContent.recipesSection.heading}
            </h2>
            <p className="text-[#6B7280] dark:text-gray-400 text-sm sm:text-base mt-1">
              {siteContent.recipesSection.subtext}
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            >
              <option value="rating">Highest Rated</option>
              <option value="views">Most Popular</option>
              <option value="prep">Quickest Prep Time</option>
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-orange-300 hover:text-orange-600 dark:hover:text-orange-400'
                }`}
              >
                {cat === 'All' ? 'All Recipes' : cat}
              </button>
            );
          })}
        </div>

        {/* Active Filter Indicator */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="flex items-center justify-between bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 px-4 py-2.5 rounded-2xl mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-800 dark:text-orange-300">
              <Filter className="w-4 h-4 text-orange-500" />
              <span>
                Showing results for{' '}
                {searchQuery && <strong className="underline">"{searchQuery}"</strong>}
                {searchQuery && selectedCategory !== 'All' && ' in '}
                {selectedCategory !== 'All' && (
                  <strong className="underline">{selectedCategory}</strong>
                )}
              </span>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Recipe Grid Cards */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => {
              const isBookmarked = bookmarkedIds.includes(recipe.id);
              return (
                <div
                  key={recipe.id}
                  onClick={() => onSelectRecipe(recipe)}
                  className="group bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-neutral-700/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-neutral-700">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/90 dark:bg-neutral-900/90 text-orange-600 dark:text-orange-400 backdrop-blur-md shadow-xs">
                      {recipe.category}
                    </span>

                    {/* Bookmark Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(recipe.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                        isBookmarked
                          ? 'bg-orange-500 text-white'
                          : 'bg-black/30 hover:bg-black/50 text-white'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Recipe'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Cook Time */}
                      <div className="flex items-center justify-between text-xs text-[#6B7280] dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-gray-800 dark:text-gray-200">{recipe.rating}</span>
                          <span className="text-gray-400 font-normal">({recipe.reviewsCount})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-orange-500" />
                          <span>{recipe.prepTime} prep</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#111827] dark:text-white group-hover:text-orange-500 transition-colors line-clamp-1 mb-2 font-display">
                        {recipe.title}
                      </h3>

                      {/* Description snippet */}
                      <p className="text-xs text-[#6B7280] dark:text-gray-300 line-clamp-2 leading-relaxed mb-4">
                        {recipe.description}
                      </p>
                    </div>

                    {/* Footer Tags & CTA */}
                    <div className="pt-3 border-t border-gray-100 dark:border-neutral-700/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span>{recipe.calories} kcal</span>
                      </div>

                      <span className="font-semibold text-orange-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View Recipe &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white dark:bg-neutral-800 rounded-3xl border border-gray-100 dark:border-neutral-700 p-8">
            <Search className="w-12 h-12 text-gray-300 dark:text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-1">
              {siteContent.recipesSection.emptyHeading}
            </h3>
            <p className="text-sm text-[#6B7280] dark:text-gray-400 max-w-md mx-auto mb-4">
              {searchQuery
                ? `We couldn't find recipes matching "${searchQuery}". Try searching for pasta, chicken, salmon, or resetting your filter.`
                : siteContent.recipesSection.emptyMessage}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 bg-orange-500 text-white font-medium text-xs sm:text-sm rounded-full shadow-md cursor-pointer"
            >
              {siteContent.recipesSection.clearFiltersLabel}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
