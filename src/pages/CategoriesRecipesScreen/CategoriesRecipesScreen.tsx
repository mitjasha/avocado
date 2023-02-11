import React from "react";
import "./CategoriesRecipesScreen.scss";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";

const CategoriesRecipesScreen: React.FC = () => {
  return (
    <div className="categories__recipes__screen">
      <header className="categories__header">
        <div className="categories__header__image" />
        <div className="categories__header__button__back" />
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
            <li className="categories__header__li">Popular</li>
            <li className="categories__header__li">Recent</li>
            <li className="categories__header__li">Veg</li>
            <li className="categories__header__li">Quick</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="container categories__main">
          {recipes.recipes
            .filter((item) => item.category === "appetizers")
            .map((item) => (
              <CardCategory data={item} />
            ))}
        </div>
      </main>
    </div>
  );
};
export default CategoriesRecipesScreen;
