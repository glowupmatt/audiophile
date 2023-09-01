"use client";

import { currencyFormatter } from "@/helperFunctions";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product } from "@/app/clientSideComponents/CartInventory";
import Link from "next/link";
import { FormData } from "@/app/checkout/page";

type Props = {
  inputData: FormData;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const SuccessPage = (props: Props) => {
  const { inputData, setSubmitted } = props;
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
  console.log(inputData);
  return (
    <div className="flex justify-center items-center h-[90vh] absolute z-[10]">
      <div className="bg-white h-[37.5rem] p-[2rem] flex items-start flex-col w-full justify-between self-center rounded-md shadow-2xl max-w-[33.75rem]">
        <div>
          <Image alt="" src={"/checkOval.svg"} width={64} height={64} />
        </div>
        <div>
          {!inputData ? (
            <h3 className="text-[1.5rem] font-[700] leading-[1.75rem] tracking-[0.05356rem]">
              THANK YOU FOR YOUR ORDER
            </h3>
          ) : (
            <h3 className="text-[1.5rem] font-[700] leading-[1.75rem] tracking-[0.05356rem]">
              THANK{" "}
              <span className="text-orange-default">
                {inputData.billingDetails.fullName.toUpperCase()}
              </span>{" "}
              YOU FOR YOUR ORDER
            </h3>
          )}
          <p className="leading-[1.5625rem] font-[500]">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="w-full  md:flex md:flex-row ">
          <div className="bg-gray p-[1rem] rounded-t-md w-full md:rounded-none md:rounded-l-md md:flex md:flex-col md:gap-[1rem]">
            {productsInCart.map((data: Product, index: number) => {
              return (
                <div
                  key={index}
                  className="flex w-full justify-between items-center gap-[1rem]"
                >
                  <div className="h-[4rem] w-[4rem] relative flex items-center justify-center">
                    <Image
                      src={data.image}
                      alt=""
                      width={100}
                      height={100}
                      className="rounded"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-[0.9375rem] font-[700]">{data.name}</p>
                      <p className="text-[0.875rem] font-[700] opacity-[.7]">
                        {currencyFormatter(data.price)}
                      </p>
                    </div>
                    <p>x{data.amount}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-black w-full p-[1rem] flex flex-col rounded-b-md md:h-full md:justify-center md:rounded-none md:rounded-r-md">
            <p className="leading-[1.5625rem] font-[500] text-[0.7375rem] text-white opacity-[.8] w-full flex justify-between">
              GRAND TOTAL:
            </p>
            <p className="font-[700] text-[1.125rem] text-orange-default opacity-[1]">
              {currencyFormatter(totalPrice)}
            </p>
          </div>
        </div>

        <Link
          href={"/"}
          onClick={() => setSubmitted(false)}
          className="h-[3rem] bg-orange-default hover:bg-orange-light w-full flex justify-center items-center"
        >
          <p className="text-white font-semibold text-[13px]">BACK TO HOME</p>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
