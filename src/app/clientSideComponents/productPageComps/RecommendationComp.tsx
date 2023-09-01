"use client";

import ProductButton from "@/app/libs/assetComponents/ProductButton";
import { ProductTypes } from "@/sampleData";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import RecommendProduct from "./RecommendProduct";
import Link from "next/link";

type Props = {
  product: ProductTypes;
};

const RecommendationComp = (props: Props) => {
  const { product } = props;
  const [products, setProducts] = useState<ProductTypes[]>();
  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await fetch(`/api/getProducts`);
        const products = await res.json();
        setProducts(products);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (products) {
    const recommendedProducts: ProductTypes[] = products.filter((item) => {
      return item.name !== product.name && item.category === product.category;
    });

    const recommendedProductsForCategoryWithOneProduct = products?.filter(
      (item) => {
        return item.category === "Headphone";
      }
    );

    return (
      <div className="flex flex-col gap-[3.3rem] justify-center items-center mt-[5rem]">
        <h3 className="text-[1.5rem] font-[700] leading-[2.25rem] tracking-[0.05356rem]">
          YOU MAY ALSO LIKE
        </h3>
        {recommendedProducts.length > 0 ? (
          <div className="w-full flex flex-col gap-[1.5rem] md:flex-row md:justify-center md:items-center">
            {recommendedProducts?.map((item, index) => {
              return (
                <Link href={`/products/${item.id}`} key={index}>
                  <RecommendProduct item={item} />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="w-full flex flex-col gap-[1.5rem] md:flex-row md:justify-center md:items-center">
            {recommendedProductsForCategoryWithOneProduct?.map(
              (item, index) => {
                return (
                  <Link href={`/products/${item.id}`} key={index}>
                    <RecommendProduct item={item} />
                  </Link>
                );
              }
            )}
          </div>
        )}
      </div>
    );
  }
};

export default RecommendationComp;
