import Image from "next/image";
import React from "react";
import ShopButton from "../libs/assetComponents/ShopButton";
import Link from "next/link";

type Props = {};

export const categoriesArray = [
  {
    name: "HEADPHONES",
    link: "Headphone",
    image: "/content/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    name: "SPEAKERS",
    link: "Speaker",
    image: "/content/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    name: "EARPHONES",
    link: "Earphone",
    image: "/content/shared/desktop/image-category-thumbnail-earphones.png",
  },
];
const CategoryList = (props: Props) => {
  return (
    <section className="">
      <div className="flex flex-col gap-[4rem] md:flex-row md:gap-[1rem] lg:items-center lg:justify-center">
        {categoriesArray.map((category) => {
          return (
            <Link
              href={`/category/${category.link}`}
              key={category.name}
              className="w-full h-[10.3125rem] bg-gray py-4 rounded-lg "
            >
              <div className="relative bottom-[4rem] flex justify-center items-center flex-col">
                <Image
                  src={category.image}
                  alt=""
                  width={150}
                  height={150}
                  className=""
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <h3 className="font-semibold text-[1rem]">{category.name}</h3>
                  <ShopButton />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
