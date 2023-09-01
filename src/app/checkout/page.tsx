"use client";
import { currencyFormatter } from "@/helperFunctions";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product } from "../clientSideComponents/CartInventory";

type Props = {};

const CheckoutPage = (props: Props) => {
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
    <section>
      <form>
        <div></div>
      </form>
      <div className="flex flex-col p-4 gap-[1rem]">
        <h2>SUMMARY</h2>
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
              <div className="flex flex-col h-full justify-between">
                <p className="text-[0.9375rem] font-[700]">{product.name}</p>
                <p className="text-[0.875rem] font-[700] opacity-[.7]">
                  {currencyFormatter(product.price)}
                </p>
              </div>
              <p>x{product.amount}</p>
            </div>
          );
        })}
        <div>
          <p>GRAND TOTAL: {currencyFormatter(totalPrice)}</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
