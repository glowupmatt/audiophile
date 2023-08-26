import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";

export const GET = async (request: Request) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        features: true,
        inTheBox: true,
        productPhotosMobile: true,
        productPhotosDesktop: true,
        productPhotosTablet: true,
        categoryImageSizes: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error, "GET_ALL_PRODUCTS_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
};
