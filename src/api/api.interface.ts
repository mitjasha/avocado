export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  user: {
    id: string;
    username: string;
    token: string;
  };
}

export interface UserRegistrationResponse {
  user: {
    username: string;
    password: string;
    id: string;
    token: string;
  };
}

export interface Recipe {
  name: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  author: string;
  ingredients: {
    name: string;
    quantity: string;
  }[];
  steps: [];
  time: number;
  category: string[];
  kitchen: string;
  favorite: boolean;
  vegetarian: boolean;
  imageURL: string;
}

export interface RecipeResponse extends Recipe {
  id: string;
}

export interface RecipeRequest extends Recipe {
  id: string;
}

export interface Product {
  name: string;
  calories_100g: number;
  proteins_100g: number;
  carbs_100g: number;
  fat_100g: number;
  category: string;
}

export interface ProductRequest extends Product {
  id: string;
}

export interface ProductResponse extends Product {
  id: string;
}

export interface Activity {
  name: string;
  calories_per_min: number;
  image: string;
  nameRU: string;
}

export interface ActivityRequest extends Activity {
  id: string;
}

export interface ActivityResponse extends Activity {
  id: string;
}

export interface Event {
  name: string;
  startTime: string;
  description: string;
}

export interface EventResponse extends Event {
  id: string;
}

export interface EventRequest extends Event {
  id: string;
}

export interface EventMeal {
  name: string;
  startTime: string;
  weight: number;
  description: string;
}

export interface EventMealResponse extends EventMeal {
  id: string;
  user: {
    id: string;
    username: string;
  };
  product: {
    id: string;
    name: string;
    calories_100g: number;
    proteins_100g: number;
    carbs_100g: number;
    fat_100g: number;
  };
}

export interface EventMealRequest extends EventMeal {
  id: string;
}

export interface EventActivity {
  startTime: string;
  endTime: string;
  description: string;
}

export interface EventActivityResponse extends EventActivity {
  id: string;
  user: {
    id: string;
    username: string;
  };
  activity: {
    id: string;
    name: string;
    calories_per_min: number;
  };
}

export interface EventActivityRequest extends EventActivity {
  id: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  gender: EGender;
  birth: string;
  weight: number;
  height: number;
  goal: EGoal;
  targetWeight: number;
  photo: string;
  favorites: string[];
  recentRecipes: string[];
}

export interface ProfileRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  gender: string;
  birth: string;
  weight?: number;
  height?: number;
  goal: string;
  targetWeight?: number;
  photo?: string;
  favorites?: string[];
  recentRecipes?: string[];
}

export interface ProfileResponse {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  birth: string;
  weight: number;
  height: number;
  goal: string;
  targetWeight: number;
  photo: string;
  favorites: string[];
  recentRecipes: string[];
  user: {
    id: string;
    username: string;
  };
}

export enum EGoal {
  LOSE = "Lose weight",
  MAINTAIN = "Maintain weight",
  GAIN = "Gain weight",
}

export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  NAN = "NaN",
}

export enum EProductCategory {
  dairy = "https://ie.wampi.ru/2023/02/08/milk.png",
  pastries = "https://ie.wampi.ru/2023/02/08/bread.png",
  oils = "https://ie.wampi.ru/2023/02/08/fats.png",
  sauces = "https://ic.wampi.ru/2023/02/16/sauce.png",
  grains = "https://im.wampi.ru/2023/02/08/porrige4c87ca52a5960c1a.png",
  vegetables = "https://im.wampi.ru/2023/02/08/vegetables.png",
  fruitsBerries = "https://im.wampi.ru/2023/02/08/fruit.png",
  driedFruits = "https://im.wampi.ru/2023/02/08/driedFruits.png",
  beans = "https://ie.wampi.ru/2023/02/08/peae773e1454aadb289.png",
  mushrooms = "https://im.wampi.ru/2023/02/08/mushrooms.png",
  meat = "https://ic.wampi.ru/2023/02/08/meat.png",
  sausages = "https://ic.wampi.ru/2023/02/08/sausage22d6a6ad1152d09c.png",
  smokedMeat = "https://ie.wampi.ru/2023/02/08/smokedMeatsc8fdaf57fba243fa.png",
  fishSeafood = "https://ie.wampi.ru/2023/02/08/fish.png",
  eggs = "https://ic.wampi.ru/2023/02/08/egg.png",
  nuts = "https://ic.wampi.ru/2023/02/08/nuts.png",
  sweets = "https://im.wampi.ru/2023/02/08/sweetse245d476ff1ac324.png",
  pasta = "https://ic.wampi.ru/2023/02/13/pasta.png",
  soup = "https://ic.wampi.ru/2023/02/13/soup.png",
  salad = "https://ic.wampi.ru/2023/02/13/salade.png",
}
