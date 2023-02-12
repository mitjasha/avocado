import React from "react";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./CategoriesRecipesScreen.scss";

const CategoriesRecipesScreen: React.FC = () => {
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
    </div>
  );
};
export default CategoriesRecipesScreen;
