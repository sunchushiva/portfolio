import Image from "next/image";

type projectObject = {
  title: string;
  description: string;
  date: string;
  github: string;
  deployed: string;
  cover_photo: string;
  type: string;
};

interface MyComponentProps {
  projects: projectObject[];
  filter: string;
}

export default function ProjectsContainer({
  projects,
  filter,
}: MyComponentProps): JSX.Element[] {
  let state = projects;

  if (filter !== "all") {
    state = state.filter((el) => el.type === filter);
  }

  return state?.map((element, index) => {
    return (
      <div key={index} className="bg-gray-800 rounded-md">
        <div className="2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-4 sm:mb-4 xsm:mb-2">
          <Image
            className="project-image w-full"
            src={element.cover_photo}
            alt={element.title}
            width="300"
            height="250"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold lg:text-2xl md:text-xl sm:text-lg">
            {element.title}
          </h3>
          <p className="font-medium lg:text-sm md:text-sm sm:text-xs italic lg:mb-2 md:mb-3 sm:mb-2 text-slate-500">
            {element.date}
          </p>
          <p></p>
        </div>
      </div>
    );
  });
}
