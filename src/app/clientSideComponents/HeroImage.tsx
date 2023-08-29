import React from "react";
import Image from "next/image";
import ShopButton from "../libs/assetComponents/ShopButton";
import ProductButton from "../libs/assetComponents/ProductButton";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-center md:items-center lg:bg-black lg:h-[45.5625rem] lg:overflow-hidden lg:gap-[2rem] lg:px-[5rem] xl:px-[9rem]">
      <div className="absolute flex flex-col justify-between items-center text-center h-[23rem] p-[1.5rem] md:w-[23.6875rem] md:gap-[2rem] md:h-full md:p-0 md:justify-center lg:self-start lg:text-start lg:items-start">
        <p className="tracking-[.7rem] text-gray opacity-[.6] font-[200]">
          NEW PRODUCT
        </p>
        <h3 className="text-gray text-[2rem] md:text-[3.5rem] leading-[3rem] font-[700] md:leading-[4rem]">
          XX99 MARK II HEADPHONES
        </h3>
        <p className="text-gray opacity-[.6] text-center font-[200] text-[1rem] tracking-[.1rem] leading-[1.5rem] md:font-[200] lg:text-start">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ProductButton />
      </div>
      <div className="lg:self-end lg:w-[55%]">
        <Image
          alt="header image"
          src="/content/home/mobile/image-header.jpg"
          priority={true}
          width={577.6}
          height={522}
          quality={100}
          className="md:hidden"
        />
        <Image
          alt="header image"
          src="/content/home/tablet/image-header.jpg"
          priority={true}
          width={768.217}
          height={960}
          quality={100}
          className="hidden md:block lg:hidden"
        />
        <Image
          alt="header image"
          src="/content/home/desktop/image-hero.jpg.png"
          priority={true}
          width={708.8}
          height={886}
          quality={100}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroImage;
