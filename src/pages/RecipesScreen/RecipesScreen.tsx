import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RecipeResponse } from "../../api/api.interface";
import recipesController from "../../api/recipes.controller";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import "./RecipesScreen.scss";

const RecipesScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeResponse[]>();

  const getRcipes = async () => {
    const result = await recipesController.getAllRecipes();
    if (result) {
      setRecipes(result);
      console.log(recipes);
    }
  };

  useEffect(() => {
    getRcipes();
  }, []);

  const { t } = useTranslation();

  return (
    <div className="recipes__screen">
      <div className="container">
        <div className="main-header__container">
          <span>{t("recipes_categories")}</span>
          {/* <span className="main-header__container__view">View All</span> */}
        </div>
        <div className="categories-container">
          <div className="categories-container__scroll">
            <Link
              to="/recipes/breakfast"
              className="category category__breakfast"
            >
              <h3 className="category__h3">{t("main_breakfast")}</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) => item.category.includes("breakfast"))
                    .length
                }{" "}
                {t("recipes_resipes")}
              </span>
            </Link>
            <Link
              to="/recipes/appetizers"
              className="category category__appetizers"
            >
              <h3 className="category__h3">{t("recipes_appetizers")}</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) =>
                    item.category.includes("appetizers"),
                  ).length
                }{" "}
                {t("recipes_resipes")}
              </span>
            </Link>
            <Link to="/recipes/dinner" className="category category__pasta">
              <h3 className="category__h3">{t("main_dinner")}</h3>
              <span className="category__span">
                {
                  recipes?.filter((item) => item.category.includes("dinner"))
                    .length
                }{" "}
                {t("recipes_resipes")}
              </span>
            </Link>
            <Link
              to="/recipes/favorites"
              className="category category__favourites"
            >
              <h3 className="category__h3">{t("recipes_favourites")}</h3>
              <span className="category__span">0 {t("recipes_resipes")}</span>
            </Link>
          </div>
        </div>
        <h1 className="recipes__screen__h1">{t("recipes_header_1")}</h1>
        <h3 className="recipes__screen__h3">{t("recipes_header_2")}</h3>
        <div className="search__container">
          <RegInput
            type="text"
            placeholder={String(t("recipes_placeholder"))}
            className="search__container__input"
          />
          <div className="search__container__icon" />
        </div>
        <div className="recipes__container">
          {recipes?.map((item) => (
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
