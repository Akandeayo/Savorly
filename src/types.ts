export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced' | string;
  rating: number;
  reviewsCount: number;
  views: string;
  image: string;
  isPopular?: boolean;
  isTrending?: boolean;
  isRecipeOfDay?: boolean;
  visible?: boolean;
  order?: number;
  ingredients: string[];
  instructions: string[];
  chefNote?: string;
  tags: string[];
}

export type CategoryType = 'All' | 'Breakfast' | 'Lunch' | 'Dinner' | 'Desserts' | 'Healthy' | 'Vegetarian' | string;

export interface StatItem {
  id?: string;
  number?: string;
  value?: string;
  label: string;
  icon?: string;
  iconName?: string;
  visible?: boolean;
  order?: number;
}

export interface NavLinkItem {
  id: string;
  label: string;
  targetId: string;
  visible?: boolean;
  order?: number;
}

export interface CategoryTileItem {
  id: string;
  categoryId: string;
  name: string;
  count: string;
  icon: string;
  visible?: boolean;
  order?: number;
}

export interface AboutFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  visible?: boolean;
  order?: number;
}

export interface AboutStatItem {
  id: string;
  value: string;
  label: string;
  visible?: boolean;
  order?: number;
}

export interface FooterLinkItem {
  id: string;
  label: string;
  url: string;
  visible?: boolean;
  order?: number;
}

export interface FooterSocialItem {
  id: string;
  platform: string;
  url: string;
  visible?: boolean;
  order?: number;
}

