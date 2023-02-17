import React from "react";
import recipes from "../../assets/recipes.json";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import "./RecipesScreen.scss";

const RecipesScreen: React.FC = () => {
  return (
    <div className="recipes__screen">
      <div className="container">
        <div className="main-header__container">
          <span>Categories</span>
          <span className="main-header__container__view">View All</span>
        </div>
        <div className="categories-container">
          <div className="categories-container__scroll">
            <div className="category category__breakfast">
              <h3 className="category__h3">Breakfast</h3>
              <span className="category__span">
                {
                  recipes.recipes.filter(
                    (item) => item.category === "breakfast",
                  ).length
                }{" "}
                Recipes
              </span>
            </div>
            <div className="category category__appetizers">
              <h3 className="category__h3">Appetizers</h3>
              <span className="category__span">
                {
                  recipes.recipes.filter(
                    (item) => item.category === "appetizers",
                  ).length
                }{" "}
                Recipes
              </span>
            </div>
            <div className="category category__pasta">
              <h3 className="category__h3">Pasta</h3>
              <span className="category__span">
                {
                  recipes.recipes.filter((item) => item.category === "dinner")
                    .length
                }{" "}
                Recipes
              </span>
            </div>
            <div className="category category__favourites">
              <h3 className="category__h3">Favourites</h3>
              <span className="category__span">0 Recipes</span>
            </div>
          </div>
        </div>
        <h1 className="recipes__screen__h1">What is in your kitchen?</h1>
        <h3 className="recipes__screen__h3">Enter some ingredient</h3>
        <div className="search__container">
          <RegInput
            type="text"
            placeholder="Type your ingredient"
            className="search__container__input"
          />
          <div className="search__container__icon" />
        </div>
        <div className="recipes__container">
          {recipes.recipes.map((item) => (
            <CardRecipe data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipesScreen;
