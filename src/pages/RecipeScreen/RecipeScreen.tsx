import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../../assets/recipes.json";
import "./RecipeScreen.scss";

const RecipeScreen: React.FC = () => {
  const { id } = useParams();
  const recipe = recipes.recipes[Number(id as keyof typeof recipes)];
  return (
    <div className="recipe__screen">
      <div className="container">
        <div
          className="recipe__image"
          style={{
            backgroundImage: `url(${recipe.imageURL})`,
          }}
        >
          <div className="recipe__favorite" />
        </div>
        <div className="recipe__info">
          <ul className="recipe__info__ul">
            <li className="recipe__info__li">
              <span className="recipe__info__span">Kcal:</span>
              <span>{recipe.calories}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Protein:</span>
              <span>{recipe.proteins}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Fat:</span>
              <span>{recipe.fats}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Carbs:</span>
              <span>{recipe.carbs}</span>
            </li>
          </ul>
        </div>
        <div className="recipe__cook container">
          <h2 className="recipe__cook__h2">{recipe.name}</h2>
          <span className="recipe__cook__span">INGREDIENTS:</span>
          <ul className="ingredients">
            {recipe.ingredients.map((item) => (
              <li className="ingredients__li" key={item.name}>
                {item.quantity} {item.name}
              </li>
            ))}
          </ul>
          <span className="recipe__cook__span">METHOD:</span>
          <ul className="steps">
            {recipe.steps.map((item) => (
              <li className="steps__li" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe__time container">
          <div className="recipe__time__icon" />
          <span className="recipe__time__text">{recipe.time} MIN</span>
        </div>
      </div>
    </div>
  );
};
export default RecipeScreen;
