"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { ProductTypes } from "@/sampleData";
import { currencyFormatter } from "@/helperFunctions";
import AddQuantity from "../helperComps/AddQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "@/app/redux/createSlices";
import { basketSlice } from "@/app/redux/createSlices";
import { initialStateType } from "@/app/redux/createSlices";

type Props = {
  product: ProductTypes;
};

export const ProductMainInfo = (props: Props) => {
  const [quantity, setQuantity] = useState(0);
  const { product } = props;
  const { name, price, categoryImageSizes } = product;
  const image = categoryImageSizes.filter((image) => image.desktopUrl);
  const dispatch = useDispatch();
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addToBasket({
        name: name,
        price: price,
        image: image[0].desktopUrl,
        amount: quantity,
      })
    );
  };

  return (
    <div className="md:flex md:w-full md:justify-between md:items-center lg:justify-between lg:gap-[4rem]">
      <div className="mb-[1.5rem] bg-gray w-full flex justify-center items-center rounded-md md:w-[17.5625rem] md:h-[30rem] lg:w-[30rem] lg:h-[35rem]">
        <Image
          alt=""
          src={product.productPhotosMobile[0].url}
          width={327}
          height={327}
          className="rounded-md md:hidden"
        />
        <Image
          alt=""
          src={product.productPhotosDesktop[0].url}
          width={327}
          height={327}
          className="rounded-md hidden md:block"
        />
      </div>
      <div className="flex flex-col gap-[1.5rem] md:w-[21.21875rem] lg:w-[27.84375rem]">
        <h2 className="text-[1.75rem] font-[700] tracking-[0.0625rem]">
          {product.name.toUpperCase()}
        </h2>
        <p className="font-[500] leading-[1.5625rem] opacity-[.6]">
          {product.description}
        </p>
        <div className="flex flex-col justify-between items-start gap-[1.94rem] mt-[1.94rem]">
          <p className="text-[1.125rem] font-[700] leading-[0.08038rem]">
            {currencyFormatter(product.price)}
          </p>
          <form onSubmit={onSubmitHandler}>
            <div className="flex flex-row w-full gap-5">
              <AddQuantity
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
              />

              <button
                type={"submit"}
                disabled={quantity === 0 ? true : false}
                className="w-full h-[3rem] bg-orange-default hover:bg-orange-light"
              >
                <p className="text-white font-semibold text-[13px]">
                  ADD TO CART
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
