import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import breakfastImg from "../../assets/png/breakfast-category.png";
import appetizersImg from "../../assets/png/appetizers-category.png";
import pastaImg from "../../assets/png/pasta-category.png";
import favImg from "../../assets/png/fav-category.png";
import "./CategoriesRecipesScreen.scss";

const CategoriesRecipesScreen: React.FC = () => {
  const sortingList = ["Popular", "Recent", "Veg", "Quick"];
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
  // const foundRecipes = document.querySelectorAll(".card__category");

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
                recipes.recipes.filter((item) => item.category === category)
                  .length
              }{" "}
              Recipes
            </span>
            <ul className="categories__header__ul">
              {sortingList.map((item) => {
                return (
                  <li className="categories__header__li" key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
        <main>
          <div className="container categories__main">
            {recipes.recipes
              .filter((item) => item.category === category)
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
