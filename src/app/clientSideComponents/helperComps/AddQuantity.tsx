"use client";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "@/sampleData";
import { initialStateType } from "@/app/redux/createSlices";

type Props = {
  product: ProductTypes;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const AddQuantity = (props: Props) => {
  const { product, quantity, setQuantity } = props;

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const removeQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-[7.5rem] h-[3rem] bg-[gray] text-white flex flex-row justify-center items-center">
      <div className="w-full" onClick={removeQuantity}>
        <RemoveIcon sx={{ width: 15 }} />
      </div>
      <p>{quantity}</p>
      <div
        className="w-full items-start flex justify-center"
        onClick={addQuantity}
      >
        <AddIcon sx={{ width: 15 }} />
      </div>
    </div>
  );
};

export default AddQuantity;
