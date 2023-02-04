import React from "react";
import "./RecipesScreen.scss";
import * as data from "../../assets/recipes.json";
import CardRecipe from "../../components/CardRecipe/CardRecipe";

const RecipesScreen: React.FC = () => {
  return (
    <div className="recipes__screen">
      <div className="main__header__container">
        <span>Categories</span>
        <span className="main__header__container__view">View All</span>
      </div>
      <div className="categories__container">
        <div className="category category__breakfast">
          <h3 className="category__h3">Breakfast</h3>
          <span className="category__span">
            {
              data.recipes.filter((item) => item.category === "breakfast")
                .length
            }{" "}
            Recipes
          </span>
        </div>
        <div className="category category__appetizers">
          <h3 className="category__h3">Appetizers</h3>
          <span className="category__span">
            {
              data.recipes.filter((item) => item.category === "appetizers")
                .length
            }{" "}
            Recipes
          </span>
        </div>
        <div className="category category__pasta">
          <h3 className="category__h3">Pasta</h3>
          <span className="category__span">
            {data.recipes.filter((item) => item.category === "dinner").length}{" "}
            Recipes
          </span>
        </div>
      </div>
      <h1 className="recipes__screen__h1">What is in your kitchen?</h1>
      <h3 className="recipes__screen__h3">Enter some ingredient</h3>
      <div className="search__container">
        <input
          className="search__container__input"
          type="text"
          placeholder="Type your ingredient"
        />
        <div className="search__container__icon" />
      </div>
      <div className="recipes__container">
        {data.recipes.map((item) => (
          <CardRecipe data={item} />
        ))}
      </div>
    </div>
  );
};
export default RecipesScreen;
