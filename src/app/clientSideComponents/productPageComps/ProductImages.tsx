import React from "react";
import Image from "next/image";
import { ProductTypes } from "@/sampleData";
import classNames from "classnames";

type Props = {
  product: ProductTypes;
};

const ProductImages = (props: Props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-[1.3rem] mt-[5.5rem] ">
      {product.productPhotosMobile.slice(1, 4).map((photo, index) => (
        <div key={index} className="md:hidden">
          <Image
            alt=""
            src={photo.url}
            width={758}
            height={505}
            className="rounded-md md:hidden"
          />
        </div>
      ))}
      {product.productPhotosTablet.slice(1, 4).map((photo, index) => (
        <div key={index} className="w-full h-full">
          <Image
            alt=""
            src={photo.url}
            width={758}
            height={505}
            className={classNames("rounded-md hidden md:block lg:hidden")}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
