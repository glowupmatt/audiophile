import React from "react";
import Image from "next/image";
import { ProductTypes } from "@/sampleData";
import { currencyFormatter } from "@/helperFunctions";
import AddQuantity from "../helperComps/AddQuantity";
import AddToCartButton from "@/app/libs/assetComponents/AddToCartButton";

type Props = {
  product: ProductTypes;
};

export const ProductMainInfo = (props: Props) => {
  const { product } = props;
  return (
    <div>
      <div className="mb-[1.5rem] bg-gray w-full flex justify-center items-center rounded-md">
        <Image
          alt=""
          src={product.productPhotosMobile[0].url}
          width={327}
          height={327}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-[1.5rem]">
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
          <div className="flex flex-row w-full gap-5">
            <AddQuantity />
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};
