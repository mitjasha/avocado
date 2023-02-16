export interface User {
  usernames: string;
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
  ingredients: object[];
  steps: string | (() => string);
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
  startTime: string;
  weight: number;
  description: string;
}

export interface EventMealResponse extends Event {
  id: string;
}

export interface EventMealRequest extends Event {
  id: string;
}

export interface EventActivity {
  startTime: Date;
  endTime: Date;
  description: string;
}

export interface EventActivityResponse extends Event {
  id: string;
}

export interface EventActivityRequest extends Event {
  id: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  gender: EGender;
  birth: string;
  weight: string;
  height: number;
  goal: EGoal;
  targetWeight: string;
  photo: string;
}

export interface ProfileRequest extends Profile {
  id: string;
}

export interface ProfileResponse extends Profile {
  id: string;
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
