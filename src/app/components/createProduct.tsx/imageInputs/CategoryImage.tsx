"use client";

import React, { useState } from "react";
import { ProductType } from "../CreateProductMultiStepForm";
import classNames from "classnames";

type Props = {
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  urlRegex: RegExp;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function CategoryImage({ setProduct, urlRegex, setPage }: Props) {
  const [input, setInput] = useState({
    images: { imageLinkOne: "", imageLinkTwo: "", imageLinkThree: "" },
  });
  const [submit, setSubmit] = useState(false);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct((prev) => ({
      ...prev,
      categoryImageSizes: {
        mobileUrl: input.images.imageLinkOne,
        tabletUrl: input.images.imageLinkTwo,
        desktopUrl: input.images.imageLinkThree,
      },
    }));
    setPage((prev) => prev + 1);
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="border-solid border-[2px] rounded-md p-2 w-full h-full"
        name="mobileImage"
        id="mobileImage"
        placeholder="Input Image Link"
        onChange={(e) =>
          setInput({
            ...input,
            images: { ...input.images, imageLinkOne: e.target.value },
          })
        }
      />
      <input
        type="text"
        className="border-solid border-[2px] rounded-md p-2 w-full h-full"
        name="tabletImage"
        id="tabletImage"
        placeholder="Input Image Link"
        onChange={(e) =>
          setInput({
            ...input,
            images: { ...input.images, imageLinkTwo: e.target.value },
          })
        }
      />
      <input
        type="text"
        className="border-solid border-[2px] rounded-md p-2 w-full h-full"
        name="desktopImage"
        id="desktopImage"
        placeholder="Input Image Link"
        onChange={(e) =>
          setInput({
            ...input,
            images: { ...input.images, imageLinkThree: e.target.value },
          })
        }
      />
      <button
        disabled={
          input.images.imageLinkOne.length === 0 &&
          input.images.imageLinkTwo.length === 0 &&
          input.images.imageLinkThree.length === 0
        }
        type="submit"
        className={classNames("p-3 bg-slate-200 rounded-md", {
          hidden: submit === true,
        })}
      >
        Submit Images
      </button>
    </form>
  );
}

export default CategoryImage;
