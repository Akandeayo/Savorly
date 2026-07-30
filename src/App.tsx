/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecipeGrid } from './components/RecipeGrid';
import { CategoriesSection } from './components/CategoriesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { RecipeModal } from './components/RecipeModal';
import { SearchModal } from './components/SearchModal';
import { SAMPLE_RECIPES } from './data/recipes';
import { CategoryType, Recipe } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeNav, setActiveNav] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['rec-1']);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Apply dark class to document HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSearchSubmit = (query?: string, category?: CategoryType) => {
    if (query !== undefined) setSearchQuery(query);
    if (category !== undefined) setSelectedCategory(category);
    
    // Smooth scroll down to recipes section to show results
    const gridEl = document.getElementById('recipes-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrowseClick = () => {
    setActiveNav('recipes');
    const gridEl = document.getElementById('recipes-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-[#111827] dark:text-white font-sans selection:bg-orange-500 selection:text-white transition-colors duration-300">
      
      {/* Sticky Glass Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onBrowseClick={handleBrowseClick}
      />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSearchSubmit={handleSearchSubmit}
          onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
        />

        {/* Categories Section */}
        <CategoriesSection
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setActiveNav('categories');
          }}
        />

        {/* Recipe Grid & Filters */}
        <RecipeGrid
          recipes={SAMPLE_RECIPES}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* About Story Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isBookmarked={selectedRecipe ? bookmarkedIds.includes(selectedRecipe.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        recipes={SAMPLE_RECIPES}
        onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
      />

    </div>
  );
}
