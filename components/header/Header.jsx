"use client";

import useScroll from "@/hooks/useScroll";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

const scrollHight = 100;

const Header = () => {
  const scroll = useScroll();
  const scrollDir = scroll.y > scrollHight ? "down" : "up";

  const bgColor =
    scrollDir === "down"
      ? "bg-white  text-navy-blue"
      : "bg-transparent text-white";

  return (
    <header className={cn("w-full transition-all z-50 top-0 fixed", bgColor)}>
      <Navbar />
    </header>
  );
};
export default Header;
