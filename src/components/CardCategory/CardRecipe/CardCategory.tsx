import React from "react";
import { CardRecipesProps } from "../../CardRecipe/CardRecipe";
import "./CardCategory.scss";

const CardCategory: React.FC<CardRecipesProps> = ({ data }) => {
  return (
    <div
      className="card__category__wrapper"
      style={{
        backgroundImage: `url(${data.imageURL})`,
      }}
      key={data.id}
    >
      <div className="card__category__bg">
        <div className="category__recipe__container">
          <h2 className="category__recipe__name">{data.name}</h2>
          <span className="category__recipe__author">{data.author}</span>
          <div className="category__recipe__kithcen">
            <div className="category__recipe__kithcen__icon" />
            <span className="category__recipe__kithcen__text">
              {data.kitchen} Kitchen
            </span>
          </div>
          <div className="category__recipe__time">
            <div className="category__recipe__time__icon" />
            <span className="category__recipe__time__text">
              {data.time} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
