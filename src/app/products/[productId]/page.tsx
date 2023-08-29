"use client";

import LoadingState from "@/app/clientSideComponents/loadingStates/LoadingState";
import { ProductType } from "@/app/dashboard/page";
import React, { useState, useEffect } from "react";

type Props = {
  params: {
    category: string;
    productId: string;
  };
};

const ProductPage = (props: Props) => {
  const {
    params: { productId },
  } = props;
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    try {
      const getProduct = async () => {
        const res = await fetch(`/api/getProducts/${productId}`);
        const product = await res.json();
        setProduct(product);
      };
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, [productId]);
  if (!product) {
    return <LoadingState />;
  } else {
    return (
      <div>
        <div>{product.name}</div>
      </div>
    );
  }
};

export default ProductPage;
