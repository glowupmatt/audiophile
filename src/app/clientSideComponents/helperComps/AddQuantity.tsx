"use client";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {};

const AddQuantity = (props: Props) => {
  const [quantity, setQuantity] = useState(0);
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const removeQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-[7.5rem] h-[3rem] bg-[gray] text-white flex flex-row justify-center items-center">
      <button
        className="w-full"
        disabled={quantity === 0 ? true : false}
        onClick={removeQuantity}
      >
        <RemoveIcon sx={{ width: 15 }} />
      </button>
      <p>{quantity}</p>
      <button className="w-full" onClick={addQuantity}>
        <AddIcon sx={{ width: 15 }} />
      </button>
    </div>
  );
};

export default AddQuantity;
