import React, { useState } from 'react';
import { ChefHat, Mail, ArrowRight, Instagram, Facebook, Twitter, Youtube, CheckCircle2 } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = siteContent.footer.quickLinks
    .filter((l) => l.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const cuisines = siteContent.footer.cuisines
    .filter((c) => c.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const socialLinks = siteContent.footer.socialLinks
    .filter((s) => s.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer-section" className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-100 dark:border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <ChefHat className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#111827] dark:text-white font-display">
                {siteContent.footer.brandName}
                <span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-sm text-[#6B7280] dark:text-gray-400 leading-relaxed mb-6 max-w-sm">
              {siteContent.footer.brandDescription}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = SOCIAL_ICONS[social.platform] || Instagram;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit our ${social.platform} page`}
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B7280] dark:text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisines */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-4">
              Cuisines
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B7280] dark:text-gray-400">
              {cuisines.map((cuisine) => (
                <li key={cuisine.id}>
                  <a href={cuisine.url} className="hover:text-orange-500 transition-colors">
                    {cuisine.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-4">
              Weekly Recipe Inspo
            </h4>
            <p className="text-sm text-[#6B7280] dark:text-gray-400 mb-4">
              Get our editor's weekly culinary discoveries and 15-minute dinner cheat codes directly in your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[11px] text-gray-400 block mt-2">Zero spam, unsubscribe anytime.</span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280] dark:text-gray-400">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{siteContent.footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
