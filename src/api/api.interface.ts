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

export interface UserProfileCreate {
  firstName: string;
  lastName: string;
  gender: "MALE";
  birth: "2021-09-10";
  weight: string;
  height: number;
  goal: "Lose weight";
  targetWeight: string;
  photo: string;
}

export interface UserProfileResponse {
  ffirstName: string;
  lastName: string;
  gender: "MALE";
  birth: "2021-09-10";
  weight: string;
  height: number;
  goal: "Lose weight";
  targetWeight: string;
  photo: "";
  user: {
    id: "c01f6231-c510-4952-981e-bccc0e05eb94";
    username: "mitjasha";
  };
  id: "367646dd-0b02-4787-bf32-335ad602baa8";
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
  time: 90;
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
