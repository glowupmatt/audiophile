import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const HeaderFooterTemplate = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="max-w-[90rem]">
        <NavBar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default HeaderFooterTemplate;
