import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthContext from "./context/AuthContext";
import HeaderFooterTemplate from "./clientSideComponents/HeaderFooterTemplate/HeaderFooterTemplate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "audiophile",
  description: "Experience natural, lifelike audio.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderFooterTemplate>
          <AuthContext>{children}</AuthContext>
        </HeaderFooterTemplate>
      </body>
    </html>
  );
}
