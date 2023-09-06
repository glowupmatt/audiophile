import Image from "next/image";
import React from "react";

type Props = {};

const FooterBanner = (props: Props) => {
  return (
    <div className="flex flex-col gap-7 items-center h-full justify-center p-6 md:h-[45rem] lg:flex-row-reverse lg:w-full lg:h-full mb-[6rem] lg:max-w-[62.375rem]">
      <Image
        alt=""
        src={"/content/shared/mobile/image-best-gear.jpg"}
        width={1149}
        height={766}
        className="rounded-md md:hidden"
      />
      <Image
        alt=""
        src={"/content/shared/tablet/image-best-gear.jpg"}
        width={1149}
        height={766}
        className="rounded-md hidden md:block lg:hidden"
      />
      <div className="xl:hidden">
        <Image
          alt=""
          src={"/content/shared/desktop/image-best-gear.jpg"}
          width={1644}
          height={1096}
          className="rounded-md hidden lg:block h-full w-full max-w-[33.75rem] max-h-[36.75rem]"
        />
      </div>
      <Image
        alt=""
        src={"/content/shared/desktop/image-best-gear.jpg"}
        width={1644}
        height={1096}
        className="rounded-md hidden h-full w-full max-w-[33.75rem] max-h-[36.75rem] lg:hidden xl:block"
      />
      <div className="flex flex-col items-center gap-7 lg:w-[27.8125rem] ">
        <h3 className="font-bold text-[1.75rem] text-center leading-[2rem] w-[90%] tracking-wide md:w-[35.8125rem] md:text-[2.5rem] md:leading-[3rem] lg:text-start lg:w-full">
          BRINGING YOU THE <span className="text-orange-default">BEST</span>{" "}
          AUDIO GEAR
        </h3>
        <p className="text-center text-[.8rem] leading-[1.5rem] md:w-[35.8125rem] md:font-[500] md:leading-[1.5625rem] lg:text-start lg:w-[27.8125rem]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default FooterBanner;
