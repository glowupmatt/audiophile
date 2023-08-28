import React from "react";
import classNames from "classnames";
import Image from "next/image";
import ProductButtonTwo from "../libs/assetComponents/ProductButtonTwo";
import ProductButtonBlack from "../libs/assetComponents/ProductButtonBlack";

type Props = {};

const BannerAds = (props: Props) => {
  const bannerAdsArray = [
    {
      name: "ZX9 SPEAKER",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
      imageSizes: {
        mobile: {
          link: "/content/home/mobile/image-speaker-zx9.png",
        },
        tablet: {
          link: "/content/home/tablet/image-speaker-zx9.png",
        },
        desktop: {
          link: "/content/home/desktop/image-speaker-zx9.png",
        },
      },
    },
    {
      name: "ZX7 SPEAKER",
      imageSizes: {
        mobile: {
          link: "/content/home/mobile/image-speaker-zx7.jpg",
        },
        tablet: {
          link: "/content/home/tablet/image-speaker-zx7.jpg",
        },
        desktop: {
          link: "/content/home/desktop/image-speaker-zx7.jpg",
        },
      },
    },
    {
      name: "YX1 EARPHONES",
      imageSizes: {
        mobile: {
          link: "/content/home/mobile/image-earphones-yx1.jpg",
        },
        tablet: {
          link: "/content/home/tablet/image-earphones-yx1.jpg",
        },
        desktop: {
          link: "/content/home/desktop/image-earphones-yx1.jpg",
        },
      },
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-6 md:">
        {bannerAdsArray.map((bannerAd, index) => {
          return (
            <div key={bannerAd.name}>
              {index === 0 ? (
                <div className="p-4 bg-orange-default w-full h-[37.5rem] flex flex-col justify-center items-center rounded-lg relative md:h-[45rem] md:w-full">
                  <div className="flex flex-col justify-center items-center absolute p-4 mb-[3rem] md:gap-[4rem]">
                    <div className="relative flex justify-center items-center">
                      <Image
                        src={bannerAd.imageSizes.mobile.link}
                        alt=""
                        width={150}
                        height={150}
                        className="absolute md:hidden"
                      />
                      <Image
                        src={bannerAd.imageSizes.tablet.link}
                        alt=""
                        width={150}
                        height={150}
                        className="absolute hidden md:block lg:hidden"
                      />
                      <div className="w-full">
                        <Image
                          src={"/content/home/desktop/pattern-circles.svg"}
                          alt=""
                          width={197.212}
                          height={237}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center text-center w-[17rem] md:gap-[2rem] md:w-[51%]">
                      <h3 className="font-[700] text-[2.25rem] text-white w-[80%] md:text-[3.5rem] md:leading-[4rem]">
                        {bannerAd.name}
                      </h3>
                      <p className="text-white opacity-[.8]">
                        {bannerAd.description}
                      </p>
                      <ProductButtonBlack />
                    </div>
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="relative">
                  <div className="flex flex-col gap-4 items-start justify-center text-start w-[17rem] absolute h-full p-[2rem]">
                    <h3 className="font-[700] text-[1.75rem] text-black">
                      {bannerAd.name}
                    </h3>
                    <ProductButtonTwo />
                  </div>
                  <Image
                    src={bannerAd.imageSizes.mobile.link}
                    alt=""
                    width={529}
                    height={367}
                    className="rounded-lg md:hidden"
                  />
                  <Image
                    src={bannerAd.imageSizes.tablet.link}
                    alt=""
                    width={761.494}
                    height={527}
                    className="rounded-lg hidden md:block lg:hidden"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 md:flex-row md:h-[20rem]">
                  <Image
                    src={bannerAd.imageSizes.mobile.link}
                    alt=""
                    width={529}
                    height={367}
                    className="rounded-lg md:hidden"
                  />
                  <Image
                    src={bannerAd.imageSizes.tablet.link}
                    alt=""
                    width={459.244}
                    height={577.247}
                    className="rounded-lg hidden md:block lg:hidden"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center text-start w-full h-[12.5rem] p-[2rem] bg-gray rounded-lg md:h-full md:w-[21.1875rem]">
                    <h3 className="font-[700] text-[1.75rem] text-black">
                      {bannerAd.name}
                    </h3>
                    <ProductButtonTwo />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerAds;
