import { Recipe } from '../types';
import siteContent from './siteContent.json';

export const SAMPLE_RECIPES: Recipe[] = (siteContent.recipes as Recipe[])
  .filter((r) => r.visible !== false)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const POPULAR_CHIPS: string[] = siteContent.hero.popularSearches
  .filter((p) => p.visible !== false)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  .map((p) => p.term);

export const STATS_DATA = siteContent.hero.stats
  .filter((s) => s.visible !== false)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  .map((s) => ({
    number: s.value,
    label: s.label,
    icon: s.icon,
  }));
