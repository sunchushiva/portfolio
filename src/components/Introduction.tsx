"use client";
import { pages, personal } from "@/javascript";
import Link from "next/link";
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });
// const mochiy = Encode_Sans_Expanded({ weight: "700", preload: false });
// 2xl:h-[60vh] xl:h-[60vh] lg:h-[60vh] md:h-[55vh] sm:h-[55vh] xsm:h-[60vh]
export default function Introduction() {
  return (
    <main className="2xl:h-[60vh] xl:h-[55vh] lg:h-[50vh] md:h-[45vh] sm:h-[40vh] xsm:h-[40vh] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col md:justify-between sm:justify-between xsm:justify-between items-center">
      {/* First Child  */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex flex-col 2xl:gap-y-8 xl:gap-y-7 lg:gap-y-6 md:gap-y-6 sm:gap-y-6 xsm:gap-y-4">
        <div className="w-fit flex justify-between items-center gap-x-3">
          {/* <p className="p-3 py-1 dark:text-black bg-yellow-300/90 dark:bg-yellow-400/90 rounded-md text-sm font-semibold">
            {personal.age}
          </p> */}
          <p className="2xl:p-2 xl:p-2 lg:p-2 md:p-2 sm:p-1 xsm:p-1 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-2 xsm:px-2 dark:text-black bg-yellow-300/90 dark:bg-yellow-400/90 rounded-md 2xl:text-base xl:text-sm lg:text-sm md:text-xs sm:text-xs xsm:text-xsm font-semibold">
            {personal.location}
          </p>
          {/* <p className="p-3 py-1 bg-gray-800/70  rounded-md text-sm">Dev</p> */}
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-bold 2xl:mb-4">
            🎗️ Hi, my name is Shiva
          </h2>
          <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-base sm:text-sm xsm:text-xsmp 2xl:leading-10 xl:leading-8 lg:leadding-6 md:leading-6 sm:leading-6 xsm:leading-5 text-justify">
            Bits, bytes and binary came to life during the later years of my
            Physics graduation. Absurd! but it dates back to my Diploma days in
            Electrical Engineering when transistors were introduced. I never
            thought that the breakdown voltage of a semiconductor would excite
            me more.
          </p>
        </div>
      </div>
      {/* Second Child  */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xsm:w-full flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row xsm:flex-row sm:flex-wrap xsm:flex-wrap sm:gap-4 xsm:gap-4 2xl:gap-y-16 xl:gap-y-14 lg:gap-y-12 md:justify-between sm:justify-between xsm:justify-between items-end">
        {pages.map((element, index) => {
          return (
            <div key={index}>
              <p
                className={`${mochiy.className} w-fit 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xsm:text-base font-bold uppercase tracking-wide hover:text-slate-600`}
              >
                <Link href={element.navigation}>{element.title}</Link>
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
