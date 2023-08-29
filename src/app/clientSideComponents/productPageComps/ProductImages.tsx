import React from "react";
import Image from "next/image";
import { ProductTypes } from "@/sampleData";

type Props = {
  product: ProductTypes;
};

const ProductImages = (props: Props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-[1.3rem] mt-[5.5rem]">
      {product.productPhotosMobile.slice(1, 4).map((photo, index) => (
        <div key={index}>
          <Image
            alt=""
            src={photo.url}
            width={758}
            height={505}
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
