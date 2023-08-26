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
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error, "DELETE_PRODUCT_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
};
