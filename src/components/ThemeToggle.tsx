import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="w-fit dark:bg-gray-900 2xl:p-2 xl:p-2 lg:p-2 md:p-2 sm:p-2 xsm:p-2 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-2 xsm:px-2 rounded-md cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <p className="flex justify-between items-center gap-3 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xsm xsm:text-xsm font-light">
          Light mode <RiMoonLine size={16} />
        </p>
      ) : (
        <p className="flex justify-between items-center gap-3 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xsm xsm:text-xsm font-light">
          Dark mode
          <RiSunLine size={16} />
        </p>
      )}
    </div>
  );
}
