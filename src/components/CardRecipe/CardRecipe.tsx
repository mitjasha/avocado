import React from "react";
import { RecipeResponse } from "../../api/api.interface";
import "./CardRecipe.scss";

export interface CardRecipesProps {
  data: RecipeResponse;
  // className?: string;
}

const CardRecipe: React.FC<CardRecipesProps> = ({ data }) => {
  return (
    <div>
      <div
        className="recipe__card__img"
        style={{ backgroundImage: `url(${data.imageURL})` }}
      >
        <div className="recipe__card__bg__like">
          <div className="recipe__card__like" />
        </div>
      </div>
      <div className="recipe__card__wrapper">
        <h3 className="recipe__card__h3">{data.name}</h3>
        <div className="recipe__data">
          <div className="recipe__data__calories">
            <div className="recipe__data__img__calories" />
            <span className="recipe__data__span">{data.calories} Kcal</span>
          </div>
          <div className="recipe__data__time">
            <div className="recipe__data__img__time" />
            <span className="recipe__data__span">{data.time} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
