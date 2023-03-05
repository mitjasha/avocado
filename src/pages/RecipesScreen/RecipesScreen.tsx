import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { RecipeResponse } from "../../api/api.interface";
import profileController from "../../api/profile.controller";
import recipesRUController from "../../api/recipes-ru.controller";
import recipesController from "../../api/recipes.controller";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import ProductInput from "../../components/Inputs/ProductInput/ProductInput";
import "./RecipesScreen.scss";

const RecipesScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useSearchParams("");
  const text = searchQuery.get("search");
  const [filtredRecipes, setFiltredRecipes] =
    useState<RecipeResponse[]>(recipes);

  const { t } = useTranslation();

  const getRcipes = async () => {
    if (localStorage.getItem("language") === "en") {
      const result = await recipesController.getAllRecipes();
      if (result) {
        setRecipes(result);
        setFiltredRecipes(result);
      }
    } else {
      const result = await recipesRUController.getAllRecipes();
      if (result) {
        setRecipes(result);
        setFiltredRecipes(result);
      }
    }
  };

  const getFavourites = async () => {
    const profile = await profileController.getProfile();
    if (profile) {
      if (profile[0].favorites != null) {
        setFavourites(profile[0].favorites);
      } else setFavourites([]);
    }
  };

  const removeInputText = () => {
    const searchInput = document.querySelector(
      ".search__container__input",
    ) as HTMLInputElement;
    searchInput.value = "";
    setSearchQuery({
      search: "",
    });
  };

  const textSearch = (currentText: string) => {
    const filtred = recipes.filter((item) =>
      item.name.toLowerCase().includes(currentText.toLowerCase()),
    );

    setFiltredRecipes(filtred);
  };

  useEffect(() => {
    getRcipes();
    getFavourites();
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
              <span className="category__span">
                {favourites.length} {t("recipes_resipes")}
              </span>
            </Link>
          </div>
        </div>
        <h1 className="recipes__screen__h1">{t("recipes_header_1")}</h1>
        <h3 className="recipes__screen__h3">{t("recipes_header_2")}</h3>
        <div className="search__container">
          <ProductInput
            type="text"
            placeholder={String(t("recipes_placeholder"))}
            className="search__container__input"
            onChange={(event) => {
              textSearch((event.target as HTMLInputElement).value);
              setSearchQuery({
                search: (event.target as HTMLInputElement).value,
              });
            }}
          />
          <button
            type="button"
            aria-label="clear"
            className="event__screen__close__icon"
            onClick={() => removeInputText()}
          />
          <div className="search__container__icon" />
        </div>
        <div className="recipes__container">
          {!filtredRecipes.length && (
            <div className="no__found">
              <span className="no__found__text">
                {t("categories_no_found")}
              </span>
              <div className="no__found__image" />
            </div>
          )}
          {filtredRecipes?.map((item) => (
            <div className="recipe__card" key={item.id}>
              <CardRecipe data={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipesScreen;
