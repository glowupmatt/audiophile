import React, { useState } from "react";
import { ProductType } from "./CreateProductMultiStepForm";
import AddItemInBox from "./AddItemInBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import classNames from "classnames";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const CreateProductBoxItems = (props: Props) => {
  const { page, setPage, product, setProduct } = props;
  const [inputBox, setInputBox] = useState([{ name: "", amount: "" }]);
  const boxArray = product.inTheBox;
  const onClickHandler = () => {
    setInputBox((prev) => [...prev, { name: "", amount: "" }]);
  };
  const pageHandler = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        {inputBox.map((input, index) => {
          const removeItem = () => {
            setInputBox((prev) => [...prev.slice(0, prev.length - 1)]);
            setProduct((prev) => ({
              ...prev,
              inTheBox: [...prev.inTheBox.slice(0, index)],
            }));
          };
          return (
            <div key={index} className="flex flex-col p-4 border gap-4">
              <p className="font-bold">Item {index + 1}</p>
              <AddItemInBox setProduct={setProduct} boxArray={boxArray} />
              {/* prettier-ignore */}
              <div className={classNames("flex w-full justify-between" , {"hidden" : boxArray.length < index + 1})}>
                <button
                  className="p-4 bg-slate-300 rounded-md flex gap-2"
                  onClick={removeItem}
                >
                  <RemoveIcon />
                  <p>Remove Item</p>
                </button>
              </div>
            </div>
          );
        })}
        <button
          className="p-4 bg-slate-300 rounded-md"
          onClick={onClickHandler}
        >
          <div className="flex items-center gap-4">
            <AddCircleIcon />
            <p>Add Item</p>
          </div>
        </button>
        <button
          className="p-4 bg-slate-300 rounded-md w-full"
          onClick={pageHandler}
        >
          Add Features
        </button>
      </div>
    </div>
  );
};

export default CreateProductBoxItems;
