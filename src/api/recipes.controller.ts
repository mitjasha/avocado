import { get, post, put, del } from "./api";
import { Recipe, RecipeResponse, RecipeRequest } from "./api.interface";

const recipesController = {
  addRecipe: (recipe: Recipe) =>
    post<RecipeResponse>("/recipes", JSON.stringify(recipe)),
  delRecipe: (recipe: RecipeRequest) => del(`/recipes/${recipe.id}`),
  getAllRecipes: () => get<RecipeResponse[]>("/recipes"),
  getRecipeById: (recipeID: string) =>
    get<RecipeResponse>(`/recipes/${recipeID}`),
  updateRecipe: (recipe: RecipeRequest) =>
    put(`/recipes/${recipe.id}`, JSON.stringify(recipe)),
};

export default recipesController;
