import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";

export const GET = async (
  request: Request,
  { params }: { params: { productId: string } }
) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
      select: {
        category: true,
        name: true,
        description: true,
        price: true,
        features: true,
        inTheBox: true,
        productPhotosMobile: true,
        productPhotosDesktop: true,
        productPhotosTablet: true,
        categoryImageSizes: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error, "DELETE_PRODUCT_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
};
