import { personal } from "@/javascript";
import Link from "next/link";
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });

export default function Contact() {
  return (
    <section className="w-11/12 m-auto flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col justify-between items-start 2xl:mb-16 xl:mb-16 lg:mb-16 md:mb-12 sm:mb-12 xsm:mb-10">
      {/* Header container  */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-10 xsm:mb-8">
        {/* Heading container  */}
        <div className="2xl:mb-14 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-8 xsm:mb-6 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:pb-3 xsm:pb-3 2xl:border-none xl:border-none lg:border-none md:border-none sm:border-b-2 xsm:border-b-2 sm:dark:border-gray-500 xsm:dark:border-gray-500">
          <h2
            className={`${mochiy.className} 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base xsm:text-sm font-light`}
          >
            CONTACT
          </h2>
          <p className="2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xsm xsm:text-xsm font-extralight">
            Looking forward to hearing from you
          </p>
        </div>
        {/* Links container  */}
        <div className="flex flex-wrap 2xl:gap-10 xl:gap-8 lg:gap-8 md:gap-6 gap-y-6 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-between xsm:justify-between 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:px-6 xsm:px-4">
          <div>
            <h3 className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-base xsm:text-sm font-normal tracking-wide">
              Email
            </h3>
            <p className="lg:text-sm md:text-sm sm:text-xsmp xsm:text-xsm font-normal underline text-blue-500 underline-offset-2">
              <Link rel="noopener noreferrer" href={`mailto:${personal.email}`}>
                {personal.email}
              </Link>
            </p>
          </div>
          <div>
            <h3 className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-base xsm:text-sm font-normal tracking-wide">
              Github
            </h3>
            <p className="lg:text-sm md:text-sm sm:text-xsmp xsm:text-xsm font-normal underline text-blue-500 underline-offset-2">
              <Link
                rel="noopener noreferrer"
                href={`https://www.${personal.github}`}
              >
                {personal.github}
              </Link>
            </p>
          </div>
          <div>
            <h3 className="2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-base xsm:text-sm font-normal tracking-wide">
              LinkedIn
            </h3>
            <p className="lg:text-sm md:text-sm sm:text-xsmp xsm:text-xsm font-normal underline text-blue-500 underline-offset-2">
              <Link
                rel="noopener noreferrer"
                href={`https://www.${personal.linkedIn}`}
              >
                {personal.linkedIn}
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Form container  */}
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:px-6 xsm:px-4 flex justify-center">
        <form className="w-full">
          <div className="flex justify-between items-end mb-8">
            <label className="font-medium" htmlFor="first_name">
              First name
              <br />
              <input
                className="border-slate-500 outline-none border-2 rounded p-1 pl-2 font-light"
                type="text"
                id="first_name"
                name="firstName"
              />
            </label>
            <label className="font-medium" htmlFor="last_name">
              Last name
              <br />
              <input
                className="border-slate-500 outline-none border-2 rounded p-1 pl-2 font-light"
                type="text"
                id="last_name"
                name="lastName"
              />
            </label>
          </div>
          <div className="flex justify-between items-end mb-8">
            <label className="font-medium" htmlFor="email">
              Email *
              <br />
              <input
                className="border-slate-500 outline-none border-2 rounded p-1 pl-2 font-light"
                required
                type="text"
                id="email"
                name="email"
              />
            </label>
            <label className="font-medium" htmlFor="subject">
              Subject
              <br />
              <input
                className="border-slate-500 outline-none border-2 rounded p-1 pl-2 font-light"
                type="text"
                id="subject"
                name="subject"
              />
            </label>
          </div>
          <div className="flex justify-between items-end mb-8">
            <label className="font-medium" htmlFor="message">
              Message
              <br />
              <textarea
                className="border-slate-500 outline-none border-2 rounded p-1 pl-2 font-light"
                id="message"
                name="message"
                rows={4}
                cols={35}
              ></textarea>
            </label>
            <p
              className={`h-32 w-32 rounded-full focus:border-2 focus:border-white cursor-pointer text-sm flex justify-center items-center text-white bg-slate-700`}
            >
              <input
                className="cursor-pointer font-medium tracking-wide outline-none"
                type="submit"
                value="Submit"
              ></input>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
