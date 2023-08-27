import React from "react";

type Props = {};

const ProductButtonBlack = (props: Props) => {
  return (
    <button className="w-[10rem] h-[3rem] bg-black hover:border-solid hover:border-[1px] hover:border-black hover:bg-transparent hover:text-black">
      <p className="text-white font-semibold text-[13px]">SEE PRODUCT</p>
    </button>
  );
};

export default ProductButtonBlack;
