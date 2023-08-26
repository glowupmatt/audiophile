"use client";

import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string | null | undefined;
};

const DashBoardHeader = (props: Props) => {
  const { open, setOpen, userName } = props;
  const [data, setData] = useState([]);
  const menuHandler = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/getProducts");
        const products = await res.json();
        setData(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const productTotal = data.length;
  return (
    <nav className="p-4">
      <div className="flex justify-between w-full items-center">
        <Link onClick={menuHandler} href={"/dashboard"} className="z-10">
          Dashboard
        </Link>
        <button onClick={menuHandler} className="z-10">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {/*prettier-ignore*/}
      <div
        className={classNames(
          "flex flex-col gap-[3rem] right-0 top-0 p-[5rem] backdrop-blur-xl fixed bg-slate-300 h-screen text-black md:hidden",
          { "hidden": !open }
        )}
      >
        <div>
          <p className="font-bold">Welcome {userName}</p>
          <p>Products: {productTotal}</p>
        </div>
        <Link onClick={menuHandler} href={"/dashboard/createNewProduct"}>Create New Product</Link>
      </div>
    </nav>
  );
};

export default DashBoardHeader;
