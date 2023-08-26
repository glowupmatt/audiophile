"use client";
import React, { useState } from "react";
import { ProductType } from "./CreateProductMultiStepForm";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const CreateProductFeatures = (props: Props) => {
  const { page, setPage, product, setProduct } = props;
  const productFeatures = product.features;
  const [inputBox, setInputBox] = useState({
    descriptionOne: "",
    descriptionTwo: "",
  });
  const featureHandlerOne = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputBox((prev) => ({ ...prev, descriptionOne: e.target.value }));
  };
  const featureHandlerTwo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputBox((prev) => ({ ...prev, descriptionTwo: e.target.value }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct((prev) => ({
      ...prev,
      features: [
        { featureDesc: inputBox.descriptionOne },
        { featureDesc: inputBox.descriptionTwo },
      ],
    }));
    setPage(3);
  };

  return (
    <div className="h-screen">
      <form
        className="w-full h-full flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <h1 className="font-bold text-[1.5rem]">Set The Product Features:</h1>
        <div className="flex flex-col p-4 h-[50%] w-full">
          <label htmlFor="DescriptionOne">Description One</label>
          <textarea
            onChange={featureHandlerOne}
            className="border-solid border-[2px] rounded-md p-2 w-full h-full"
            name="DescriptionOne"
            id="DescriptionOne"
          />
        </div>
        <div className="flex flex-col p-4 h-[50%] w-full">
          <label htmlFor="DescriptionTwo">Description Two</label>
          <textarea
            onChange={featureHandlerTwo}
            className="border-solid border-[2px] rounded-md p-2 w-full h-full"
            name="DescriptionTwo"
            id="DescriptionTwo"
          />
        </div>
        <button className="p-4 bg-slate-300 rounded-md mt-4">
          <p>Submit Features</p>
        </button>
      </form>
    </div>
  );
};

export default CreateProductFeatures;
