"use client";
import React from "react";
import CheckOutSummary from "../components/checkoutComps/CheckOutSummary";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
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
  paymentDetails: {
    emoney: boolean;
    cashOnDelivery: boolean;
  };
  emoneyDetails: {
    emoneyNumber: string;
    emoneyPin: string;
  };
};

type Props = {};

const CheckoutPage = (props: Props) => {
  const { register, setValue, handleSubmit } = useForm<FormData>();
  const inputStyles =
    "p-[.5rem] border-solid border-2 border-gray-300 rounded-xl w-full";
  const labelStyles =
    "text-[0.75rem] font-[700] text-gray-500 text-start self-start";

  return (
    <section className="p-[1.5rem] flex flex-col gap-5">
      <form className="bg-white rounded-md flex flex-col justify-center items-center gap-[1rem] p-[1rem]">
        <h2 className="text-[1.125rem] font-[700] text-orange-default text-start self-start">
          BILLING DETAILS
        </h2>
        <label className={labelStyles} htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          defaultValue="John Doe"
          className={inputStyles}
          {...register("billingDetails.fullName", {
            required: "This is required.",
          })}
        />
        <label className={labelStyles} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          defaultValue="JohnDoe@mail.com"
          className={inputStyles}
          {...register("billingDetails.email", {
            required: "This is required.",
          })}
        />
        <label className={labelStyles} htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          defaultValue="202-555-0136"
          className={inputStyles}
          {...register("billingDetails.phoneNumber", {
            required: "This is required.",
          })}
        />
        <h2 className="text-[1.125rem] font-[700] text-orange-default text-start self-start">
          SHIPPING INFO
        </h2>
        <label className={labelStyles} htmlFor="address">
          Your Address
        </label>
        <input
          id="address"
          defaultValue="1137 Williams Avenue"
          className={inputStyles}
          {...register("shippingInfo.address", {
            required: "This is required.",
          })}
        />
      </form>
      <CheckOutSummary />
    </section>
  );
};

export default CheckoutPage;
