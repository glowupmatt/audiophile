import React from "react";
import Image from "next/image";
import ProductButton from "@/app/libs/assetComponents/ProductButton";
import { ProductTypes } from "@/sampleData";

type Props = {
  item: ProductTypes;
};

const RecommendProduct = (props: Props) => {
  const { item } = props;
  return (
    <div className="w-full flex justify-center items-center flex-col gap-[1.5rem]">
      <div className="bg-gray w-full rounded-md flex justify-center items-center">
        <Image
          alt=""
          src={item.categoryImageSizes[0].mobileUrl}
          width={100}
          height={100}
          className="rounded-md md:hidden w-[50%]"
        />
      </div>
      <div className="md:h-[8rem] md:w-[13rem] md:relative">
        <Image
          alt=""
          src={item.categoryImageSizes[0].tabletUrl}
          fill
          className="rounded-md hidden md:block lg:hidden"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <p>{item.name}</p>
        <ProductButton />
      </div>
    </div>
  );
};

export default RecommendProduct;
