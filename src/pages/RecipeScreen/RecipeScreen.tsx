import React from "react";
import "./RecipeScreen.scss";
import { recipes } from "../../assets/recipes.json";

const RecipeScreen: React.FC = () => {
  return (
    <div className="recipe__screen">
      <div
        className="recipe__image"
        style={{ backgroundImage: `url(${recipes[0].imageURL})` }}
      >
        <div className="recipe__favorite" />
      </div>
      <div className="recipe__info">
        <ul className="recipe__info__ul">
          <li className="recipe__info__li">
            <span className="recipe__info__span">Kcal:</span>
            <span>{recipes[0].calories}</span>
          </li>
          <li className="recipe__info__li">
            <span className="recipe__info__span">Protein:</span>
            <span>{recipes[0].proteins}</span>
          </li>
          <li className="recipe__info__li">
            <span className="recipe__info__span">Fat:</span>
            <span>{recipes[0].fats}</span>
          </li>
          <li className="recipe__info__li">
            <span className="recipe__info__span">Carbs:</span>
            <span>{recipes[0].carbs}</span>
          </li>
        </ul>
      </div>
      <div className="recipe__cook">
        <h2 className="recipe__cook__h2">{recipes[0].name}</h2>
        <span className="recipe__cook__span">INGREDIENTS:</span>
        <ul>
          {recipes[0].ingredients.map((item) => (
            <li>
              {item.quantity} {item.name}
            </li>
          ))}
        </ul>
        <span className="recipe__cook__span">METHOD:</span>
        <ul>
          {recipes[0].steps.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <div />
        <span>{recipes[0].time} MIN</span>
      </div>
    </div>
  );
};
export default RecipeScreen;
