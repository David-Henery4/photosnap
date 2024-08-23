import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "@/fonts/fonts";
import { Navbar, Footer } from "@/components";
import Navigation from "@/sections/navigation/Navigation";


export const metadata: Metadata = {
  title: "PhotoSnap",
  description:
    "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="font-dmSans grid grid-cols-overallMob w-full max-w-[1900px] mx-auto md2Tab:grid-cols-overallTab desk:grid-cols-overallDesk">
        {/* Gradient Testing */}
        {/* <div className="rounded-full w-12 h-12 bg-gradient-to-bl from-topBlue from-100% via-middlePink via-[52%] to-bottomOrange to-0%"></div> */}
        {/* <Navbar /> */}
        <Navigation/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
