import React from "react";
import "./CategoriesRecipesScreen.scss";
import * as data from "../../assets/recipes.json";

const CategoriesRecipesScreen: React.FC = () => {
  return (
    <div className="categories__recipes__screen">
      <header className="categories__header">
        <div className="categories__header__image" />
        <div className="categories__header__button__back" />
        <h1 className="categories__header__h1">Appetizers</h1>
        <span>
          {data.recipes.filter((item) => item.category === "appetizers").length}{" "}
          Recipes
        </span>
        <ul>
          <li>Popular</li>
          <li>Recent</li>
          <li>Veg</li>
          <li>Quick</li>
          <div />
        </ul>
      </header>
      <main />
    </div>
  );
};
export default CategoriesRecipesScreen;
