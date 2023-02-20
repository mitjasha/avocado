import React, { useEffect, useState } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import breakfastImg from "../../assets/png/breakfast-category.png";
import appetizersImg from "../../assets/png/appetizers-category.png";
import pastaImg from "../../assets/png/pasta-category.png";
import favImg from "../../assets/png/fav-category.png";
import "./CategoriesRecipesScreen.scss";
import { RecipeResponse } from "../../api/api.interface";
import recipesController from "../../api/recipes.controller";

const CategoriesRecipesScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

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

  const categories = {
    breakfast: {
      title: "Breakfast",
      image: breakfastImg,
      color: "rgba(234, 167, 15, 0.5)",
    },
    appetizers: {
      title: "Appetizers",
      image: appetizersImg,
      color: "rgba(85, 156, 79, 0.5)",
    },
    dinner: {
      title: "Dinner",
      image: pastaImg,
      color: "rgba(218, 38, 2, 0.5)",
    },
    favorites: {
      title: "Favorites",
      image: favImg,
      color: "rgba(2, 50, 218, 0.5)",
    },
  };
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({
  //   favourite: "false",
  //   vegetarian: "false",
  //   time: "false",
  //   kcal: "false",
  // });

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

    const newContainer = (
      <div className="container categories__main">
        {categoryData.map((item) => (
          <CardCategory data={item} />
        ))}
      </div>
    );
    ReactDOM.render(newContainer, document.querySelector(".main"));
  };

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
    recipes,
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
              {categories[category as keyof typeof categories].title}
            </h1>
            <span className="categories__header__span">
              {
                recipes.filter((item) =>
                  item.category.includes(category as string),
                ).length
              }{" "}
              Recipes
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
                  Veg
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
                  Low-fat
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
                  Quick
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
                  Favourites
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="main">
          <div className="container categories__main">
            {recipes
              .filter((item) => item.category.includes(category as string))
              .map((item) => (
                <Link
                  to={`/recipe/${item.id}`}
                  className="card__category"
                  key={item.id}
                >
                  <CardCategory data={item} key={`${item.id}`} />
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
              No recipes found
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CategoriesRecipesScreen;
