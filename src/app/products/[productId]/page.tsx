"use client";

import LoadingState from "@/app/clientSideComponents/loadingStates/LoadingState";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { sampleData } from "@/sampleData";
import { ProductTypes } from "@/sampleData";
import { useRouter } from "next/navigation";
import { ProductMainInfo } from "@/app/clientSideComponents/productPageComps/ProductMainInfo";
import Features from "@/app/clientSideComponents/productPageComps/Features";
import InTheBox from "@/app/clientSideComponents/productPageComps/InTheBox";
import ProductImages from "@/app/clientSideComponents/productPageComps/ProductImages";
import RecommendationComp from "@/app/clientSideComponents/productPageComps/RecommendationComp";
import CategoryList from "@/app/clientSideComponents/CategoryList";

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
  // const product: ProductTypes = sampleData;
  const router = useRouter();
  const [product, setProduct] = useState<ProductTypes>();

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
      <div className="flex flex-col p-[1.5rem] max-w-[90rem]">
        <p
          className="p-4 self-start cursor-pointer"
          onClick={() => router.push(`/category/${product.category}`)}
        >
          Go Back
        </p>
        <ProductMainInfo product={product} />
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:w-full">
          <Features product={product} />
          <InTheBox product={product} />
        </div>
        <ProductImages product={product} />
        <RecommendationComp product={product} />
        <div className="pt-[7rem]">
          <CategoryList />
        </div>
      </div>
    );
  }
};

export default ProductPage;
