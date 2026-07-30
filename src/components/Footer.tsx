import React, { useState } from 'react';
import { ChefHat, Send, Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer id="footer-section" className="bg-[#111827] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md">
                <ChefHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="font-black text-2xl tracking-tight font-display">
                Savorly<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Cook with confidence. Eat with joy. Inspiring home cooks around the world with healthy, reliable, and irresistible recipes every single day.
            </p>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="max-w-md">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Join Our Weekly Recipe Digest
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-neutral-800 border border-neutral-700 text-sm rounded-full px-4 py-2.5 w-full text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-full shrink-0 shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-semibold mt-2 animate-in fade-in">
                  ✓ Thanks for subscribing! Check your inbox soon.
                </p>
              )}
            </form>
          </div>

          {/* Nav Links Col 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#hero-section" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#recipes-section" className="hover:text-orange-400 transition-colors">Browse Recipes</a></li>
              <li><a href="#categories-section" className="hover:text-orange-400 transition-colors">Categories</a></li>
              <li><a href="#about-section" className="hover:text-orange-400 transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Nav Links Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Popular Cuisines
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><span className="hover:text-orange-400 cursor-pointer">Italian Classics</span></li>
              <li><span className="hover:text-orange-400 cursor-pointer">Mediterranean Bowls</span></li>
              <li><span className="hover:text-orange-400 cursor-pointer">30-Minute Dinners</span></li>
              <li><span className="hover:text-orange-400 cursor-pointer">Keto & Low Carb</span></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-full bg-neutral-800 hover:bg-orange-500 text-gray-300 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800 hover:bg-orange-500 text-gray-300 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800 hover:bg-orange-500 text-gray-300 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-800 hover:bg-orange-500 text-gray-300 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Savorly Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span>for food lovers everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
