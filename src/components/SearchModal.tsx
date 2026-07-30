import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { Recipe } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  recipes,
  onSelectRecipe,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matches = query.trim()
    ? recipes.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.category.toLowerCase().includes(query.toLowerCase()) ||
          r.ingredients.some((i) => i.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="search-modal-card"
        className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-neutral-800">
          <Search className="w-5 h-5 text-orange-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type ingredient or recipe name (e.g. Tuscan, Salmon)..."
            className="w-full bg-transparent text-base text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List or Quick Suggestions */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {query.trim() ? (
            matches.length > 0 ? (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 block mb-2">
                  Matching Recipes ({matches.length})
                </span>
                {matches.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => {
                      onSelectRecipe(recipe);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-orange-50 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-[#111827] dark:text-white group-hover:text-orange-500">
                          {recipe.title}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {recipe.category} • {recipe.prepTime} prep
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-gray-500">
                No recipes found for "{query}".
              </div>
            )
          ) : (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Suggested Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Creamy Garlic Chicken', 'Lemon Herb Salmon', 'Chicken Alfredo', 'Chocolate Cake', 'Smoothies'].map(
                    (term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-neutral-800 hover:bg-orange-50 dark:hover:bg-neutral-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        {term}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-800/50 border-t border-gray-100 dark:border-neutral-800 text-[11px] text-gray-400 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 font-mono">ESC</kbd> to exit</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-orange-500" /> Savorly Quick Search
          </span>
        </div>
      </div>
    </div>
  );
};
