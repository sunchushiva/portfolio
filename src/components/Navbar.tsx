"use client";

import { personal } from "@/javascript/index";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
// import { useContext } from "react";
// import { SidebarContext } from "@/contexts/SidebarContext";

export default function Navbar() {
  // const pathname = usePathname().split("/");
  //   const { changeVisibleFunction } = useContext(SidebarContext);

  return (
    <nav className="navbar z-40 box-shadow select-none sticky top-0 w-full flex items-center justify-between p-4 px-6 dark:bg-black bg-white mb-8">
      <div className="first-child w-fit flex items-center">
        <div className="mr-3 w-fit cursor-pointer">
          <svg
            width="30"
            height="30"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#ffbcbc" />
          </svg>
        </div>
        <div className="w-fit flex items-start">
          <h1 className="lg:text-2xl md:text-2xl sm:text-xl xsm:text-sm font-bold mr-1">
            <Link href="/">{personal.name}</Link>
          </h1>
          <p className="font-normal lg:text-sm md:text-sm xsm:text-xsm">
            {personal.education}
          </p>
        </div>
      </div>
      <div className="second-child">
        <ThemeToggle />
      </div>
    </nav>
  );
}
