import React from "react";
import { categoriesArray } from "../CategoryList";
import Link from "next/link";
import Image from "next/image";
import FooterBanner from "../FooterBanner";

type Props = {};

const Footer = (props: Props) => {
  const socialLinks = [
    {
      socialIcon: "/content/shared/desktop/icon-facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      socialIcon: "/content/shared/desktop/icon-twitter.svg",
      link: "https://www.twitter.com/",
    },
    {
      socialIcon: "/content/shared/desktop/icon-instagram.svg",
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <div>
      <FooterBanner />
      <footer className="bg-black text-white p-8 flex flex-col justify-center items-center">
        <h2 className="text-white text-[1.5rem] font-[700] p-[2rem]">
          audiophile
        </h2>
        <div className="flex flex-col gap-6 p-4">
          <ul className="flex flex-col justify-center items-center gap-6 text-white">
            <Link href="/" className="font-bold">
              HOME
            </Link>
            {categoriesArray.map((category) => {
              return (
                <Link
                  href={`category/${category.link}`}
                  key={category.name}
                  className="font-bold"
                >
                  {category.name}
                </Link>
              );
            })}
          </ul>
          <div className="flex flex-col justify-center items-center gap-6 text-center opacity-[.5]">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            {socialLinks.map((link) => {
              return (
                <Link href={link.link} key={link.socialIcon}>
                  <Image src={link.socialIcon} alt="" width={25} height={25} />
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
