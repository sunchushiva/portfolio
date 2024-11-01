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
      <div className="flex items-center justify-between" key={index}>
        <div className="w-1/2">
          <h3 className="font-bold lg:text-2xl md:text-xl sm:text-lg">
            {element.title}
          </h3>
          <p className="font-medium lg:text-sm md:text-sm sm:text-xs italic lg:mb-2 md:mb-3 sm:mb-2 text-slate-500">
            {element.date}
          </p>
          <p className="lg:text-base md:text-sm sm:text-xs text-justify">
            {element.description}
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            className="project-image"
            src={element.cover_photo}
            alt={element.title}
            width="300"
            height="250"
          />
        </div>
      </div>
    );
  });
}
