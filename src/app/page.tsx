import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative w-full h-[30rem]">
        <Image
          alt="header image"
          src="/content/home/mobile/image-header.jpg"
          fill
        />
      </div>
    </main>
  );
}
