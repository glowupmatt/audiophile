import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deepOrange } from "@mui/material/colors";

type Props = {};

const ShopButton = (props: Props) => {
  return (
    <button className="">
      <div className="flex items-center justify-center">
        <p className="text-[#7e7e7e] hover:text-orange-default font-semibold text-[13px]">
          SHOP
        </p>
        <KeyboardArrowRightIcon sx={{ color: deepOrange[400] }} />
      </div>
    </button>
  );
};

export default ShopButton;
