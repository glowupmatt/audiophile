import React, { useEffect, useState } from "react";
import CreateProductStandardInfo from "./CreateNewProductStandardInfo";
import CreateProductImages from "./CreateProductImages";
import CreateProductBoxItems from "./CreateProductBoxItems";
import CreateProductFinal from "./CreateProductFinalPage";
import CreateProductFeatures from "./CreateProductFeatures";

type Props = {};
export type ProductType = {
  category: String;
  name: String;
  description: String;
  price: string;
  inTheBox: {
    name: String;
    amount: string;
  }[];
  features: {
    featureDesc: String;
  }[];
  productPhotosMobile: {
    url: String;
  }[];
  productPhotosDesktop: {
    url: String;
  }[];
  productPhotosTablet: {
    url: String;
  }[];
  categoryImageSizes: {
    mobileUrl: String;
    tabletUrl: String;
    desktopUrl: String;
  };
};

const CreateProductMultiStepForm = (props: Props) => {
  const [page, setPage] = useState<number>(0);
  const [product, setProduct] = useState<ProductType>({
    category: "",
    name: "",
    description: "",
    price: "",
    inTheBox: [],
    features: [{ featureDesc: "" }, { featureDesc: "" }],
    productPhotosMobile: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
    productPhotosDesktop: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
    productPhotosTablet: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
    categoryImageSizes: {
      mobileUrl: "",
      tabletUrl: "",
      desktopUrl: "",
    },
  });

  const pageDirectory = [
    {
      pageNumber: 0,
      page: (
        <CreateProductStandardInfo
          page={page}
          setPage={setPage}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      pageNumber: 1,
      page: (
        <CreateProductBoxItems
          page={page}
          setPage={setPage}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      pageNumber: 2,
      page: (
        <CreateProductFeatures
          page={page}
          setPage={setPage}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      pageNumber: 3,
      page: (
        <CreateProductImages
          page={page}
          setPage={setPage}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      pageNumber: 4,
      page: (
        <CreateProductFinal
          page={page}
          setPage={setPage}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
  ];
  return (
    <div>
      {pageDirectory.map((slide, index) => (
        <div key={index}>{slide.pageNumber === page ? slide.page : null}</div>
      ))}
    </div>
  );
};

export default CreateProductMultiStepForm;
