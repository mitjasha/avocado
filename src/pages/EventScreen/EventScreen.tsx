import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import AddProductModal from "../../containers/AddProductModal/AddProductModal";
import ProductModal from "../../containers/ProductModal/ProductModal";
import "./EventScreen.scss";
import "../../index.scss";
import productsController from "../../api/product.controller";
import { ProductResponse } from "../../api/api.interface";

const EventScreen: React.FC = () => {
  const { type } = useParams();

  const [products, setProducts] = useState<ProductResponse[]>([]);

  const getAllProducts = async () => {
    const result = await productsController.getAllproduct();
    if (result) {
      setProducts(result);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const openAddProductModal = () => {
    const modal = document.querySelector(".add-product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  const [productData, setProductData] = useState<ProductResponse>({
    name: "name",
    calories_100g: 0,
    proteins_100g: 0,
    carbs_100g: 0,
    fat_100g: 0,
    category: "",
    id: "",
  });

  const openProductModal = (item: ProductResponse) => {
    setProductData(item);
    const modal = document.querySelector(".product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <BackButton to="/main" />
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
          {products.map((item) => (
            <ProductCard
              data={item}
              key={products.indexOf(item)}
              onClick={() => openProductModal(item)}
            />
          ))}
        </div>
      </div>
      <AddProductModal />
      <ProductModal data={productData} />
    </div>
  );
};
export default EventScreen;
