import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="w-fit dark:bg-gray-900 bg-gray-200 2xl:p-2 xl:p-2 lg:p-2 md:p-2 sm:p-2 xsm:p-2 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-3 xsm:px-2 rounded-md cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <p className="flex justify-between items-center 2xl:gap-x-3 xl:gap-x-3 lg:gap-x-3 md:gap-x-2 sm:gap-x-2 xsm:gap-x-2 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xsm xsm:text-xsm font-light">
          <RiMoonLine size={16} /> Light mode
        </p>
      ) : (
        <p className="flex justify-between items-center 2xl:gap-x-3 xl:gap-x-3 lg:gap-x-3 md:gap-x-2 sm:gap-x-2 xsm:gap-x-2 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xsm xsm:text-xsm font-light">
          <RiSunLine size={16} /> Dark mode
        </p>
      )}
    </div>
  );
}
