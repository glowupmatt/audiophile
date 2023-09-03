"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import NavHandler from "./NavHandler";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import CategoryList from "../CategoryList";
import CartInventory from "../CartInventory";

type Props = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpened: boolean;
};

const NavBar = (props: Props) => {
  const { navOpen, setNavOpen, cartOpened, setCartOpened } = props;

  return (
    <div className="w-full h-full mx-auto max-w-[90rem]">
      <nav className="bg-black w-full flex justify-between items-center p-4 md:gap-[3rem] lg:h-[6rem] lg:px-[10rem]">
        <div className="lg:hidden">
          <NavHandler navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        <Link
          href={"/"}
          className="text-white text-[1.5rem] font-bold md:self-center md:w-full lg:w-auto"
        >
          audiophile
        </Link>
        <div className="hidden lg:flex text-white justify-center items-center w-full gap-[3rem]">
          <Link href={"/"} className="hover:text-orange-default font-bold">
            HOME
          </Link>
          <Link
            href={"/category/Headphone"}
            className="hover:text-orange-default font-bold"
          >
            HEADPHONES
          </Link>
          <Link
            href={"/category/Speaker"}
            className="hover:text-orange-default font-bold"
          >
            SPEAKERS
          </Link>
          <Link
            href={"/category/Earphone"}
            className="hover:text-orange-default font-bold"
          >
            EARPHONES
          </Link>
        </div>
        <button onClick={() => setCartOpened((prev) => !prev)}>
          <ShoppingCartIcon sx={{ color: blue[50] }} />
        </button>
      </nav>
      {/* prettier-ignore */}
      <div className={classNames("bg-white p-[2rem] pt-[5rem]  w-full absolute z-10", { "block": navOpen === true }, {"hidden": navOpen === false})} onClick={() => setNavOpen((prev) => !prev)}>
        <CategoryList />
      </div>
      {/* prettier-ignore */}
      <div
        className={classNames("flex justify-center items-center absolute z-10 h-[30.5rem] w-full p-[2rem] md:justify-end max-w-[90rem]", { "block": cartOpened === true },{ "hidden": cartOpened === false })}
      >
        <CartInventory setCartOpened={setCartOpened}/>
      </div>
    </div>
  );
};

export default NavBar;
