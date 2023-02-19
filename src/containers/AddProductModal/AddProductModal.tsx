import React, { useState } from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./AddProductModal.scss";
import productsController from "../../api/product.controller";

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

  const addProductRequest = async (
    name: string,
    calories_100g: number,
    proteins_100g: number,
    carbs_100g: number,
    fat_100g: number,
    category: string,
  ) => {
    await productsController.addProduct({
      name,
      calories_100g,
      proteins_100g,
      carbs_100g,
      fat_100g,
      category,
    });
  };

  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbs, setCarbs] = useState("");
  const [category, setCategory] = useState("");

  return (
    <BasicModalComponent title="Add new product" className="add-product-modal">
      <div className="add__containter">
        <div className="add__param">
          {addProdutFields.map((item) => {
            return <p key={item}>{`${item}:`}</p>;
          })}
        </div>
        <div className="add__values">
          <select
            className="add__select"
            value={category}
            onChange={(event) =>
              setCategory((event.target as HTMLSelectElement).value)
            }
          >
            {productCategories.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <RegInput
            className="add__input"
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(event) =>
              setName((event.target as HTMLInputElement).value)
            }
          />
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Kcal per 100 g"
              value={kcal}
              onChange={(event) =>
                setKcal((event.target as HTMLInputElement).value)
              }
            />
            <span>&nbsp;kcal</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Proteins per 100 g"
              value={proteins}
              onChange={(event) =>
                setProteins((event.target as HTMLInputElement).value)
              }
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Fats per 100 g"
              value={fats}
              onChange={(event) =>
                setFats((event.target as HTMLInputElement).value)
              }
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Carbs per 100 g"
              value={carbs}
              onChange={(event) =>
                setCarbs((event.target as HTMLInputElement).value)
              }
            />
            <span>&nbsp;g</span>
          </div>
        </div>
      </div>
      <ButtonTemplate
        className="modal__button"
        onClick={() => {
          addProductRequest(
            name,
            Number(kcal),
            Number(proteins),
            Number(carbs),
            Number(fats),
            category,
          );
        }}
      >
        Add
      </ButtonTemplate>
    </BasicModalComponent>
  );
};

export default AddProductModal;
