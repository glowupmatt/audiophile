"use client";

import LoadingState from "@/app/clientSideComponents/loadingStates/LoadingState";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { sampleData } from "@/sampleData";
import { ProductTypes } from "@/sampleData";
import { currencyFormatter } from "@/helperFunctions";

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

  console.log(product);
  if (!product) {
    return <LoadingState />;
  } else {
    return (
      <div>
        <Image
          alt=""
          src={product.productPhotosMobile[0].url}
          width={327}
          height={327}
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{currencyFormatter(product.price)}</p>
        <div>
          <h3>Features</h3>
          {product.features.map((feature, index) => (
            <div key={index}>
              <p>{feature.featureDesc}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>In the box</h3>
          {product.inTheBox.map((item, index) => (
            <div key={index}>
              <p>{item.amount}x</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div>
          {product.productPhotosMobile.slice(1, 4).map((photo, index) => (
            <div key={index}>
              <Image
                alt=""
                src={photo.url}
                width={327}
                height={327}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductPage;
