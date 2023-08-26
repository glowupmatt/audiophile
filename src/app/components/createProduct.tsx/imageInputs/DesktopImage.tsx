"use state";

import React, { useEffect, useState } from "react";
import { ProductType } from "../CreateProductMultiStepForm";
import classNames from "classnames";

type Props = {
  productPhotosDesktop: {
    url: String;
  }[];
  setInputBox: React.Dispatch<React.SetStateAction<number>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  urlRegex: RegExp;
};

const DesktopImage = (props: Props) => {
  const { productPhotosDesktop, setInputBox, setProduct, urlRegex } = props;
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
    images: {
      imageLinkOne: "",
      imageLinkTwo: "",
      imageLinkThree: "",
      imageLinkFour: "",
    },
    trigger: false,
  });
  const [followsRegex, setFollowsRegex] = useState(false);

  function doesNotMatchURL(
    linkOne: string,
    linkTwo: string,
    linkThree: string,
    linkFour: string
  ) {
    if (
      urlRegex.test(linkOne) &&
      urlRegex.test(linkTwo) &&
      urlRegex.test(linkThree) &&
      urlRegex.test(linkFour)
    ) {
      input.trigger = true;
    }
  }

  doesNotMatchURL(
    input.images.imageLinkOne,
    input.images.imageLinkTwo,
    input.images.imageLinkThree,
    input.images.imageLinkFour
  );
  useEffect(() => {
    if (input.trigger === true) {
      setFollowsRegex((prev) => !prev);
    }
  }, [input.trigger]);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputBox((prev) => prev + 1);
    setProduct((prev) => ({
      ...prev,
      productPhotosDesktop: [
        { url: input.images.imageLinkOne },
        { url: input.images.imageLinkTwo },
        { url: input.images.imageLinkThree },
        { url: input.images.imageLinkFour },
      ],
    }));
    setSubmit(true);
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
      {productPhotosDesktop.map((image, index) => {
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (index === 0) {
            setInput({
              ...input,
              images: { ...input.images, imageLinkOne: e.target.value },
            });
          } else if (index === 1) {
            setInput({
              ...input,
              images: { ...input.images, imageLinkTwo: e.target.value },
            });
          } else if (index === 2) {
            setInput({
              ...input,
              images: { ...input.images, imageLinkThree: e.target.value },
            });
          } else {
            setInput({
              ...input,
              images: { ...input.images, imageLinkFour: e.target.value },
            });
          }
        };
        return (
          <div key={index}>
            <input
              type="text"
              className="border-solid border-[2px] rounded-md p-2 w-full h-full"
              name="imageLink"
              id="imageLink"
              placeholder="Input Image Link"
              onChange={onChangeHandler}
            />
          </div>
        );
      })}
      {/* prettier-ignore */}
      <button
        disabled={followsRegex === false}
        type="submit"
        className={classNames("p-3 bg-slate-200 rounded-md", {
          "hidden": submit === true,
        })}
      >
        Submit Images
      </button>
    </form>
  );
};

export default DesktopImage;
