import { resume } from "@/javascript";
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });

export default function Resume() {
  return (
    <section className="w-11/12 m-auto 2xl:mb-16 xl:mb-16 lg:mb-16 md:mb-12 sm:mb-12 xsm:mb-10">
      {/* Header component */}
      <div className="flex items-center justify-between 2xl:mb-14 xl:mb-14 lg:mb-14 md:mb-12 sm:mb-8 xsm:mb-6 pb-3 border-b-2 dark:border-gray-500">
        <div>
          <h2
            className={`${mochiy.className} 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm font-light`}
          >
            RESUME
          </h2>
        </div>
        <div>
          <a
            // href={imageOne.src}
            download
            className="2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs xsm:text-xsmp font-light tracking-wide cursor-pointer"
            title="Download resume"
          >
            <p>Download</p>
          </a>
        </div>
      </div>
      {/* Resume container */}
      <div className="flex flex-col 2xl:gap-y-16 xl:gap-y-14 lg:gap-y-14 md:gap-y-12 sm:gap-y-8 xsm:gap-y-6 2xl:px-10 xl:px-8 lg:px-8 md:px-6 sm:px-6 xsm:px-4">
        {/* Experience container  */}
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col items-start justify-between lg:pb-6 md:pb-5 sm:pb-5 xsm:pb-4 border-b-[1px] dark:border-gray-500">
          {/* Left container  */}
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full">
            <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm sm:mb-6 xsm:mb-4 font-medium 2xl:tracking-wide xl:tracking-wide lg:tracking-wide md:tracking-wide sm:tracking-normal xsm:tracking-normal">
              Work Experience
            </h3>
          </div>
          {/* Right container  */}
          <div className="flex flex-col 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full 2xl:gap-y-10 xl:gap-y-10 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 xsm:gap-y-4">
            {resume["work_experience"]?.map((element, index) => {
              return (
                <div key={index}>
                  <h4 className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm xsm:text-xsmp font-normal text-red-500 dark:text-primaryOne tracking-normal">
                    {element.company}
                  </h4>
                  <h6 className="2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xsm xsm:text-xxsm font-extralight 2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-2 sm:mb-1 xsm:mb-1">
                    {element.year}
                  </h6>
                  <h5 className="lg:text-base md:text-sm sm:text-xs xsm:text-xsm tracking-wide font-normal">
                    {element.role}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
        {/* Knowledge container  */}
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col items-start justify-between lg:pb-6 md:pb-5 sm:pb-5 xsm:pb-4 border-b-[1px] dark:border-gray-500">
          {/* Left container  */}
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full">
            <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm sm:mb-6 xsm:mb-4 font-medium 2xl:tracking-wide xl:tracking-wide lg:tracking-wide md:tracking-wide sm:tracking-normal xsm:tracking-normal">
              Knowledge & Skills
            </h3>
          </div>
          {/* Right container  */}
          <ul className="flex flex-col 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full 2xl:gap-y-10 xl:gap-y-10 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 xsm:gap-y-4 list-disc">
            {resume["skills"]?.map((element, index) => {
              return (
                <li
                  className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm xsm:text-xsmp font-normal tracking-normal"
                  key={index}
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Education container  */}
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col items-start justify-between">
          {/* Left container  */}
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full">
            <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm sm:mb-6 xsm:mb-4 font-medium 2xl:tracking-wide xl:tracking-wide lg:tracking-wide md:tracking-wide sm:tracking-normal xsm:tracking-normal">
              Education
            </h3>
          </div>
          {/* Right container  */}
          <div className="flex flex-col 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full 2xl:gap-y-10 xl:gap-y-10 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 xsm:gap-y-4">
            {resume["education"]?.map((element, index) => {
              return (
                <div key={index}>
                  <h4 className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm xsm:text-xsmp font-normal text-red-500 dark:text-primaryOne tracking-normal">
                    {element.school}
                  </h4>
                  <h6 className="2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xsm xsm:text-xxsm font-extralight 2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-2 sm:mb-1 xsm:mb-1">
                    {element.year}
                  </h6>
                  <h5 className="lg:text-base md:text-sm sm:text-xs xsm:text-xsm tracking-wide font-normal">
                    {element.title}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
