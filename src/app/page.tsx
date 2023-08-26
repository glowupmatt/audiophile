import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>NextAuth.js</h1>
      <Link href={"/register"}>Register Page</Link>
      <Link href={"/dashboard"}>Login Page</Link>
    </main>
  );
}
