import React from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/RegInput/RegInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./AddProductModal.scss";

const AddProductModal: React.FC = () => {
  const addProdutFields = [
    "Category",
    "Name",
    "100 g",
    "Proteins",
    "Fats",
    "Carbs",
  ];
  const productCategories = [
    "dairy",
    "pastries",
    "oils",
    "sauces",
    "grains",
    "vegetables",
    "fruits and berries",
    "dried fruits",
    "beans",
    "mushrooms",
    "meat",
    "sausages",
    "smoked meat",
    "fish and seafood",
    "nuts",
    "sweets",
    "pasta",
    "soup",
    "salad",
  ];
  return (
    <BasicModalComponent title="Add new product">
      <div className="add__containter">
        <div className="add__param">
          {addProdutFields.map((item) => {
            return <p key={item}>{`${item}:`}</p>;
          })}
        </div>
        <div className="add__values">
          <select className="add__select">
            {productCategories.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <RegInput
            className="add__input"
            type="text"
            placeholder="Enter a name"
          />
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Kcal per 100 g"
            />
            <span>&nbsp;kcal</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Proteins per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Fats per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Carbs per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
        </div>
      </div>
      <ButtonTemplate className="modal__button">Add</ButtonTemplate>
    </BasicModalComponent>
  );
};

export default AddProductModal;
