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
      <div>
        <ul>
          <li>
            <span>Kcal:</span>
            <span>{recipes[0].calories}</span>
          </li>
          <li>
            <span>Protein:</span>
            <span>{recipes[0].proteins}</span>
          </li>
          <li>
            <span>Fat:</span>
            <span>{recipes[0].fats}</span>
          </li>
          <li>
            <span>Carbs:</span>
            <span>{recipes[0].carbs}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2>{recipes[0].name}</h2>
        <span>INGREDIENTS:</span>
        <ul>
          {recipes[0].ingredients.map((item) => (
            <li>
              {item.quantity} {item.name}
            </li>
          ))}
        </ul>
        <span>METHOD:</span>
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
