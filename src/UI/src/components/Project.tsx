import type { FunctionComponent } from "react";
import type { IProjectArguments } from "../interfaces/IProjectArguments";
import Github_icon from "../icons/Github.png";
import Tags from "./Tags";

const Project: FunctionComponent<IProjectArguments> = ({
  project_name,
  image_src,
  link,
  project_tags,
}) => {
  return (
    <div className="w-full sm:w-72 lg:w-66.25 bg-[#623697] overflow-hidden rounded-[7px] transition-all duration-300 drop-shadow-md drop-shadow-black/70 hover:bg-[#3a2058]">
      <img
        src={image_src}
        alt={project_name + " project"}
        className="w-full h-auto object-cover"
      />
      <div className="p-3 flex items-center justify-between gap-2">
        <h5 className="text-sm">{project_name}</h5>
        <a href={link}>
          <img src={Github_icon} alt="github_icon" className="h-5 w-5" />
        </a>
      </div>
      <Tags tagArray={project_tags} />
    </div>
  );
};

export default Project;
