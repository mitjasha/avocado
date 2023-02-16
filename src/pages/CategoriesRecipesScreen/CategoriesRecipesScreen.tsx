import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactDOM from "react-dom";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./CategoriesRecipesScreen.scss";

const CategoriesRecipesScreen: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const sortBy = searchParams.get("sortBy");

  const vegFilter = () => {
    if (searchParams.get("sortBy") === "kcal") {
      setSearchParams({ filter: "vegetarian", sortBy: "kcal" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.vegetarian === "true",
            )
            .sort(
              (item_1, item_2) =>
                Number(item_1.calories) - Number(item_2.calories),
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else if (searchParams.get("sortBy") === "time") {
      setSearchParams({ filter: "vegetarian", sortBy: "time" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.vegetarian === "true",
            )
            .sort((item_1, item_2) => Number(item_1.time) - Number(item_2.time))
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else {
      setSearchParams({ filter: "vegetarian" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.vegetarian === "true",
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    }
  };

  const favFilter = () => {
    if (searchParams.get("sortBy") === "kcal") {
      setSearchParams({ filter: "favourites", sortBy: "kcal" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.favourites === "true",
            )
            .sort(
              (item_1, item_2) =>
                Number(item_1.calories) - Number(item_2.calories),
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else if (searchParams.get("sortBy") === "time") {
      setSearchParams({ filter: "favourites", sortBy: "time" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.favourites === "true",
            )
            .sort((item_1, item_2) => Number(item_1.time) - Number(item_2.time))
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else {
      setSearchParams({ filter: "favourites" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.favourites === "true",
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    }
  };

  const kcalSort = () => {
    if (searchParams.get("filter") === "vegetarian") {
      setSearchParams({ filter: "vegetarian", sortBy: "kcal" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.vegetarian === "true",
            )
            .sort(
              (item_1, item_2) =>
                Number(item_1.calories) - Number(item_2.calories),
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else if (searchParams.get("filter") === "favourites") {
      setSearchParams({ filter: "favourites", sortBy: "kcal" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.favourites === "true",
            )
            .sort(
              (item_1, item_2) =>
                Number(item_1.calories) - Number(item_2.calories),
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else {
      setSearchParams({ sortBy: "kcal" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter((item) => item.category === "appetizers")
            .sort(
              (item1, item2) => Number(item1.calories) - Number(item2.calories),
            )
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    }
  };

  const timeSort = () => {
    if (searchParams.get("filter") === "vegetarian") {
      setSearchParams({ filter: "vegetarian", sortBy: "time" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.vegetarian === "true",
            )
            .sort((item_1, item_2) => Number(item_1.time) - Number(item_2.time))
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else if (searchParams.get("filter") === "favourites") {
      setSearchParams({ filter: "favourites", sortBy: "time" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter(
              (item) =>
                item.category === "appetizers" && item.favourites === "true",
            )
            .sort((item_1, item_2) => Number(item_1.time) - Number(item_2.time))
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    } else {
      setSearchParams({ sortBy: "time" });
      const newContainer = (
        <div className="container categories__main">
          {recipes.recipes
            .filter((item) => item.category === "appetizers")
            .sort((item1, item2) => Number(item1.time) - Number(item2.time))
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      );
      ReactDOM.render(newContainer, document.querySelector(".main"));
    }
  };

  useEffect(() => {
    if (searchParams.get("filter") === "favourites") {
      vegFilter();
    } else if (searchParams.get("filter") === "vegetarian") {
      favFilter();
    }
    if (searchParams.get("sortBy") === "kcal") {
      kcalSort();
    } else if (searchParams.get("sortBy") === "time") {
      timeSort();
    }
  }, [filter, sortBy]);

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
                    vegFilter();
                  }}
                >
                  Veg
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    kcalSort();
                  }}
                >
                  Low-fat
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    timeSort();
                  }}
                >
                  Quick
                </button>
              </li>
              <li className="categories__header__li">
                <button
                  type="button"
                  onClick={() => {
                    favFilter();
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
