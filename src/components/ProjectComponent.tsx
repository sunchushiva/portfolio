"use client";

import { projects, typesProject, forSelectTag } from "@/javascript/index";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useLayoutEffect } from "react";
import { Mochiy_Pop_One } from "next/font/google";
import { ProjectsContainer } from "./";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });

export default function ProjectComponent() {
  const searchParams = useSearchParams();
  const searchParamsValue = searchParams.get("filter");
  const pathname = usePathname();
  const router = useRouter();
  const [filter, setFilter] = useState(searchParamsValue ?? "all");

  useLayoutEffect(() => {
    // Violating DRY

    if (searchParamsValue === "") {
      router.push(pathname + `?filter=all`);
      setFilter("all");
      console.log("all", "inside");
    }

    if (!searchParamsValue) {
      router.push(pathname + `?filter=${filter}`);
    } else if (!typesProject.includes(searchParamsValue)) {
      router.push(pathname + `?filter=all`);
      setFilter("all");
    }
  }, []);

  const onChangeFunction = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);
    router.push(pathname + `?filter=${value}`);
    setFilter(value);
  };

  // sticky top-20

  return (
    <Suspense>
      <section className="w-11/12 m-auto lg:mb-16 md:mb-12 sm:mb-12">
        {/* Header container  */}
        <div className="w-full flex items-start justify-between 2xl:mb-14 xl:mb-14 lg:mb-14 md:mb-12 sm:mb-8 xsm:mb-6 pb-3 border-b-2 dark:border-gray-500 bg-foreground">
          {/* Heading container  */}
          <div className="w-1/2">
            <h2
              className={`${mochiy.className} 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm font-light`}
            >
              PROJECTS
            </h2>
            <p className="2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xsm xsm:text-xsm font-extralight">
              These are my latest works, feedback is appreciated
            </p>
          </div>
          {/* Dropdown container  */}
          <div className="w-1/2 flex justify-end">
            <select
              onChange={onChangeFunction}
              value={filter}
              className="border-slate-700 border-[1.35px] lg:text-base md:text-sm sm:text-sm xsm:text-xsmp font-medium lg:px-3 md:px-3 sm:px-2 xsm:p-1 lg:py-2 md:py-1 sm:py-1 xsm:py-1 rounded cursor-pointer outline-none tracking-wide"
            >
              {forSelectTag?.map((element, index) => {
                return (
                  <option key={index} value={element.value}>
                    {element.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* Projects container  */}
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-6">
          <ProjectsContainer projects={projects} filter={filter} />
        </div>
      </section>
    </Suspense>
  );
}
