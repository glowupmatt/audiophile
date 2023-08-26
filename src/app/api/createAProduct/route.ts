import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const {
      category,
      name,
      description,
      price,
      features,
      inTheBox,
      productPhotosMobile,
      productPhotosDesktop,
      productPhotosTablet,
      categoryImageSizes,
    } = body;

    if (
      !category ||
      !name ||
      !description ||
      !price ||
      !features ||
      !inTheBox ||
      !productPhotosMobile ||
      !productPhotosDesktop ||
      !productPhotosTablet ||
      !categoryImageSizes
    ) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        category,
        name,
        description,
        price,
        features: {
          createMany: {
            data: [
              ...features.map((feature: { featureDesc: string }) => ({
                featureDesc: feature.featureDesc,
              })),
            ],
          },
        },
        inTheBox: {
          createMany: {
            data: [
              ...inTheBox.map((box: { name: string; amount: string }) => ({
                name: box.name,
                amount: box.amount,
              })),
            ],
          },
        },
        productPhotosMobile: {
          createMany: {
            data: [
              ...productPhotosMobile.map((image: { url: string }) => ({
                url: image.url,
              })),
            ],
          },
        },
        productPhotosDesktop: {
          createMany: {
            data: [
              ...productPhotosDesktop.map((image: { url: string }) => ({
                url: image.url,
              })),
            ],
          },
        },
        productPhotosTablet: {
          createMany: {
            data: [
              ...productPhotosTablet.map((image: { url: string }) => ({
                url: image.url,
              })),
            ],
          },
        },
        categoryImageSizes: {
          create: [
            {
              mobileUrl: categoryImageSizes.mobileUrl,
              tabletUrl: categoryImageSizes.tabletUrl,
              desktopUrl: categoryImageSizes.desktopUrl,
            },
          ],
        },
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error, "CREATE_A_PRODUCT_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
};
