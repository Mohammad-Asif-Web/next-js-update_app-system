"use client";
import Footer from "@/components/Footer";
import Blogs from "@/components/Home/Blogs";
import Card from "@/components/Home/Card";
import Cart from "@/components/Home/Cart";
import Category from "@/components/Home/Category";
import Logo from "@/components/Home/Logo";
import News from "@/components/Home/News";
import Promo from "@/components/Home/Promo";
import QuickView from "@/components/Home/QuickView";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 w-full font-mono text-sm ">
          <div className="fixed w-full  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30">
            <Navbar />
          </div>
        </div>

        <div className="mt-12">
          <Cart />
          <Category />
          <Card />
          <Blogs />
          <QuickView />

          {/* <Blog /> */}
          {/* <Table /> */}

          <Promo />

          <News />
          <Logo />
          <Footer />
        </div>
      </main>
    </>
  );
}
