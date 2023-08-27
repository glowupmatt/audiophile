import React from "react";

type Props = {};

const ProductButtonTwo = (props: Props) => {
  return (
    <button className="w-[10rem] h-[3rem] bg-transparent border-solid border-[1px] border-black hover:bg-black">
      <p className="text-black font-semibold hover:text-white text-[13px]">
        SEE PRODUCT
      </p>
    </button>
  );
};

export default ProductButtonTwo;
