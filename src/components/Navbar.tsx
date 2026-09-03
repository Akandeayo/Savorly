import React, { useState, useEffect } from 'react';
import { ChefHat, Search, Moon, Sun, ArrowRight, Menu, X } from 'lucide-react';
import siteContent from '../data/siteContent.json';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenSearch: () => void;
  onBrowseClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeNav,
  setActiveNav,
  onOpenSearch,
  onBrowseClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteContent.navigation.links
    .filter((link) => link.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const handleNavClick = (targetId: string) => {
    setActiveNav(targetId);
    setMobileMenuOpen(false);
    if (targetId === 'recipes' || targetId === 'home') {
      const target = document.getElementById(targetId === 'recipes' ? 'recipes-section' : 'hero-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId === 'categories') {
      const target = document.getElementById('categories-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId === 'about') {
      const target = document.getElementById('about-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId === 'contact') {
      const target = document.getElementById('footer-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-neutral-800'
          : 'bg-white dark:bg-neutral-900 border-b border-gray-100 dark:border-neutral-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
          id="navbar-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6 shadow-sm">
            <ChefHat className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#111827] dark:text-white flex items-center gap-1 font-display">
              {siteContent.navigation.logoText}
              <span className="text-orange-500 text-3xl leading-none">.</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#6B7280] dark:text-gray-400 -mt-1 hidden sm:inline">
              {siteContent.navigation.logoTagline}
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav-links">
          {navLinks.map((link) => {
            const isActive = activeNav === link.targetId;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.targetId}`}
                onClick={() => handleNavClick(link.targetId)}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-orange-500 dark:text-orange-400 font-semibold'
                    : 'text-[#6B7280] dark:text-gray-300 hover:text-[#111827] dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full animate-in fade-in zoom-in-50 duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3" id="navbar-actions">
          {/* Search Button */}
          <button
            id="navbar-search-btn"
            onClick={onOpenSearch}
            aria-label="Search recipes"
            className="p-2.5 rounded-full text-[#6B7280] dark:text-gray-300 hover:text-[#111827] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
            title="Search recipes (Ctrl+K)"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full text-[#6B7280] dark:text-gray-300 hover:text-[#111827] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            id="navbar-cta-btn"
            onClick={onBrowseClick}
            className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {siteContent.navigation.ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#6B7280] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.targetId)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  activeNav === link.targetId
                    ? 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-semibold'
                    : 'text-[#6B7280] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBrowseClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-3 rounded-full shadow-md shadow-orange-500/20"
            >
              {siteContent.navigation.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
