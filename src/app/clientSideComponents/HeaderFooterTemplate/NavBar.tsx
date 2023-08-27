"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import NavHandler from "./NavHandler";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";

type Props = {};

const NavBar = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  console.log(cartOpened);
  return (
    <div>
      <nav className="bg-black w-full flex justify-between items-center p-4">
        <NavHandler navOpen={navOpen} setNavOpen={setNavOpen} />
        <h2 className="text-white text-[1.5rem] font-bold">audiophile</h2>
        <button onClick={() => setCartOpened((prev) => !prev)}>
          <ShoppingCartIcon sx={{ color: blue[50] }} />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
