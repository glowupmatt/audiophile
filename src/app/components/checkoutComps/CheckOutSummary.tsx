"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product } from "@/app/clientSideComponents/CartInventory";
import { currencyFormatter } from "@/helperFunctions";

type Props = {};

const CheckOutSummary = (props: Props) => {
  const productsInCart = useSelector((state: any) => state.basket.basket);
  const totalPrice = productsInCart.reduce(
    (accumulator: number, product: Product) => {
      const price = parseFloat(product.price);
      const amount = product.amount;
      const productTotal = price * amount;
      return accumulator + productTotal;
    },
    0
  );
  return (
    <div className="flex flex-col p-4 gap-[1rem] bg-white rounded-md">
      <h2 className="text-[1.125rem] font-[700] ">SUMMARY</h2>
      {productsInCart.map((product: any, index: number) => {
        return (
          <div
            key={index}
            className="flex w-full justify-between items-center gap-[1rem]"
          >
            <div className="h-[4rem] w-[4rem] relative flex items-center justify-center">
              <Image
                src={product.image}
                alt=""
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col h-full justify-between">
                <p className="text-[0.9375rem] font-[700]">{product.name}</p>
                <p className="text-[0.875rem] font-[700] opacity-[.7]">
                  {currencyFormatter(product.price)}
                </p>
              </div>
              <p>x{product.amount}</p>
            </div>
          </div>
        );
      })}
      <div>
        <p className="leading-[1.5625rem] font-[500] text-[0.9375rem] opacity-[.8] w-full flex justify-between">
          GRAND TOTAL:
          <span className="font-[700] text-[1.125rem] text-orange-default opacity-[1]">
            {currencyFormatter(totalPrice)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CheckOutSummary;
