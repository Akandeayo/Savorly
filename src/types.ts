export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  rating: number;
  reviewsCount: number;
  views: string;
  image: string;
  isPopular?: boolean;
  isTrending?: boolean;
  isRecipeOfDay?: boolean;
  ingredients: string[];
  instructions: string[];
  chefNote?: string;
  tags: string[];
}

export type CategoryType = 'All' | 'Breakfast' | 'Lunch' | 'Dinner' | 'Desserts' | 'Healthy' | 'Vegetarian';

export interface StatItem {
  number: string;
  label: string;
  iconName: string;
}
