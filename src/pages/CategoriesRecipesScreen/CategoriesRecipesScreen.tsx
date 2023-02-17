import React from "react";
import recipes from "../../assets/recipes.json";
import CardCategory from "../../components/CardCategory/CardRecipe/CardCategory";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./CategoriesRecipesScreen.scss";

const CategoriesRecipesScreen: React.FC = () => {
  const sortingList = ["Popular", "Recent", "Veg", "Quick"];
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
