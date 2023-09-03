"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import classNames from "classnames";
import { Provider } from "react-redux";
import store from "@/app/redux/store";

type Props = {
  children: React.ReactNode;
};

const HeaderFooterTemplate = (props: Props) => {
  const { children } = props;
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center flex-col">
        <div
          className={classNames("w-screen relative", {
            "md:overflow-hidden md:h-screen":
              navOpen === true || cartOpened === true,
          })}
        >
          <div className="w-screen bg-black">
            <NavBar
              navOpen={navOpen}
              setNavOpen={setNavOpen}
              cartOpened={cartOpened}
              setCartOpened={setCartOpened}
            />
          </div>
          <div
            className={classNames("flex flex-col justify-center items-center", {
              " inset-0 bg-gray opacity-50 blur-xl":
                navOpen === true || cartOpened === true,
            })}
          >
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default HeaderFooterTemplate;
