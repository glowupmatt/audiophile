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
    <div className="flex flex-col gap-[1.3rem] mt-[5.5rem] md:grid md:grid-cols-2 md:grid-rows-2 md:h-[23rem] lg:h-[37rem]">
      {product.productPhotosDesktop.slice(1, 4).map((photo, index) => (
        <div
          key={index}
          className={classNames("object-cover", {
            "md:row-start-1 md:row-end-3 items-stretch": index === 2,
          })}
        >
          <Image
            alt=""
            src={photo.url}
            width={1009.583}
            height={698.081}
            className={classNames("rounded-md h-full w-full object-cover", {
              "h-full": index === 2,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
