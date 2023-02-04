import React from "react";
import "./CategoriesRecipesScreen.scss";
import * as data from "../../assets/recipes.json";

const CategoriesRecipesScreen: React.FC = () => {
  return (
    <div className="categories__recipes__screen">
      <header>
        <div />
        <img src="svg/back-arrow.svg" alt="" />
        <h1>Appetizers</h1>
        <span>
          {data.recipes.filter((item) => item.category === "appetizers").length}{" "}
          Recipes
        </span>
        <ul>
          <li>Popular</li>
          <li>Recent</li>
          <li>Veg</li>
          <li>Quick</li>
          <img src="svg/menu.svg" alt="" />
        </ul>
      </header>
      <main />
    </div>
  );
};
export default CategoriesRecipesScreen;
