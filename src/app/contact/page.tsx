import { personal } from "@/javascript";
import Link from "next/link";
import { Mochiy_Pop_One } from "next/font/google";
const mochiy = Mochiy_Pop_One({ weight: "400", preload: false });

export default function Contact() {
  return (
    <section className="w-11/12 m-auto mb-16 flex justify-between items-start">
      {/* Header container  */}
      <div className="w-1/2">
        <div className="mb-12">
          <h2 className={`${mochiy.className} text-xl font-light`}>CONTACT</h2>
          <p className="text-xs font-extralight">
            Looking forward to hearing from you
          </p>
        </div>
        <div className="flex flex-wrap gap-20 gap-y-8">
          <div>
            <h3 className="lg:text-lg md:text-base sm:text-base font-normal tracking-wide">
              Email
            </h3>
            <p className="text-sm font-normal underline text-blue-500 underline-offset-2">
              <Link rel="noopener noreferrer" href={`mailto:${personal.email}`}>
                {personal.email}
              </Link>
            </p>
          </div>
          <div>
            <h3 className="lg:text-lg md:text-base sm:text-base font-normal tracking-wide">
              Github
            </h3>
            <p className="text-sm font-normal underline text-blue-500 underline-offset-2">
              <Link
                rel="noopener noreferrer"
                href={`https://www.${personal.github}`}
              >
                {personal.github}
              </Link>
            </p>
          </div>
          <div>
            <h3 className="lg:text-lg md:text-base sm:text-base font-normal tracking-wide">
              LinkedIn
            </h3>
            <p className="text-sm font-normal underline text-blue-500 underline-offset-2">
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
      <div className="w-1/2 flex justify-center">
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
