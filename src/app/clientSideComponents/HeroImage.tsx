import React from "react";
import Image from "next/image";
import ShopButton from "../libs/assetComponents/ShopButton";
import ProductButton from "../libs/assetComponents/ProductButton";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-center">
      <div className="absolute flex flex-col justify-between items-center text-center h-[23rem] p-[1.5rem]">
        <p className="tracking-[.7rem] text-gray opacity-[.6] font-[200]">
          NEW PRODUCT
        </p>
        <h3 className="text-gray text-[2rem]">XX99 MARK II HEADPHONES</h3>
        <p className="text-gray opacity-[.6] text-center text-[1rem] font-[500] tracking-[.1rem]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ProductButton />
      </div>
      <div className="">
        <Image
          alt="header image"
          src="/content/home/mobile/image-header.jpg"
          width={577.6}
          height={522}
        />
      </div>
    </div>
  );
};

export default HeroImage;
