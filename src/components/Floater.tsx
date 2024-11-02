"use client";
import { pages } from "@/javascript";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Floater() {
  const pathname = usePathname().split("/");

  return (
    <div
      draggable={true}
      className="floater 2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-7/12 xsm:w-[70%] fixed left-0 right-0 mx-auto bottom-12 bg-current flex justify-between items-center p-6 rounded-md"
    >
      {pages.map((element, index) => {
        return (
          <div className="divide-x-2" key={index}>
            <p
              className={`text-center text-sm font-normal dark:text-black text-white hover:text-slate-600 ${
                element.navigation === `/${pathname[1]}`
                  ? "font-semibold underline underline-offset-4"
                  : ""
              } `}
            >
              <Link href={element.navigation}>{element.title}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
