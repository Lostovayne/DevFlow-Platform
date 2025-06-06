import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RighSidebar from "@/components/navigation/RighSidebar";
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
        <RighSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
