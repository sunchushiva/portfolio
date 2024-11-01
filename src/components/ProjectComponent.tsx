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

  return (
    <Suspense>
      <section className="w-11/12 m-auto lg:mb-16 md:mb-12 sm:mb-12">
        <div className="w-full flex items-center justify-between lg:mb-12 md:mb-12 sm:mb-8 pb-3 border-b-2 dark:border-gray-500">
          <div>
            <h2 className={`${mochiy.className} text-xl font-light`}>
              PROJECTS
            </h2>
            <p className="text-xs font-extralight">
              These are my latest works, feedback is appreciated
            </p>
          </div>
          <div>
            <select
              onChange={onChangeFunction}
              value={filter}
              className="border-slate-700 border-[1.35px] lg:text-base md:text-sm sm:text-sm font-medium lg:px-3 md:px-3 sm:px-2 lg:py-2 md:py-1 sm:py-1 rounded cursor-pointer outline-none tracking-wide"
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
        <div className="flex flex-col space-y-20">
          <ProjectsContainer projects={projects} filter={filter} />
        </div>
      </section>
    </Suspense>
  );
}
