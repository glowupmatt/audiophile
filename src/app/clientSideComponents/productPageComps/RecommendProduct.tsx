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
    <div className="w-full flex justify-center items-center flex-col gap-[1.5rem] md:h-[29.4375rem]">
      <div className="bg-gray w-full rounded-md flex justify-center items-center">
        <Image
          alt=""
          src={item.categoryImageSizes[0].mobileUrl}
          width={100}
          height={100}
          className="rounded-md md:hidden w-[50%]"
        />
      </div>
      <div className="md:relative md:bg-gray md:w-[13.9375rem] md:h-[19.875rem] md:rounded-md md:flex md:justify-center md:items-center lg:w-[21.875rem] lg:h-[19.875rem]">
        <Image
          alt=""
          src={item.categoryImageSizes[0].desktopUrl}
          fill
          className="rounded-md hidden md:block object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[1.5rem] font-[700] text-center">{item.name}</p>
        <ProductButton />
      </div>
    </div>
  );
};

export default RecommendProduct;
