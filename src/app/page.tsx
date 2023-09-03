import Image from "next/image";
import Link from "next/link";
import CategoryList from "./clientSideComponents/CategoryList";
import HeroImage from "./clientSideComponents/HeroImage";
import BannerAds from "./clientSideComponents/BannerAds";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-screen bg-black flex flex-col justify-center items-center">
        <HeroImage />
      </div>
      <div className="p-6 lg:px-[10rem] lg:py-6 max-w-[90rem] ">
        <div className="py-[7rem]">
          <CategoryList />
        </div>
        <BannerAds />
      </div>
    </main>
  );
}
