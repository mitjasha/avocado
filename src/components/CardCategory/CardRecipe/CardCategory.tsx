import React from "react";
import { CardRecipesProps } from "../../CardRecipe/CardRecipe";
import "./CardCategory.scss";

const CardCategory: React.FC<CardRecipesProps> = ({ data }) => {
  return (
    <div
      className="card__category"
      style={{ backgroundImage: `url(${data.imageURL})` }}
    >
      <div>
        <div>
          <h2>{data.name}</h2>
          <span>{data.author}</span>
          <div />
          <div />
        </div>
        <div>
          <div />
          <span>{data.kitchen} Kitchen</span>
        </div>
        <div>
          <div />
          <span>{data.time} min</span>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
