"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currencyFormatter } from "@/helperFunctions";
import Image from "next/image";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addAmount, removeOne, removeAll } from "../redux/createSlices";

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
  const dispatch = useDispatch();
  const totalPrice = productsInCart.reduce(
    (accumulator: number, product: Product) => {
      const price = parseFloat(product.price);
      const amount = product.amount;
      const productTotal = price * amount;
      return accumulator + productTotal;
    },
    0
  );

  const removeAllHandler = () => {
    dispatch(removeAll({}));
  };

  return (
    <div className="flex justify-center items-center bg-white h-full w-full rounded-md p-4 md:w-[23.5625rem]">
      <section className="flex flex-col justify-between items-center h-full w-full">
        <div className="flex justify-between items-center w-full">
          <h3>Cart ({productsInCart.length})</h3>
          <button onClick={removeAllHandler}>
            <p>Remove All</p>
          </button>
        </div>
        {productsInCart.map((product: any, index: number) => {
          const addExtraHandler = () => {
            dispatch(
              addAmount({
                name: product.name,
              })
            );
          };
          const removeExtraHandler = () => {
            dispatch(
              removeOne({
                name: product.name,
              })
            );
          };
          console.log(productsInCart.map((product: any) => product.amount));
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
              <div className="w-full p-4 gap-4 h-[3rem] bg-[gray] text-white flex flex-row justify-center items-center max-w-[7rem]">
                <button
                  onClick={removeExtraHandler}
                  disabled={product.amount === 0}
                  className="w-full flex justify-start items-end"
                >
                  <RemoveIcon sx={{ width: 15 }} />
                </button>
                <p>{product.amount}</p>
                <button
                  onClick={addExtraHandler}
                  className="w-full flex justify-end items-end"
                >
                  <AddIcon sx={{ width: 15 }} />
                </button>
              </div>
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
