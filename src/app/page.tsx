import Image from "next/image";
import Link from "next/link";
import CategoryList from "./clientSideComponents/CategoryList";
import HeroImage from "./clientSideComponents/HeroImage";
import BannerAds from "./clientSideComponents/BannerAds";

export default function Home() {
  return (
    <main className="">
      <HeroImage />
      <div className="p-6 lg:px-[10rem] lg:py-6">
        <div className="py-[7rem]">
          <CategoryList />
        </div>
        <BannerAds />
      </div>
    </main>
  );
}
