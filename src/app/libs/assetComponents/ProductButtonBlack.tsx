import React from "react";

type Props = {};

const ProductButtonBlack = (props: Props) => {
  return (
    <button className="w-[10rem] h-[3rem] bg-black hover:bg-white hover:text-black text-white ">
      <p className=" font-semibold text-[13px]">SEE PRODUCT</p>
    </button>
  );
};

export default ProductButtonBlack;
