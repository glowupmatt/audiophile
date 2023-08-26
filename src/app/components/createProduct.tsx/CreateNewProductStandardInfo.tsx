"use client";

import React, { useState } from "react";
import { ProductType } from "./CreateProductMultiStepForm";
type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const CreateNewProductStandardInfo = (props: Props) => {
  const {
    page,
    setPage,
    product,
    product: { category, name, description, price },
    setProduct,
  } = props;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
  };
  let buttonDisabled = true;
  if (
    category.length > 0 &&
    name.length > 0 &&
    description.length > 0 &&
    price.length > 0
  ) {
    buttonDisabled = false;
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-200  p-4">
      <section className=" bg-white p-[2rem] rounded-md flex flex-col gap-2">
        <h1 className="font-bold text-[1.5rem]">Create New Product</h1>
        <p className="text-[.8rem] text-gray-600">
          Provide the information to create your new Product
        </p>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="border-solid border-[2px] rounded-md p-2"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="border-solid border-[2px] rounded-md p-2"
              type="number"
              name="price"
              id="price"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="border-solid border-[2px] rounded-md p-2"
              name="description"
              id="description"
              rows={4}
              cols={10}
            ></textarea>
          </div>
          <div className="bg-slate-300 p-4 rounded-md">
            <fieldset className="grid grid-cols-2 gap-5 items-center justify-items-center">
              <legend className="mb-5 font-bold">Select Category: </legend>
              <div className="flex gap-3 items-center justify-center">
                <label htmlFor="speaker">Speaker</label>
                <input
                  type="radio"
                  id="Speaker"
                  name="category"
                  value="Speaker"
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <label htmlFor="Headphone">Headphone</label>
                <input
                  type="radio"
                  id="Headphone"
                  name="category"
                  value="Headphone"
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <label htmlFor="Earphone">Earphone</label>
                <input
                  type="radio"
                  id="Earphone"
                  name="category"
                  value="Earphone"
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />
              </div>
            </fieldset>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              disabled={buttonDisabled === true}
              className="bg-slate-200 p-4 w-[10rem] text-[.8rem] rounded-md"
            >
              Submit Info
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateNewProductStandardInfo;
