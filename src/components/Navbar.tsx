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
    <nav className="navbar z-40 box-shadow select-none sticky top-0 w-full flex items-center justify-between 2xl:p-6 xl:p-5 lg:p-4 md:p-4 sm:p-4 xsm:p-4 2xl:px-8 xl:px-7 lg:px-6 md:px-6 sm:px-5 xsm:px-3 dark:bg-black bg-white 2xl:mb-10 xl:mb-8 lg:mb-8 md:mb-6 sm:mb-6 xsm:mb-4">
      <div className="first-child w-fit flex items-center">
        <div className="2xl:mr-4 xl:mr-3 lg:mr-3 md:mr-2 sm:mr-2 xsm:mr-2 w-fit cursor-pointer">
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
          <h1 className="2xl:text-4xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xsm:text-sm font-bold mr-1">
            <Link href="/">{personal.name}</Link>
          </h1>
          <p className="font-normal 2xl:text-base xl:text-sm lg:text-sm md:text-sm xsm:text-xsm">
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
