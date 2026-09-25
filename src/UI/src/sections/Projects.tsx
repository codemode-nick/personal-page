import Project from "../components/Project";
import BookStore_img from "../project-img/BookStore.png";
import Net_icon from "../icons/NET.png";
import React_icon from "../icons/React.png";
import Tailwind_icon from "../icons/Tailwind.png";
import Typescript_icon from "../icons/Typescript.png";
import SQL_icon from "../icons/SQL.png";

const Projects = () => {
  return (
    <section className="w-full" id="projects">
      <h4>My Projects: </h4>
      <div className="flex items-center gap-4 flex-wrap pt-1.5">
        <Project
          image_src={BookStore_img}
          link={"https://github.com/NickPraktikum/BookStore"}
          project_name={"Book store simulation"}
          project_tags={[
            {
              text: ".NET",
              icon_src: Net_icon,
              icon_alt: ".NET_icon",
            },
            {
              text: "Rest APIs",
            },
            {
              text: "Entity Framework",
            },
            {
              text: "React",
              icon_src: React_icon,
              icon_alt: "ReactJS_icon",
            },
            {
              text: "Tailwind CSS",
              icon_src: Tailwind_icon,
              icon_alt: "TailwindCSS_icon",
            },
            {
              text: "Typescript",
              icon_src: Typescript_icon,
              icon_alt: "Typescript_icon",
            },
            {
              text: "SQL",
              icon_src: SQL_icon,
              icon_alt: "SQL_icon",
            },
          ]}
        />
      </div>
    </section>
  );
};
export default Projects;
