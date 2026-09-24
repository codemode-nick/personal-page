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
    <div className="w-69.75 bg-[#623697] overflow-hidden rounded-[7px] transition-all duration-300 drop-shadow-md drop-shadow-black/70 hover:bg-[#3a2058]">
      <img src={image_src} alt={project_name + " project"} />
      <div className="p-2.25 flex items-center gap-2">
        <h5>{project_name}</h5>
        <a href={"https://" + link}>
          <img src={Github_icon} alt="github_icon" className="h-5 w-5" />
        </a>
      </div>
      <Tags tagArray={project_tags} />
    </div>
  );
};

export default Project;
