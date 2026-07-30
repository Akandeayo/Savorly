import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  UtensilsCrossed,
  Grid,
  Users,
  Star,
  Clock,
  Eye,
  Sparkles,
  ChevronDown,
  Flame,
  Award
} from 'lucide-react';
import { CategoryType, Recipe } from '../types';
import heroDishImg from '../assets/images/savorly_hero_dish_1785418456470.jpg';
import tuscanChickenImg from '../assets/images/tuscan_chicken_1785418467629.jpg';
import salmonImg from '../assets/images/lemon_herb_salmon_1785418479888.jpg';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  onSearchSubmit: (query?: string, category?: CategoryType) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onSearchSubmit,
  onSelectRecipe,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categoriesList: CategoryType[] = [
    'All',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Desserts',
    'Healthy',
    'Vegetarian'
  ];

  const popularSearches = [
    'Chicken Alfredo',
    'Pasta',
    'Chocolate Cake',
    'Smoothies',
    'Salads'
  ];

  const recipeOfDay: Recipe = {
    id: 'rec-1',
    title: 'Creamy Garlic Tuscan Chicken',
    description: 'Tender chicken breasts seared to golden perfection in a creamy garlic and sun-dried tomato sauce.',
    category: 'Dinner',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 480,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 342,
    views: '24.8K',
    image: tuscanChickenImg,
    ingredients: [
      '2 chicken breasts',
      '1 cup heavy cream',
      '4 garlic cloves',
      '1/2 cup sun-dried tomatoes',
      '2 cups baby spinach'
    ],
    instructions: [
      'Sear chicken breasts in pan until cooked.',
      'Sauté garlic and sun-dried tomatoes.',
      'Add cream and spinach, simmer till thickened.'
    ],
    tags: ['30 mins', 'Creamy', 'Dinner']
  };

  const recipeTrending: Recipe = {
    id: 'rec-2',
    title: 'One-Pan Lemon Herb Salmon',
    description: 'Flaky baked salmon with fresh lemon slices, rosemary, and tender roasted asparagus.',
    category: 'Healthy',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 420,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 289,
    views: '12.4K',
    image: salmonImg,
    ingredients: [
      '2 salmon fillets',
      '1 bunch asparagus',
      '1 fresh lemon',
      '2 tbsp olive oil',
      'Rosemary & garlic'
    ],
    instructions: [
      'Arrange salmon and asparagus on sheet pan.',
      'Season with olive oil, lemon, and fresh herbs.',
      'Bake at 400°F for 15 mins.'
    ],
    tags: ['One-Pan', 'Low-Carb', 'Healthy']
  };

  const handleChipClick = (term: string) => {
    setSearchQuery(term);
    onSearchSubmit(term, selectedCategory);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery, selectedCategory);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-900 py-12 lg:py-16"
    >
      {/* Background Subtle Gradient Glow Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text, Search & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Pill Badge */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/50 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-semibold shadow-xs mb-6"
            >
              <span className="text-base leading-none">🍽️</span>
              <span>Trusted by Home Cooks Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] dark:text-white leading-[1.12] mb-6 font-display"
            >
              Discover{' '}
              <span className="relative inline-block text-orange-500 underline decoration-orange-300 dark:decoration-orange-600 decoration-wavy underline-offset-8">
                Delicious
              </span>{' '}
              Recipes For Every Occasion
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#6B7280] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Explore hundreds of easy-to-follow recipes made for busy families,
              passionate home cooks, and food lovers. From quick weekday dinners to
              impressive weekend meals, Savorly helps you cook with confidence every day.
            </p>

            {/* Modern Search Bar */}
            <div className="w-full max-w-2xl mb-6">
              <form
                onSubmit={handleFormSubmit}
                id="hero-search-form"
                className="bg-white dark:bg-neutral-800 p-2 sm:p-2.5 rounded-2xl sm:rounded-full border border-gray-200 dark:border-neutral-700 shadow-xl shadow-gray-200/60 dark:shadow-none flex flex-col sm:flex-row items-stretch sm:items-center gap-2 transition-all focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20"
              >
                {/* Search Input Field */}
                <div className="flex-1 flex items-center gap-3 px-3 py-1">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    id="hero-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search recipes, ingredients, or cuisines..."
                    className="w-full bg-transparent border-none text-sm sm:text-base text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-neutral-700" />

                {/* Category Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    id="hero-category-dropdown-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-[#6B7280] dark:text-gray-300 hover:text-[#111827] dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700/50 cursor-pointer"
                  >
                    <span>{selectedCategory === 'All' ? 'All Categories' : selectedCategory}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                      {categoriesList.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors ${
                            selectedCategory === cat
                              ? 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-semibold'
                              : 'text-[#6B7280] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {cat === 'All' ? 'All Categories' : cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Submit Button */}
                <button
                  type="submit"
                  id="hero-search-submit-btn"
                  className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-medium text-sm px-6 py-3 rounded-xl sm:rounded-full shadow-md shadow-orange-500/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </form>

              {/* Popular Searches */}
              <div id="popular-searches" className="flex flex-wrap items-center gap-2 mt-4 px-1">
                <span className="text-xs sm:text-sm font-semibold text-[#6B7280] dark:text-gray-400">
                  Popular:
                </span>
                {popularSearches.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAFAFA] dark:bg-neutral-800 text-[#111827] dark:text-gray-300 border border-[#E5E7EB] dark:border-neutral-700 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-neutral-700 transition-all duration-200 cursor-pointer shadow-2xs"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Statistics Row (4 Cards) */}
            <div id="hero-stats-grid" className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 mt-2">
              <div className="bg-[#FAFAFA] dark:bg-neutral-800/60 p-3.5 rounded-2xl border border-[#E5E7EB] dark:border-neutral-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827] dark:text-white leading-tight">500+</div>
                  <div className="text-[11px] font-medium text-[#6B7280] dark:text-gray-400 leading-tight">Curated Recipes</div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] dark:bg-neutral-800/60 p-3.5 rounded-2xl border border-[#E5E7EB] dark:border-neutral-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Grid className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827] dark:text-white leading-tight">80+</div>
                  <div className="text-[11px] font-medium text-[#6B7280] dark:text-gray-400 leading-tight">Recipe Categories</div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] dark:bg-neutral-800/60 p-3.5 rounded-2xl border border-[#E5E7EB] dark:border-neutral-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827] dark:text-white leading-tight">50K+</div>
                  <div className="text-[11px] font-medium text-[#6B7280] dark:text-gray-400 leading-tight">Monthly Visitors</div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] dark:bg-neutral-800/60 p-3.5 rounded-2xl border border-[#E5E7EB] dark:border-neutral-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-950/50 text-[#15803D] dark:text-green-400 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 stroke-[2] fill-green-600/20 dark:fill-green-400/20" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827] dark:text-white leading-tight">4.9★</div>
                  <div className="text-[11px] font-medium text-[#6B7280] dark:text-gray-400 leading-tight">Community Rating</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Large Food Photograph & Overlapping Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Main Food Photograph Container */}
            <div className="relative w-full max-w-lg group">
              
              {/* Soft Ambient Shadow Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/10 rounded-3xl blur-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 bg-white dark:bg-neutral-800">
                <img
                  src={heroDishImg}
                  alt="Gourmet Mediterranean Power Bowl"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Image Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111827] dark:text-white shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span>Chef's Choice Platter</span>
                </div>
              </div>

              {/* FLOATING CARD ONE: Recipe of the Day (Top-Left Overlap) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                onClick={() => onSelectRecipe(recipeOfDay)}
                id="floating-card-recipe-of-day"
                className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700/80 max-w-[240px] sm:max-w-[270px] cursor-pointer hover:border-orange-300 dark:hover:border-orange-500 transition-all group/card z-20"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={recipeOfDay.image}
                    alt={recipeOfDay.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="overflow-hidden">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-[10px] font-bold text-amber-600 dark:text-amber-400 mb-1">
                      <Award className="w-3 h-3" />
                      <span>Recipe of the Day</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white truncate group-hover/card:text-orange-500 transition-colors">
                      {recipeOfDay.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#6B7280] dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-500" />
                        Ready in 30 mins
                      </span>
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="ml-0.5 font-bold text-gray-700 dark:text-gray-300">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD TWO: Trending This Week (Bottom-Right Overlap) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.5 }}
                onClick={() => onSelectRecipe(recipeTrending)}
                id="floating-card-trending"
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700/80 max-w-[240px] sm:max-w-[270px] cursor-pointer hover:border-orange-300 dark:hover:border-orange-500 transition-all group/card z-20"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={recipeTrending.image}
                    alt={recipeTrending.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="overflow-hidden">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/60 text-[10px] font-bold text-orange-600 dark:text-orange-400 mb-1">
                      <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                      <span>Trending This Week</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white truncate group-hover/card:text-orange-500 transition-colors">
                      {recipeTrending.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#6B7280] dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-orange-500" />
                        12.4K views
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">• Easy</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
