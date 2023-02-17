import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactDOM from "react-dom";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./CategoriesRecipesScreen.scss";

const CategoriesRecipesScreen: React.FC = () => {
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
    data: {
      id: number;
      name: string;
      category: string;
      calories: string;
      proteins: string;
      carbs: string;
      fats: string;
      author: string;
      kitchen: string;
      favourites: boolean;
      vegetarian: boolean;
      ingredients: { quantity: string; name: string; type: string }[];
      steps: string[];
      time: number;
      imageURL: string;
    }[],
  ) => {
    const queryFavourite = searchParams.get("favourite");
    const queryVegetarian = searchParams.get("vegetarian");
    const queryTime = searchParams.get("time");
    const queryKcal = searchParams.get("kcal");

    console.log(queryFavourite, queryVegetarian, queryTime, queryKcal);

    let categoryData = data.filter((item) => item.category === "appetizers");
    if (queryFavourite === "true") {
      categoryData = categoryData.filter((item) => item.favourites);
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
      recipes.recipes,
    );
  }, [
    searchParams.get("vegetarian"),
    searchParams.get("favourite"),
    searchParams.get("time"),
    searchParams.get("kcal"),
    recipes.recipes,
  ]);

  return (
    <div className="categories__recipes__screen">
      <div className="container">
        <header className="categories__header">
          <div className="categories__header__image" />
          <BackButton />
          <div className="categories__header__nav">
            <h1 className="categories__header__h1">Appetizers</h1>
            <span className="categories__header__span">
              {
                recipes.recipes.filter((item) => item.category === "appetizers")
                  .length
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
                      recipes.recipes,
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
                      recipes.recipes,
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
                      recipes.recipes,
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
                      recipes.recipes,
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
            {recipes.recipes
              .filter((item) => item.category === "appetizers")
              .map((item) => (
                <CardCategory data={item} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default CategoriesRecipesScreen;
