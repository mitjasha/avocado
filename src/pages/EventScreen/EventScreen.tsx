import React from "react";
import products from "../../assets/products.json";
import RegInput from "../../components/RegInput/RegInput";
import EventCardProduct from "../../components/EventCardProduct/EventCardProduct";
import "./EventScreen.scss";
import "../../index.scss";

interface TypeOfMeal {
  type: string;
}

const EventScreen: React.FC<TypeOfMeal> = ({ type }) => {
  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <h1 className="event__screen__h1">{type}</h1>
          <div className="event__screen__header__add" />
        </div>
        <div className="event__screen__search">
          <div className="event__screen__search__icon" />
          <RegInput
            type="text"
            placeholder="What have you eaten?"
            className="event__screen__input"
          />
          <div className="event__screen__close__icon" />
        </div>
        <h3 className="event__main__h3">Found:</h3>
        <div className="no__found">
          <span className="no__found__text">No products found</span>
          <div className="no__found__image" />
        </div>
        <div className="event__screen__main">
          {products.products.map((item) => (
            <EventCardProduct
              data={item}
              key={products.products.indexOf(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventScreen;
