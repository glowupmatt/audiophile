"use client";

import React from "react";
import { ProductType } from "./CreateProductMultiStepForm";
import { useRouter } from "next/navigation";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const CreateProductFinalPage = (props: Props) => {
  const { product } = props;
  console.log(product);
  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/createAProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/dashboard");
    }
  };
  return (
    <div className="h-[90vh] flex align-center justify-center">
      <form
        className="flex flex-col justify-center items-center p-4 text-center gap-4"
        method="POST"
        onSubmit={onSubmitHandler}
      >
        <p className="w-[70%]">
          Completed Product Form Click the button to submit All Information for
        </p>
        <p className="font-bold text-[2rem]">{product.name}</p>
        <button type="submit" className="p-3 bg-slate-200 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProductFinalPage;
