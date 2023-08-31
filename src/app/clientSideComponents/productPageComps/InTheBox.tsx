import { ProductTypes } from "@/sampleData";
import React from "react";

type Props = {
  product: ProductTypes;
};

const InTheBox = (props: Props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-[1.5rem] mt-[6.44rem] md:flex-row md:w-full md:justify-evenly lg:flex-col lg:justify-start lg:items-center">
      <h3 className="text-[1.5rem] font-[700] leading-[2.25rem] tracking-[0.05356rem] md:text-start md:w-[50%] md:text-[2rem]">
        IN THE BOX
      </h3>
      <div className="md:flex md:flex-col md:w-[50%] md:gap-[.5rem]">
        {product.inTheBox.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start justify-start gap-[1.5rem]"
          >
            <p className="text-orange-default">{item.amount}x</p>
            <p className="font-[500] leading-[1.5625rem] opacity-[.6]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InTheBox;
