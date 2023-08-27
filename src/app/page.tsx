import Image from "next/image";
import Link from "next/link";
import CategoryList from "./clientSideComponents/CategoryList";
import HeroImage from "./clientSideComponents/HeroImage";
import BannerAds from "./clientSideComponents/BannerAds";

export default function Home() {
  return (
    <main className="">
      <HeroImage />
      <div className="p-6">
        <CategoryList />
        <BannerAds />
      </div>
    </main>
  );
}
