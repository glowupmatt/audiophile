"use client";

import ProductButton from "@/app/libs/assetComponents/ProductButton";
import { ProductTypes } from "@/sampleData";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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

    console.log(recommendedProducts);

    return (
      <div className="flex flex-col gap-[3.3rem] justify-center items-center mt-[5rem]">
        <h3 className="text-[1.5rem] font-[700] leading-[2.25rem] tracking-[0.05356rem]">
          YOU MAY ALSO LIKE
        </h3>
        {recommendedProducts.length > 0 ? (
          <div className="w-full">
            {recommendedProducts?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-center items-center flex-col gap-[1.5rem]"
                >
                  <div className="w-full bg-gray rounded-md flex items-center justify-center p-4">
                    <Image
                      alt=""
                      src={item.categoryImageSizes[0].mobileUrl}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <p>{item.name}</p>
                  <ProductButton />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full">
            {recommendedProductsForCategoryWithOneProduct?.map(
              (item, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center items-center flex-col gap-[1.5rem]"
                >
                  <div className="w-full bg-gray rounded-md flex items-center justify-center p-4">
                    <Image
                      alt=""
                      src={item.categoryImageSizes[0].mobileUrl}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <p>{item.name}</p>
                  <ProductButton />
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  }
};

export default RecommendationComp;
