import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useParams, Link } from "react-router-dom";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import breakfastImg from "../../assets/png/breakfast-category.png";
import appetizersImg from "../../assets/png/appetizers-category.png";
import pastaImg from "../../assets/png/pasta-category.png";
import favImg from "../../assets/png/fav-category.png";
import "./CategoriesRecipesScreen.scss";
import { RecipeResponse } from "../../api/api.interface";
import recipesController from "../../api/recipes.controller";
import profileController from "../../api/profile.controller";

const CategoriesRecipesScreen: React.FC = () => {
  const { t } = useTranslation();
  const categories = {
    breakfast: {
      title: "Breakfast",
      name: t("main_breakfast"),
      image: breakfastImg,
      color: "rgba(234, 167, 15, 0.5)",
    },
    appetizers: {
      title: "Appetizers",
      name: t("recipes_appetizers"),
      image: appetizersImg,
      color: "rgba(85, 156, 79, 0.5)",
    },
    dinner: {
      title: "Dinner",
      name: t("main_dinner"),
      image: pastaImg,
      color: "rgba(218, 38, 2, 0.5)",
    },
    favorites: {
      title: "Favorites",
      name: t("recipes_favourites"),
      image: favImg,
      color: "rgba(2, 50, 218, 0.5)",
    },
  };

  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);

  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({
  //   favourite: "false",
  //   vegetarian: "false",
  //   time: "false",
  //   kcal: "false",
  // });

  const getRcipes = async () => {
    const result = await recipesController.getAllRecipes();
    if (result) {
      setRecipes(result);
      console.log(recipes);
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

  const sortAndFilter = (
    veg: string | null,
    fav: string | null,
    time: string | null,
    kcal: string | null,
    data: RecipeResponse[],
  ) => {
    const queryFavourite = searchParams.get("favourite");
    const queryVegetarian = searchParams.get("vegetarian");
    const queryTime = searchParams.get("time");
    const queryKcal = searchParams.get("kcal");

    console.log(queryFavourite, queryVegetarian, queryTime, queryKcal);

    let categoryData = data.filter((item) =>
      item.category.includes("appetizers"),
    );
    if (queryFavourite === "true") {
      categoryData = categoryData.filter((item) => item.favorite);
    }
    if (queryVegetarian === "true") {
      categoryData = categoryData.filter((item) => item.vegetarian);
    }
    if (queryKcal === "true") {
      categoryData = categoryData.sort(
        (a, b) => Number(a.calories) - Number(b.calories),
      );
    }
    if (queryTime === "true") {
      categoryData = categoryData.sort(
        (a, b) => Number(a.time) - Number(b.time),
      );
    }
    setRecipes(categoryData);
    console.log(recipes.length);
  };

  useEffect(() => {
    getRcipes();
    getFavourites();
  }, []);

  useEffect(() => {
    sortAndFilter(
      searchParams.get("vegetarian"),
      searchParams.get("favourite"),
      searchParams.get("time"),
      searchParams.get("kcal"),
      recipes,
    );
  }, [
    searchParams.get("vegetarian"),
    searchParams.get("favourite"),
    searchParams.get("time"),
    searchParams.get("kcal"),
    // recipes,
  ]);

  // const sortingList = ["Popular", "Recent", "Veg", "Quick"];

  return (
    <div className="categories__recipes__screen">
      <div className="container">
        <header
          className="categories__header"
          style={{
            background: `${
              categories[category as keyof typeof categories].color
            }`,
          }}
        >
          <div
            className="categories__header__image"
            style={{
              backgroundImage: `url(${
                categories[category as keyof typeof categories].image
              })`,
            }}
          />
          <BackButton to="/recipes" />
          <div className="categories__header__nav">
            <h1 className="categories__header__h1">
              {categories[category as keyof typeof categories].name}
            </h1>
            <span className="categories__header__span">
              {categories[category as keyof typeof categories].title !==
                "Favorites" &&
                recipes.filter((item) =>
                  item.category.includes(category as string),
                ).length}{" "}
              {categories[category as keyof typeof categories].title ===
                "Favorites" &&
                recipes.filter((item) => favourites.includes(item.id))
                  .length}{" "}
              {t("recipes_resipes")}
            </span>
            <ul className="categories__header__ul">
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    setSearchParams({
                      vegetarian: "true",
                    });
                    sortAndFilter(
                      searchParams.get("vegetarian"),
                      searchParams.get("favourite"),
                      searchParams.get("time"),
                      searchParams.get("kcal"),
                      recipes,
                    );
                  }}
                >
                  {t("categories_veg")}
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    setSearchParams({ favourite: "true" });
                    sortAndFilter(
                      searchParams.get("vegetarian"),
                      searchParams.get("favourite"),
                      searchParams.get("time"),
                      searchParams.get("kcal"),
                      recipes,
                    );
                  }}
                >
                  {t("recipes_favourites")}
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    setSearchParams({ time: "true" });
                    sortAndFilter(
                      searchParams.get("vegetarian"),
                      searchParams.get("favourite"),
                      searchParams.get("time"),
                      searchParams.get("kcal"),
                      recipes,
                    );
                  }}
                >
                  {t("categories_quick")}
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    setSearchParams({ kcal: "true" });
                    console.log(
                      searchParams.get("vegetarian"),
                      searchParams.get("favourite"),
                      searchParams.get("time"),
                      searchParams.get("kcal"),
                    );
                    sortAndFilter(
                      searchParams.get("vegetarian"),
                      searchParams.get("favourite"),
                      searchParams.get("time"),
                      searchParams.get("kcal"),
                      recipes,
                    );
                  }}
                >
                  {t("categories_calories")}
                </button>
              </li>
            </ul>
          </div>
        </header>
        <div className="container categories__main">
          {categories[category as keyof typeof categories].title !== "Favorites"
            ? recipes
                .filter((item) => item.category.includes(category as string))
                .map((item) => (
                  <Link
                    to={`/recipe/${item.id}`}
                    className="card__category"
                    key={item.id}
                  >
                    <CardCategory data={item} key={item.id} />
                  </Link>
                ))
            : recipes
                .filter((item) => favourites.includes(item.id))
                .map((item) => (
                  <Link
                    to={`/recipe/${item.id}`}
                    className="card__category"
                    key={item.id}
                  >
                    <CardCategory data={item} key={item.id} />
                  </Link>
                ))}
          <div
            className="no-found"
            style={{
              display: `${
                document.querySelectorAll(".card__category").length > 0
                  ? "none"
                  : "block"
              }`,
            }}
          >
            {t("categories_no_found")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesRecipesScreen;
