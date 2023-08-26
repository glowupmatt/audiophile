"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = (props: Props) => {
  const { params } = props;
  const router = useRouter();
  console.log(params);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`/api/getProducts/${params.productId}`);
        const product = await res.json();
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  });

  const deleteProduct = async () => {
    try {
      const res = await fetch(`/api/deleteProduct/${params.productId}`, {
        method: "DELETE",
      });
      const product = await res.json();
      console.log(product);
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <div>
        <button onClick={deleteProduct}>
          <p>Delete Product</p>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
