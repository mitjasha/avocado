import React from "react";
import "./CardRecipe.scss";

export interface DataRecipes {
  id: number;
  name: string;
  category: string;
  calories: string;
  proteins: string;
  carbs: string;
  fats: string;
  author: string;
  kitchen: string;
  ingredients: { quantity: string; name: string; type: string }[];
  steps: string[];
  time: number;
  imageURL: string;
}

interface CardRecipesProps {
  data: DataRecipes;
  // className?: string;
}

const CardRecipe: React.FC<CardRecipesProps> = ({ data }) => {
  return (
    <div className="recipe__card">
      <div
        className="recipe__card__img"
        style={{ backgroundImage: `url(${data.imageURL})` }}
      />
      <div className="recipe__card__wrapper">
        <h3 className="recipe__card__h3">{data.name}</h3>
        <div className="recipe__info">
          <div className="recipe__info__calories">
            <div className="recipe__info__img__calories" />
            <span className="recipe__info__span">{data.calories} Kcal</span>
          </div>
          <div className="recipe__info__time">
            <div className="recipe__info__img__time" />
            <span className="recipe__info__span">{data.time} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
