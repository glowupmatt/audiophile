"use client";

import React from "react";
import { useSelector } from "react-redux";
import { currencyFormatter } from "@/helperFunctions";
import Image from "next/image";
import Link from "next/link";

type Props = {
  setCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export type Product = {
  name: string;
  price: string;
  image: string;
  amount: number;
};

const CartInventory = (props: Props) => {
  const { setCartOpened } = props;
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
    <div className="flex justify-center items-center bg-white h-full w-full rounded-md p-4 md:w-[23.5625rem]">
      <section className="flex flex-col justify-between items-center h-full w-full">
        <div className="flex justify-between items-center w-full">
          <h3>Cart ({productsInCart.length})</h3>
          <p>Remove All</p>
        </div>
        {productsInCart.map((product: any, index: number) => {
          return (
            <div
              key={index}
              className="flex w-full justify-between items-center gap-[1rem]"
            >
              <div className="h-[4rem] w-[4rem] relative flex items-center justify-center">
                <Image src={product.image} alt="" width={100} height={100} />
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-[0.9375rem] font-[700]">{product.name}</p>
                <p className="text-[0.875rem] font-[700] opacity-[.7]">
                  {currencyFormatter(product.price)}
                </p>
              </div>
              <p>{product.amount}</p>
            </div>
          );
        })}
        <div className="flex justify-between w-full gap-[1rem]">
          <p className=" font-[500] leading-[1.5625rem]">Total Price</p>
          <p className="text-[1.125rem] font-[700]">
            {currencyFormatter(totalPrice)}
          </p>
        </div>
        <Link
          href={"/checkout"}
          className="w-full"
          onClick={() => setCartOpened(false)}
        >
          <button className="w-full h-[3rem] px-[1rem] bg-orange-default hover:bg-orange-light">
            <p className="text-white font-semibold text-[13px]">CHECKOUT</p>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CartInventory;
