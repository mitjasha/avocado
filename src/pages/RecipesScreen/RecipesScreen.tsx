import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RecipeResponse } from "../../api/api.interface";
import recipesController from "../../api/recipes.controller";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import "./RecipesScreen.scss";

const RecipesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useSearchParams("");
  const text = searchQuery.get("search");

  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [filtredRecipes, setFiltredRecipes] =
    useState<RecipeResponse[]>(recipes);

  const getRcipes = async () => {
    const result = await recipesController.getAllRecipes();
    if (result) {
      setRecipes(result);
      setFiltredRecipes(result);
    }
  };

  const textSearch = (currentText: string) => {
    const filtred = recipes.filter((item) =>
      item.name.toLowerCase().includes(currentText.toLowerCase()),
    );

    setFiltredRecipes(filtred);
  };

  useEffect(() => {
    getRcipes();
  }, []);

  useEffect(() => {
    if (text) {
      textSearch(text);
    }
  }, [text]);

  return (
    <div className="recipes__screen">
      <div className="container">
        <div className="main-header__container">
          <span>Categories</span>
          <span className="main-header__container__view">View All</span>
        </div>
        <div className="categories-container">
          <div className="categories-container__scroll">
            <Link
              to="/recipes/breakfast"
              className="category category__breakfast"
            >
              <h3 className="category__h3">Breakfast</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) => item.category.includes("breakfast"))
                    .length
                }{" "}
                Recipes
              </span>
            </Link>
            <Link
              to="/recipes/appetizers"
              className="category category__appetizers"
            >
              <h3 className="category__h3">Appetizers</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) =>
                    item.category.includes("appetizers"),
                  ).length
                }{" "}
                Recipes
              </span>
            </Link>
            <Link to="/recipes/dinner" className="category category__pasta">
              <h3 className="category__h3">Dinner</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) => item.category.includes("dinner"))
                    .length
                }{" "}
                Recipes
              </span>
            </Link>
            <Link
              to="/recipes/favorites"
              className="category category__favourites"
            >
              <h3 className="category__h3">Favourites</h3>
              <span className="category__span">0 Recipes</span>
            </Link>
          </div>
        </div>
        <h1 className="recipes__screen__h1">What is in your kitchen?</h1>
        <h3 className="recipes__screen__h3">Enter some ingredient</h3>
        <div className="search__container">
          <RegInput
            type="text"
            placeholder="Type your ingredient"
            className="search__container__input"
            onChange={(event) => {
              textSearch((event.target as HTMLInputElement).value);
              setSearchQuery({
                search: (event.target as HTMLInputElement).value,
              });
            }}
          />
          <div className="search__container__icon" />
        </div>
        <div className="recipes__container">
          {filtredRecipes?.map((item) => (
            <Link
              to={`/recipe/${item.id}`}
              className="recipe__card"
              key={item.id}
            >
              <CardRecipe data={item} key={item.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipesScreen;
