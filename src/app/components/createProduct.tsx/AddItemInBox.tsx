"use client";
import React, { useState } from "react";
import { ProductType } from "./CreateProductMultiStepForm";
import classNames from "classnames";

type Props = {
  boxArray: {
    name: String;
    amount: string;
  }[];

  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

function AddItemInBox({ setProduct, boxArray }: Props) {
  const [item, setItem] = useState({ itemName: "", itemAmount: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct((prev) => ({
      ...prev,
      inTheBox: [...boxArray, { name: item.itemName, amount: item.itemAmount }],
    }));
    setSubmitted((prev) => !prev);
  };
  return (
    <div>
      <form className="" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="border-solid border-[2px] rounded-md p-2"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setItem({ ...item, itemName: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Amount</label>
          <input
            className="border-solid border-[2px] rounded-md p-2"
            type="text"
            name="amount"
            id="amount"
            onChange={(e) => setItem({ ...item, itemAmount: e.target.value })}
          />
        </div>
        {/* prettier-ignore */}
        <button
          type="submit"
          disabled={item.itemName.length === 0 && item.itemAmount.length === 0}
          className={classNames("p-4 bg-slate-300 rounded-md mt-4", {
            "hidden": submitted === true,
          })}
        >
            <p className="flex items-center gap-4">

          Submit Item
            </p>
        </button>
      </form>
    </div>
  );
}

export default AddItemInBox;
