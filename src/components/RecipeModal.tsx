import React, { useState } from 'react';
import {
  X,
  Clock,
  Flame,
  Users,
  Star,
  CheckCircle2,
  Bookmark,
  Share2,
  Printer,
  Sparkles,
  Utensils,
  ChevronRight
} from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!recipe) return null;

  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [copiedShare, setCopiedShare] = useState(false);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div
      id="recipe-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="recipe-modal-content"
        className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-neutral-800 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-recipe-modal-btn"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Banner Overlays */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white">
                {recipe.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white border border-white/20">
                {recipe.difficulty}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display leading-tight drop-shadow-sm">
              {recipe.title}
            </h2>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-[#FAFAFA] dark:bg-neutral-800/80 px-6 py-4 border-b border-[#E5E7EB] dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs sm:text-sm text-[#111827] dark:text-gray-200">
            <div className="flex items-center gap-1.5 font-semibold">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>{recipe.prepTime} prep • {recipe.cookTime} cook</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{recipe.calories} kcal</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold hidden sm:flex">
              <Users className="w-4 h-4 text-orange-500" />
              <span>{recipe.servings} Servings</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{recipe.rating} ({recipe.reviewsCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(recipe.id)}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-neutral-600 hover:bg-orange-50'
              }`}
              title={isBookmarked ? 'Saved to Bookmarks' : 'Bookmark Recipe'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all cursor-pointer"
              title="Share Recipe"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Description */}
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-gray-300 leading-relaxed mb-6">
            {recipe.description}
          </p>

          {/* Interactive Cooking Tabs */}
          <div className="flex border-b border-gray-200 dark:border-neutral-800 mb-6">
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`pb-3 px-4 text-sm font-bold transition-all relative ${
                activeTab === 'ingredients'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-800 dark:text-gray-400'
              }`}
            >
              Ingredients ({recipe.ingredients.length})
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-3 px-4 text-sm font-bold transition-all relative ${
                activeTab === 'instructions'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-800 dark:text-gray-400'
              }`}
            >
              Step-by-Step Instructions ({recipe.instructions.length})
            </button>
          </div>

          {/* Tab Content: Ingredients */}
          {activeTab === 'ingredients' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">
                Tip: Click ingredients as you gather them while cooking.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? 'bg-orange-50/60 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/40 text-gray-400 line-through'
                          : 'bg-white dark:bg-neutral-800 border-gray-100 dark:border-neutral-700/80 text-gray-800 dark:text-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 ${
                          isChecked ? 'text-orange-500 fill-orange-100' : 'text-gray-300 dark:text-neutral-600'
                        }`}
                      />
                      <span className="text-sm font-medium">{ing}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab Content: Instructions */}
          {activeTab === 'instructions' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {recipe.instructions.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFAFA] dark:bg-neutral-800/50 border border-[#E5E7EB] dark:border-neutral-700/60"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-[#111827] dark:text-gray-200 leading-relaxed font-normal">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Chef's Note Box */}
          {recipe.chefNote && (
            <div className="mt-8 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
                  Chef's Pro Tip
                </h5>
                <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 italic">
                  "{recipe.chefNote}"
                </p>
              </div>
            </div>
          )}

          {/* Toast feedback for sharing */}
          {copiedShare && (
            <div className="mt-4 p-3 bg-emerald-500 text-white text-xs font-semibold rounded-xl text-center animate-in fade-in">
              Recipe link copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
