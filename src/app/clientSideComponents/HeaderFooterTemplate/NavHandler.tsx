"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import { blue } from "@mui/material/colors";

type Props = {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
};

const NavHandler = (props: Props) => {
  const { setNavOpen, navOpen } = props;
  return (
    <div>
      <button className="" onClick={() => setNavOpen((prev) => !prev)}>
        {navOpen === false ? (
          <MenuIcon sx={{ color: blue[50] }} />
        ) : (
          <CloseIcon sx={{ color: blue[50] }} />
        )}
      </button>
    </div>
  );
};

export default NavHandler;
