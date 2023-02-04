import React from "react";
import "./RecipesScreen.scss";
import * as data from "../../assets/recipes.json";

const RecipesScreen: React.FC = () => {
  return (
    <div className="recipes__screen">
      <div>
        <span>Categories</span>
        <span>View All</span>
      </div>
      <div className="categories__container">
        <div>
          <h3>Breakfast</h3>
          <span>
            {
              data.recipes.filter((item) => item.category === "breakfast")
                .length
            }{" "}
            Recipes
          </span>
        </div>
        <div>
          <h3>Appetizers</h3>
          <span>
            {
              data.recipes.filter((item) => item.category === "appetizers")
                .length
            }{" "}
            Recipes
          </span>
        </div>
        <div>
          <h3>Pasta</h3>
          <span>
            {data.recipes.filter((item) => item.category === "dinner").length}{" "}
            Recipes
          </span>
        </div>
      </div>
      <h1 className="recipes__screen__h1">What is in your kitchen?</h1>
      <h3 className="recipes__screen__h3">Enter some ingredient</h3>
      <div>
        <input type="text" placeholder="Type your ingredient" />
        <div />
      </div>
      <div />
    </div>
  );
};

export default RecipesScreen;
