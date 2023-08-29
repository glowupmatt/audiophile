import { ProductTypes } from "@/sampleData";
import React from "react";

type Props = {
  product: ProductTypes;
};

function Features({ product }: Props) {
  return (
    <div className="flex flex-col gap-[1.5rem] mt-[6.44rem]">
      <h3 className="text-[1.5rem] font-[700] leading-[2.25rem] tracking-[0.05356rem]">
        Features
      </h3>
      {product.features.map((feature, index) => (
        <div key={index}>
          <p className="font-[500] leading-[1.5625rem] opacity-[.6]">
            {feature.featureDesc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Features;
