"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import NavHandler from "./NavHandler";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  console.log(cartOpened);
  return (
    <div>
      <nav className="bg-black w-full flex justify-between items-center p-4 md:gap-[3rem]">
        <NavHandler navOpen={navOpen} setNavOpen={setNavOpen} />
        <Link
          href={"/"}
          className="text-white text-[1.5rem] font-bold md:self-center md:w-full"
        >
          audiophile
        </Link>
        <button onClick={() => setCartOpened((prev) => !prev)}>
          <ShoppingCartIcon sx={{ color: blue[50] }} />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
