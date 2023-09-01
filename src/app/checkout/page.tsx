"use client";
import React, { useState } from "react";
import CheckOutSummary from "../components/checkoutComps/CheckOutSummary";
import CheckOutForm from "../components/checkoutComps/CheckOutForm";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product } from "../clientSideComponents/CartInventory";
import { currencyFormatter } from "@/helperFunctions";
import SuccessPage from "../components/checkoutComps/SuccessPage";
import classNames from "classnames";

type Props = {};
export type FormData = {
  billingDetails: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
  shippingInfo: {
    address: string;
    zipCode: string;
    city: string;
    country: string;
  };
  emoneyDetails: {
    emoneyNumber: string;
    emoneyPin: string;
  };
};

const CheckoutPage = (props: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [inputData, setInputData] = useState<FormData>({} as FormData);
  console.log(submitted);

  return (
    <section className="p-[1.5rem] flex flex-col gap-5 max-w-[90rem] lg:my-[4rem] relative justify-center items-center">
      {submitted === false ? null : (
        <SuccessPage inputData={inputData} setSubmitted={setSubmitted} />
      )}
      <div
        className={classNames(" flex flex-col gap-5", {
          "blur-md": submitted === true,
        })}
      >
        <div className="lg:w-full lg:flex lg:justify-center lg:items-start lg:gap-[1rem]">
          <CheckOutForm
            submitted={submitted}
            setSubmitted={setSubmitted}
            setInputData={setInputData}
          />
          <CheckOutSummary />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
