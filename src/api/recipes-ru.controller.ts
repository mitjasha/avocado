import { get, post, put, del } from "./api";
import { Recipe, RecipeResponse, RecipeRequest } from "./api.interface";

const recipesRUController = {
  addRecipe: (recipe: Recipe) =>
    post<RecipeResponse>("/recipes-ru", JSON.stringify(recipe)),
  delRecipe: (recipe: RecipeRequest) => del(`/recipes-ru/${recipe.id}`),
  getAllRecipes: () => get<RecipeResponse[]>("/recipes-ru"),
  getRecipeById: (recipeID: string) =>
    get<RecipeResponse>(`/recipes-ru/${recipeID}`),
  updateRecipe: (recipe: RecipeRequest) =>
    put(`/recipes-ru/${recipe.id}`, JSON.stringify(recipe)),
};

export default recipesRUController;
