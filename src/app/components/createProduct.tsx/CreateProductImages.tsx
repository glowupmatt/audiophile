"use client";

import React, { useState } from "react";
import { ProductType } from "./CreateProductMultiStepForm";
import MobileImage from "./imageInputs/MobileImage";
import DesktopImage from "./imageInputs/DesktopImage";
import TabletImage from "./imageInputs/TabletImage";
import CategoryImage from "./imageInputs/CategoryImage";
import classNames from "classnames";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
};

const CreateProductImages = (props: Props) => {
  const { page, setPage, product, setProduct } = props;
  const [inputBox, setInputBox] = useState(1);

  const productPhotosMobile = product.productPhotosMobile;
  const productPhotosDesktop = product.productPhotosDesktop;
  const productPhotosTablet = product.productPhotosTablet;
  const categoryImageSizes = product.categoryImageSizes;
  const urlRegex =
    /https?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]/i;

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex flex-col gap-2 bg-slate-500 p-4 rounded-md">
        <p className="text-white">Set Mobile Photos</p>
        <MobileImage
          productPhotosMobile={productPhotosMobile}
          setProduct={setProduct}
          setInputBox={setInputBox}
          urlRegex={urlRegex}
        />
      </div>
      {/* prettier-ignore */}
      <div
        className={classNames("flex flex-col gap-2 bg-slate-500 p-4 rounded-md", { "hidden": inputBox < 2 })}
      >
        <p className="text-white">Set Tablet Photos</p>
        <TabletImage
          productPhotosTablet={productPhotosTablet}
          setProduct={setProduct}
          setInputBox={setInputBox}
            urlRegex={urlRegex}
        />
      </div>
      <div
        className={classNames(
          "flex flex-col gap-2 bg-slate-500 p-4 rounded-md",
          { hidden: inputBox < 3 }
        )}
      >
        <p className="text-white">Set Desktop Photos</p>
        <DesktopImage
          productPhotosDesktop={productPhotosDesktop}
          setInputBox={setInputBox}
          setProduct={setProduct}
          urlRegex={urlRegex}
        />
      </div>
      <div
        className={classNames(
          "flex flex-col gap-2 bg-slate-500 p-4 rounded-md",
          { hidden: inputBox < 4 }
        )}
      >
        <p className="text-white">Set Category Photos</p>
        <CategoryImage
          setProduct={setProduct}
          urlRegex={urlRegex}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default CreateProductImages;
