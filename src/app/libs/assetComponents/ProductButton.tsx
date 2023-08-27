import React from "react";

type Props = {};

const ProductButton = (props: Props) => {
  return (
    <button className="w-[10rem] h-[3rem] bg-orange-default hover:bg-orange-light">
      <p className="text-white font-semibold text-[13px]">SEE PRODUCT</p>
    </button>
  );
};

export default ProductButton;
