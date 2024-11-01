import { resume } from "@/javascript";
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });

export default function Resume() {
  return (
    <section className="w-11/12 m-auto lg:mb-16 md:mb-12 sm:mb-12">
      {/* Header component */}
      <div className="flex items-center justify-between lg:mb-14 md:mb-12 sm:mb-8 pb-3 border-b-2 dark:border-gray-500">
        <div>
          <h2 className={`${mochiy.className} text-xl font-light`}>RESUME</h2>
        </div>
        <div>
          <a
            // href={imageOne.src}
            download
            className="text-base font-light tracking-wide cursor-pointer"
            title="Download resume"
          >
            <p>Download</p>
          </a>
        </div>
      </div>
      {/* Resume container */}
      <div className="flex flex-col lg:space-y-16 md:space-y-12 sm:space-y-12 px-8">
        {/* Experience container  */}
        <div className="flex items-start justify-between lg:pb-6 md:pb-5 sm:pb-5 border-b-[1px] dark:border-gray-500">
          <div className="w-1/2">
            <h3 className="lg:text-xl md:text-xl sm:text-lg font-medium tracking-wide">
              Work Experience
            </h3>
          </div>
          <div className="flex flex-col w-1/2 space-y-8">
            {resume["work_experience"]?.map((element, index) => {
              return (
                <div key={index}>
                  <h4 className="lg:text-lg md:text-lg sm:text-base font-normal text-red-500 dark:text-primaryOne tracking-normal">
                    {element.company}
                  </h4>
                  <h6 className="text-xs font-extralight mb-2">
                    {element.year}
                  </h6>
                  <h5 className="lg:text-base md:text-sm sm:text-xs tracking-wide font-normal">
                    {element.role}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
        {/* Knowledge container  */}
        <div className="flex items-start justify-between lg:pb-6 md:pb-5 sm:pb-5 border-b-[1px] dark:border-gray-500">
          <div className="w-1/2">
            <h3 className="lg:text-xl md:text-xl sm:text-lg font-medium tracking-wide">
              Knowledge & Skills
            </h3>
          </div>
          <ul className="flex flex-col w-1/2 space-y-8 list-disc">
            {resume["skills"]?.map((element, index) => {
              return (
                <li
                  className="lg:text-lg md:text-lg sm:text-base font-normal tracking-normal"
                  key={index}
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Education container  */}
        <div className="flex items-start justify-between">
          <div className="w-1/2">
            <h3 className="lg:text-xl md:text-xl sm:text-lg font-medium tracking-wide">
              Education
            </h3>
          </div>
          <div className="flex flex-col w-1/2 space-y-8">
            {resume["education"]?.map((element, index) => {
              return (
                <div key={index}>
                  <h4 className="lg:text-lg md:text-lg sm:text-base font-normal text-red-500 dark:text-primaryOne tracking-normal">
                    {element.school}
                  </h4>
                  <h6 className="text-xs font-extralight mb-2">
                    {element.year}
                  </h6>
                  <h5 className="lg:text-base md:text-sm sm:text-xs tracking-wide font-normal">
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
