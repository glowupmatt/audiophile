"use client";

import React from "react";
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
  emoneyDetails: {
    emoneyNumber: string;
    emoneyPin: string;
  };
};

type Props = {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setInputData: React.Dispatch<React.SetStateAction<FormData>>;
};

const CheckOutForm = (props: Props) => {
  const { submitted, setSubmitted, setInputData } = props;
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSubmitted(true);
    setInputData(data);
    console.log(data);
  };
  const inputStyles =
    "p-[.5rem] border-solid border-2 border-gray-300 rounded-xl w-full placeholder:text-black placeholder:opacity-[.6]  text-[.9rem]";
  const labelStyles =
    "text-[0.75rem] font-[700] text-gray-500 text-start self-start";
  const inputColumnStyles = "md:grid grid-cols-2 gap-[1rem] w-full";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-md gap-[1rem] p-[1rem] max-w-[45.625rem] lg:p-[3rem]"
    >
      <div className="flex flex-col justify-center items-center gap-[1rem] lg:justify-between lg:h-full lg:gap-[4rem]">
        <div>
          <h2 className="text-[1.125rem] font-[700] text-orange-default text-start self-start">
            BILLING DETAILS
          </h2>
          <div className={inputColumnStyles}>
            <div>
              <label className={labelStyles} htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                placeholder="John Doe"
                className={inputStyles}
                {...register("billingDetails.fullName", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                placeholder="JohnDoe@mail.com"
                className={inputStyles}
                {...register("billingDetails.email", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                placeholder="202-555-0136"
                className={inputStyles}
                {...register("billingDetails.phoneNumber", {
                  required: "This is required.",
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[1.125rem] font-[700] text-orange-default text-start self-start">
            SHIPPING INFO
          </h2>
          <div className={inputColumnStyles}>
            <div>
              <label className={labelStyles} htmlFor="address">
                Your Address
              </label>
              <input
                id="address"
                placeholder="1137 Williams Avenue"
                className={inputStyles}
                {...register("shippingInfo.address", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="zipCode">
                Zip Code
              </label>
              <input
                id="zipCode"
                placeholder="10001"
                className={inputStyles}
                {...register("shippingInfo.zipCode", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="city">
                City
              </label>
              <input
                id="city"
                placeholder="New York"
                className={inputStyles}
                {...register("shippingInfo.city", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="country">
                Country
              </label>
              <input
                id="country"
                placeholder="United States"
                className={inputStyles}
                {...register("shippingInfo.country", {
                  required: "This is required.",
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[1.125rem] font-[700] text-orange-default text-start self-start">
            CARD INFORMATION
          </h3>
          <div className={inputColumnStyles}>
            <div>
              <label className={labelStyles} htmlFor="emoneyNumber">
                Card Number
              </label>
              <input
                id="emoneyNumber"
                placeholder="238521993"
                className={inputStyles}
                {...register("emoneyDetails.emoneyNumber", {
                  required: "This is required.",
                })}
              />
            </div>
            <div>
              <label className={labelStyles} htmlFor="emoneyPin">
                Card Pin
              </label>
              <input
                id="emoneyPin"
                placeholder="6891"
                className={inputStyles}
                {...register("emoneyDetails.emoneyPin", {
                  required: "This is required.",
                })}
              />
            </div>
          </div>
        </div>
        {submitted === false ? (
          <button
            type="submit"
            className="w-[10rem] h-[3rem] bg-orange-default hover:bg-orange-light"
          >
            <p className="text-white font-semibold text-[13px]">
              CONTINUE & PAY
            </p>
          </button>
        ) : (
          <div className="w-[10rem] h-[3rem] bg-orange-default hover:bg-orange-light justify-center items-center flex ">
            <p className="text-white font-semibold text-[13px]">SUBMITTED!</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckOutForm;
