import React from "react";
import products from "../../assets/products.json";
import EventCardProduct from "../../components/EventCardProduct/EventCardProduct";
import "./EventScreen.scss";

interface TypeOfMeal {
  type: string;
}

const EventScreen: React.FC<TypeOfMeal> = ({ type }) => {
  return (
    <div className="event__screen container">
      <div className="event__screen__header">
        <h1 className="event__screen__h1">{type}</h1>
        <div className="event__screen__header__add" />
      </div>
      <div className="event__screen__search">
        <img src="../../assets/svg/search.svg" alt="" />
        <input
          className="event__screen__input"
          type="text"
          placeholder="What have you eaten?"
        />
        <img src="../../assets/svg/close.svg" alt="" />
      </div>
      <div className="event__screen__main">
        <h3 className="event__main__h3">Found:</h3>
        {Object.values(products.products).map((item) => (
          <EventCardProduct data={item} />
        ))}
      </div>
    </div>
  );
};
export default EventScreen;
