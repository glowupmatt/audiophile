import Image from "next/image";
import React from "react";

type Props = {};

const FooterBanner = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-6 h-[45rem]">
      <Image
        alt=""
        src={"/content/shared/mobile/image-best-gear.jpg"}
        width={1149}
        height={766}
        className="rounded-md"
      />
      <h3 className="font-bold text-[1.75rem] text-center leading-[2rem] w-[90%] tracking-wide">
        BRINGING YOU THE <span className="text-orange-default">BEST</span> AUDIO
        GEAR
      </h3>
      <p className="text-center text-[.8rem]">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default FooterBanner;