"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import ProductButton from "@/app/libs/assetComponents/ProductButton";
import Link from "next/link";
import CategoryList from "@/app/clientSideComponents/CategoryList";
import LoadingState from "@/app/clientSideComponents/loadingStates/LoadingState";
import classNames from "classnames";

type Props = {
  params: {
    category: string;
  };
};
export type ProductType = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  inTheBox: {
    name: string;
    amount: string;
  }[];
  features: {
    featureDesc: string;
  }[];
  productPhotosMobile: {
    url: string;
  }[];
  productPhotosDesktop: {
    url: string;
  }[];
  productPhotosTablet: {
    url: string;
  }[];
  categoryImageSizes: {
    mobileUrl: string;
    tabletUrl: string;
    desktopUrl: string;
  }[];
}[];

const CategoryPage = (props: Props) => {
  const {
    params: { category },
  } = props;
  const routerName = usePathname();
  const [data, setData] = useState<ProductType>([]);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await fetch("/api/getProducts");
        const products = await res.json();
        setData(products);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const selectedCategory = routerName.split("/")[2];

  if (data.length === 0) {
    return <LoadingState />;
  } else {
    return (
      <div className="w-full">
        <h2 className="text-center text-[1.75rem] font-[700] tracking-[0.125rem] text-white bg-black p-4 lg:h-[10rem] lg:items-center lg:justify-center lg:flex">
          {`${selectedCategory.toUpperCase()}`}S
        </h2>
        <div className=" lg:p-[10rem] lg:pt-0">
          {data
            .filter((product) => selectedCategory === product.category)
            .map((product, index) => {
              return (
                <div
                  key={product.id}
                  className={classNames(
                    "md:flex flex-col justify-center items-center lg:h-full lg:w-full lg:justify-between",
                    { "lg:flex-row-reverse": index % 2 === 0 },
                    { "lg:flex-row": index % 2 !== 0 }
                  )}
                >
                  <div className="p-[1.5rem] mt-[4rem] md:h-[22rem] md:w-[43.0625rem] md:justify-center md:flex md:items-center lg:w-[33.75rem] lg:h-[35rem] ">
                    <Image
                      alt=""
                      src={product.categoryImageSizes[0].mobileUrl}
                      width={220}
                      height={243}
                      priority={true}
                      className="h-auto w-full rounded md:hidden"
                    />
                    <Image
                      alt=""
                      src={product.categoryImageSizes[0].tabletUrl}
                      width={689}
                      height={352}
                      priority={true}
                      className="h-auto w-full rounded hidden md:block self-center lg:hidden"
                    />
                    <Image
                      alt=""
                      src={product.categoryImageSizes[0].desktopUrl}
                      width={540}
                      height={560}
                      priority={true}
                      className="h-auto w-full rounded hidden self-center lg:block"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[1.5rem] text-center p-[1.5rem] leading-none lg:w-[27.8125rem] lg:text-start lg:items-start">
                    {index === 0 ? (
                      <p className="text-orange-default tracking-[0.625rem] text-[0.875rem] font-[400]">
                        NEW PRODUCT
                      </p>
                    ) : null}
                    <h3 className="font-[700] text-[1.75rem] tracking-[0.0625rem]">
                      {product.name}
                    </h3>
                    <p className="leading-[1.5625rem] font-[500]">
                      {product.description}
                    </p>
                    <Link href={`/products/${product.id}`}>
                      <ProductButton />
                    </Link>
                  </div>
                </div>
              );
            })}
          <div className="p-[1.5rem] pt-[7rem]">
            <CategoryList />
          </div>
        </div>
      </div>
    );
  }
};

export default CategoryPage;
