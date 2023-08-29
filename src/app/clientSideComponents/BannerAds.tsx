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
      <div className="flex flex-col gap-6">
        {bannerAdsArray.map((bannerAd, index) => {
          return (
            <div key={bannerAd.name}>
              {index === 0 ? (
                <div className="p-4 bg-orange-default w-full h-[37.5rem] flex flex-col justify-center items-center rounded-lg relative md:h-[45rem] md:w-full lg:overflow-hidden lg:justify-end lg:h-[35rem]">
                  <div className="flex flex-col justify-center items-center absolute p-4 mb-[3rem] md:gap-[4rem] lg:flex-row lg:mb-0 xl:gap-[10rem] lg:relative lg:top-[3rem]">
                    <div className="relative flex justify-center items-center lg:h-full lg:top-[0] ">
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
                      <Image
                        src={bannerAd.imageSizes.desktop.link}
                        alt=""
                        width={410.234}
                        height={493}
                        className="relative hidden lg:block"
                      />
                      <div className="w-full lg:hidden">
                        <Image
                          src={"/content/home/desktop/pattern-circles.svg"}
                          alt=""
                          width={197.212}
                          height={237}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center text-center w-[17rem] md:gap-[2rem] md:w-[51%] lg:text-start lg:items-start lg:w-[21.8125rem] lg:self-start">
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
                  <div className="flex flex-col gap-4 items-start justify-center text-start w-[17rem] absolute h-full p-[2rem] lg:w-full lg:px-[5rem]">
                    <h3 className="font-[700] text-[1.75rem] text-black">
                      {bannerAd.name}
                    </h3>
                    <ProductButtonTwo />
                  </div>
                  <Image
                    src={bannerAd.imageSizes.mobile.link}
                    alt=""
                    width={700}
                    height={367}
                    className="rounded-lg md:hidden"
                  />
                  <Image
                    src={bannerAd.imageSizes.tablet.link}
                    alt=""
                    width={761.494}
                    height={527}
                    className="rounded-lg hidden md:block lg:hidden w-full"
                  />
                  <Image
                    src={bannerAd.imageSizes.desktop.link}
                    alt=""
                    width={1247.239}
                    height={863}
                    className="rounded-lg hidden  lg:block w-full"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 md:flex-row md:h-[20rem] lg:justify-between lg:w-full ">
                  <Image
                    src={bannerAd.imageSizes.mobile.link}
                    alt=""
                    width={700}
                    height={367}
                    className="rounded-lg md:hidden"
                  />
                  <Image
                    src={bannerAd.imageSizes.tablet.link}
                    alt=""
                    width={459.244}
                    height={577.247}
                    className="rounded-lg hidden md:block lg:hidden w-full"
                  />
                  <Image
                    src={bannerAd.imageSizes.desktop.link}
                    alt=""
                    width={731.539}
                    height={919}
                    className="rounded-lg hidden lg:block h-full w-[21.1875rem] xl:w-full"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center text-start w-full h-[12.5rem] p-[2rem] bg-gray rounded-lg md:h-full md:w-full lg:w-[21.1875rem] lg:h-[20rem] xl:px-[3rem] xl:h-full xl:w-full">
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
