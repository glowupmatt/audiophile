"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import ProductButton from "@/app/libs/assetComponents/ProductButton";
import Link from "next/link";
import CategoryList from "@/app/clientSideComponents/CategoryList";
import LoadingState from "@/app/clientSideComponents/loadingStates/LoadingState";

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
  console.log(category);

  if (data.length === 0) {
    return <LoadingState />;
  } else {
    return (
      <div>
        <h2 className="text-center text-[1.75rem] font-[700] tracking-[0.125rem] text-white bg-black p-4">
          {`${selectedCategory.toUpperCase()}`}S
        </h2>
        <div>
          {data
            .filter((product) => selectedCategory === product.category)
            .map((product, index) => {
              return (
                <div key={product.id}>
                  <div className="p-[1.5rem] mt-[4rem]">
                    <Image
                      alt=""
                      src={product.categoryImageSizes[0].mobileUrl}
                      width={220}
                      height={243}
                      priority={true}
                      className="h-auto w-full rounded"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[1.5rem] text-center p-[1.5rem] leading-none">
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
          <div className="p-[1.5rem]">
            <CategoryList />
          </div>
        </div>
      </div>
    );
  }
};

export default CategoryPage;
