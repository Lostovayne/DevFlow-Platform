import Navbar from "@/components/navegation/navbar";
import { JSX } from "react";

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
