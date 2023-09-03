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
    <div className="w-full p-4 gap-4 h-[3rem] bg-[gray] text-white flex flex-row justify-center items-center max-w-[7rem]">
      {quantity === 0 ? (
        <div className="w-full flex justify-start items-end">
          <RemoveIcon sx={{ width: 15 }} />
        </div>
      ) : (
        <div
          className="w-full flex justify-start items-end"
          onClick={removeQuantity}
        >
          <RemoveIcon sx={{ width: 15 }} />
        </div>
      )}
      <p>{quantity}</p>
      <div className="w-full flex justify-end items-end" onClick={addQuantity}>
        <AddIcon sx={{ width: 15 }} />
      </div>
    </div>
  );
};

export default AddQuantity;
