"use client";

import React, { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashBoardHeader from "../components/DashBoardHeader";
import Link from "next/link";
import Image from "next/image";
import { currencyFormatter } from "@/helperFunctions";

export type ProductType = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  inTheBox: {
    name: string;
    amount: string;
  }[];
  features: {
    featureDesc: string;
  }[];
  productPhotosMobile: {
    url: string;
  }[];
  productPhotosDesktop: {
    url: string;
  }[];
  productPhotosTablet: {
    url: string;
  }[];
  categoryImageSizes: {
    mobileUrl: string;
    tabletUrl: string;
    desktopUrl: string;
  }[];
};

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ProductType[]>([]);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/register");
    }
  }, [session?.status, router]);

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
  const userName = session.data?.user?.name;
  return (
    <div>
      <DashBoardHeader setOpen={setOpen} open={open} userName={userName} />
      {!data ? (
        <p className="text-[10rem]">Loading...</p>
      ) : (
        <div className="flex flex-col gap-4 p-4">
          <p>Products</p>
          <p>Select Product To Edit</p>
          {data?.map((product, index) => {
            return (
              <Link
                href={`/dashboard/${product.id}`}
                key={product?.id}
                className="flex-col flex bg-gray-300 p-4 rounded-md"
              >
                <div className="flex gap-4 items-center w-full">
                  {product?.categoryImageSizes.map((image, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={image.mobileUrl}
                          alt={product?.name}
                          width={100}
                          height={100}
                          className="rounded-md"
                        />
                      </div>
                    );
                  })}
                  <div className="self-start">
                    <p>{product.name}</p>
                    <p>{currencyFormatter(product.price)}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
