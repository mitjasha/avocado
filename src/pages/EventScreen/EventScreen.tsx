/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams, useSearchParams } from "react-router-dom";
import products from "../../assets/products.json";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import AddProductModal from "../../containers/AddProductModal/AddProductModal";
import "./EventScreen.scss";
import "../../index.scss";

const EventScreen: React.FC = () => {
  const { type } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams("");
  const text = searchQuery.get("search");

  const openAddProductModal = () => {
    const modal = document.querySelector(".add-product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  const openNoFound = () => {
    const noFound = document.querySelector(".no__found") as HTMLElement;
    noFound.style.display = "flex";
  };

  const closeNoFound = () => {
    const noFound = document.querySelector(".no__found") as HTMLElement;
    noFound.style.display = "none";
  };

  const removeInputText = () => {
    const searchInput = document.querySelector(
      ".event__screen__input",
    ) as HTMLInputElement;
    searchInput.value = "";
    setSearchQuery({
      search: "",
    });
  };

  const textSearch = (currentText: string) => {
    const filterProducts =
      currentText !== ""
        ? products.products.filter(
            (item) =>
              item.categoryEn
                .toLowerCase()
                .includes(currentText.toLowerCase()) ||
              item.categoryRu
                .toLowerCase()
                .includes(currentText.toLowerCase()) ||
              item.name.toLowerCase().includes(currentText.toLowerCase()) ||
              item.namEng.toLowerCase().includes(currentText.toLowerCase()),
          )
        : [];

    if (filterProducts.length === 0) {
      openNoFound();
    } else {
      closeNoFound();
    }
    ReactDOM.render(
      filterProducts.map((item) => (
        <ProductCard data={item} key={filterProducts.indexOf(item)} />
      )),
      document.querySelector(".event__screen__main"),
    );
  };

  useEffect(() => {
    text ? textSearch(text) : textSearch("  ");
  }, [text]);

  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <BackButton />
          <h1 className="event__screen__h1">{type}</h1>
          <button
            type="button"
            className="event__screen__header__add"
            aria-label="add product"
            onClick={openAddProductModal}
          />
        </div>
        <div className="event__screen__search">
          <div className="event__screen__search__icon" />
          <RegInput
            type="search"
            placeholder="What have you eaten?"
            value={text !== null ? text : "  "}
            className="event__screen__input"
            onChange={(event) => {
              textSearch((event.target as HTMLInputElement).value);
              setSearchQuery({
                search: (event.target as HTMLInputElement).value,
              });
            }}
          />
          <div
            className="event__screen__close__icon"
            onClick={() => removeInputText()}
          />
        </div>
        <h3 className="event__main__h3">Found:</h3>
        <div className="no__found">
          <span className="no__found__text">No products found</span>
          <div className="no__found__image" />
        </div>
        <div className="event__screen__main" />
      </div>
      <AddProductModal />
    </div>
  );
};
export default EventScreen;
