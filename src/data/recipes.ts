import { Recipe } from '../types';
import heroDishImg from '../assets/images/savorly_hero_dish_1785418456470.jpg';
import tuscanChickenImg from '../assets/images/tuscan_chicken_1785418467629.jpg';
import salmonImg from '../assets/images/lemon_herb_salmon_1785418479888.jpg';

export const SAMPLE_RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Creamy Garlic Tuscan Chicken',
    description: 'Tender tender chicken breasts seared to golden perfection, simmered in a luscious garlic cream sauce with sun-dried tomatoes and fresh baby spinach.',
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
    isRecipeOfDay: true,
    isPopular: true,
    ingredients: [
      '2 large boneless chicken breasts, halved horizontally',
      '2 tbsp olive oil & 1 tbsp butter',
      '4 cloves garlic, minced',
      '1 cup heavy cream or full-fat coconut milk',
      '1/2 cup chicken broth or bone broth',
      '1/2 cup sun-dried tomatoes, drained and sliced',
      '2 cups fresh baby spinach leaves',
      '1/2 cup freshly grated Parmesan cheese',
      '1 tsp Italian seasoning, salt, and freshly cracked black pepper'
    ],
    instructions: [
      'Season chicken breasts evenly with salt, pepper, and Italian seasoning on both sides.',
      'Heat oil and butter in a large heavy skillet over medium-high heat. Sear chicken 5-6 mins per side until golden brown. Remove and set aside.',
      'In the same skillet, add minced garlic and saute for 1 minute until fragrant.',
      'Pour in chicken broth, heavy cream, and sun-dried tomatoes. Bring to a gentle simmer for 3 minutes.',
      'Stir in grated Parmesan and fresh baby spinach until spinach is wilted and sauce is silky.',
      'Return chicken breasts to the pan, spooning sauce over top. Simmer 2 more minutes and serve warm with crusty bread or pasta.'
    ],
    chefNote: 'For extra depth of flavor, use the reserved oil from the sun-dried tomato jar when searing the chicken.',
    tags: ['30 Mins', 'Keto Friendly', 'Creamy', 'Italian']
  },
  {
    id: 'rec-2',
    title: 'One-Pan Lemon Herb Salmon',
    description: 'Flaky salmon fillets baked on a single sheet pan with lemon, fresh rosemary, garlic, and crisp asparagus spears.',
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
    isTrending: true,
    isPopular: true,
    ingredients: [
      '2 fresh salmon fillets (skin-on)',
      '1 bunch fresh asparagus, trimmed',
      '2 tbsp extra virgin olive oil',
      '1 fresh lemon, thinly sliced',
      '3 cloves garlic, crushed',
      '1 tbsp fresh rosemary & thyme, finely chopped',
      'Sea salt and freshly ground black pepper to taste'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C) and line a rimmed baking sheet with parchment paper.',
      'Arrange asparagus spears on one side of sheet pan. Toss with 1 tbsp olive oil, minced garlic, salt, and pepper.',
      'Place salmon fillets skin-side down on the other side. Drizzle with remaining olive oil, sprinkle with herbs, salt, and top with lemon slices.',
      'Roast in the oven for 12–15 minutes until salmon is flaky and asparagus is tender-crisp.',
      'Garnish with extra fresh parsley and squeeze fresh lemon juice right before serving.'
    ],
    chefNote: 'Wild-caught salmon works best for rich Omega-3 content and crisp skin texture.',
    tags: ['One-Pan', 'Low Carb', 'High Protein', 'Seafood']
  },
  {
    id: 'rec-3',
    title: 'Classic Chicken Alfredo Pasta',
    description: 'Silky fettuccine tossed in a homemade Parmigiano-Reggiano sauce topped with grilled herb chicken slices.',
    category: 'Lunch',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 620,
    difficulty: 'Medium',
    rating: 4.8,
    reviewsCount: 512,
    views: '32.1K',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80',
    isPopular: true,
    ingredients: [
      '12 oz fettuccine pasta',
      '2 grilled chicken breasts, sliced',
      '1/2 cup unsalted butter',
      '1 cup heavy cream',
      '1.5 cups freshly grated Parmesan',
      '2 cloves garlic, minced',
      'Fresh parsley & cracked black pepper'
    ],
    instructions: [
      'Boil fettuccine in salted water until al dente. Reserve 1/2 cup pasta water.',
      'Melt butter in a skillet, add garlic and cook 1 minute. Whisk in heavy cream and simmer 2 minutes.',
      'Reduce heat to low and gradually stir in Parmesan cheese until completely smooth.',
      'Toss warm pasta into the sauce, adding pasta water as needed for silky coating. Top with sliced grilled chicken.'
    ],
    chefNote: 'Always grate Parmesan from a fresh block to avoid anti-caking clumping.',
    tags: ['Pasta', 'Comfort Food', 'Chicken', 'Italian']
  },
  {
    id: 'rec-4',
    title: 'Decadent Molten Chocolate Cake',
    description: 'Rich warm dark chocolate cake with a velvety molten lava center, served with fresh raspberries and vanilla bean ice cream.',
    category: 'Desserts',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 510,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 418,
    views: '18.9K',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    isPopular: true,
    ingredients: [
      '4 oz high-quality dark chocolate (70%)',
      '1/2 cup unsalted butter',
      '2 whole eggs + 2 egg yolks',
      '1/4 cup granulated sugar',
      '2 tbsp all-purpose flour',
      'Pinch of sea salt & powdered sugar for dusting'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Butter two ramekins and dust with cocoa powder.',
      'Melt dark chocolate and butter together in a heatproof bowl set over simmering water until smooth.',
      'In a separate bowl, whisk eggs, egg yolks, and sugar until pale and fluffy. Fold into chocolate mixture.',
      'Lightly fold in flour and salt. Divide batter into ramekins and bake 12 minutes.',
      'Let sit 1 minute, invert onto dessert plates, dust with powdered sugar and serve immediately.'
    ],
    chefNote: 'Bake time is key — center should still be soft and jiggly when removed from oven.',
    tags: ['Chocolate', 'Dessert', 'Date Night', 'Baking']
  },
  {
    id: 'rec-5',
    title: 'Tropical Green Power Smoothie',
    description: 'A refreshing energy boost blend of fresh spinach, frozen mango, pineapple, coconut water, and chia seeds.',
    category: 'Breakfast',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 190,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 175,
    views: '15.3K',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=80',
    isPopular: true,
    ingredients: [
      '2 cups fresh organic spinach',
      '1 cup frozen mango chunks',
      '1/2 cup frozen pineapple pieces',
      '1 cup chilled coconut water',
      '1 tbsp chia seeds',
      '1/2 cup Greek yogurt or almond yogurt'
    ],
    instructions: [
      'Add chilled coconut water and spinach into high-speed blender first.',
      'Blend on high for 30 seconds until completely liquid and vibrant green.',
      'Add frozen mango, pineapple, Greek yogurt, and chia seeds.',
      'Blend until velvety smooth and creamy. Pour into chilled glasses and top with extra chia seeds.'
    ],
    chefNote: 'Blending greens with liquid first guarantees zero leafy specks in your smoothie!',
    tags: ['Smoothie', 'Detox', 'Vegan', 'Quick']
  },
  {
    id: 'rec-6',
    title: 'Avocado & Burrata Mediterranean Salad',
    description: 'Creamy artisan burrata cheese, ripe avocados, heirloom tomatoes, and crisp cucumbers tossed in lemon herb vinaigrette.',
    category: 'Vegetarian',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 3,
    calories: 310,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 210,
    views: '21.5K',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    isPopular: true,
    ingredients: [
      '1 ball fresh Burrata cheese',
      '2 ripe avocados, sliced',
      '2 cups mixed heirloom cherry tomatoes',
      '1 English cucumber, sliced',
      'Fresh basil leaves',
      '3 tbsp extra virgin olive oil',
      '1 tbsp aged balsamic glaze & sea salt flakes'
    ],
    instructions: [
      'Arrange sliced tomatoes, cucumber, and avocado slices across a serving platter.',
      'Tear burrata gently and place in the center of the platter.',
      'Scatter fresh basil leaves liberally over vegetables.',
      'Drizzle with extra virgin olive oil, balsamic glaze, and garnish with coarse sea salt flakes.'
    ],
    chefNote: 'Bring burrata to room temperature 20 minutes before serving for maximum creamy texture.',
    tags: ['Salad', 'Vegetarian', 'No-Cook', 'Fresh']
  },
  {
    id: 'rec-7',
    title: 'Gourmet Mediterranean Power Bowl',
    description: 'A vibrant bowl with fluffy quinoa, spiced chickpeas, roasted sweet potato, creamy tzatziki, and tahini drizzle.',
    category: 'Healthy',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 450,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 315,
    views: '29.7K',
    image: heroDishImg,
    ingredients: [
      '1 cup cooked quinoa',
      '1 cup crispy roasted chickpeas',
      '1 sweet potato, cubed and roasted',
      '1/2 cup diced cucumber and red onion',
      '1/4 cup tzatziki or hummus',
      '2 tbsp lemon tahini dressing'
    ],
    instructions: [
      'Divide warm quinoa between two wide serving bowls.',
      'Arrange sections of roasted sweet potatoes, crispy chickpeas, cucumbers, and red onion.',
      'Dollop tzatziki in center and drizzle generously with lemon tahini dressing.',
      'Garnish with toasted pumpkin seeds and fresh parsley.'
    ],
    chefNote: 'Meal prep secret: Roast sweet potatoes and chickpeas ahead of time for a 5-minute lunch assembly.',
    tags: ['Meal Prep', 'High Fiber', 'Vegan Option', 'Bowl']
  }
];

export const POPULAR_CHIPS = [
  'Chicken Alfredo',
  'Pasta',
  'Chocolate Cake',
  'Smoothies',
  'Salads'
];

export const STATS_DATA = [
  { number: '500+', label: 'Curated Recipes', icon: 'UtensilsCrossed' },
  { number: '80+', label: 'Recipe Categories', icon: 'Grid' },
  { number: '50K+', label: 'Monthly Visitors', icon: 'Users' },
  { number: '4.9★', label: 'Community Rating', icon: 'Star' }
];
