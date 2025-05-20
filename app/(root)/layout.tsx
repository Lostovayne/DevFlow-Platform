import LeftSidebar from "@/components/navegation/LeftSidebar";
import Navbar from "@/components/navegation/navbar";
import { JSX } from "react";

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
