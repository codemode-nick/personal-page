import Project from "../components/Project";
import BookStore_img from "../project-img/BookStore.png";

const Projects = () => {
  return (
    <div className="flex items-center justify-around">
      <Project
        image_src={BookStore_img}
        link={"google.com"}
        project_name={"Book store simulation"}
        project_tags={[
          {
            text: ".NET",
            icon_src: "NET",
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
            icon_src: "React",
            icon_alt: "ReactJS_icon",
          },
          {
            text: "Tailwind CSS",
            icon_src: "Tailwind",
            icon_alt: "TailwindCSS_icon",
          },
          {
            text: "Typescript",
            icon_src: "Typescript",
            icon_alt: "Typescript_icon",
          },
          {
            text: "SQL",
            icon_src: "SQL",
            icon_alt: "SQL_icon",
          },
        ].map((v) => {
          if (v.icon_src != null) {
            return { ...v, icon_src: "/src/icons/" + v.icon_src + ".png" };
          }
          return v;
        })}
      />
      <Project
        image_src={BookStore_img}
        link={"google.com"}
        project_name={"Book store simulation"}
        project_tags={[
          {
            text: ".NET",
            icon_src: "NET",
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
            icon_src: "React",
            icon_alt: "ReactJS_icon",
          },
          {
            text: "Tailwind CSS",
            icon_src: "Tailwind",
            icon_alt: "TailwindCSS_icon",
          },
          {
            text: "Typescript",
            icon_src: "Typescript",
            icon_alt: "Typescript_icon",
          },
          {
            text: "SQL",
            icon_src: "SQL",
            icon_alt: "SQL_icon",
          },
        ].map((v) => {
          if (v.icon_src != null) {
            return { ...v, icon_src: "/src/icons/" + v.icon_src + ".png" };
          }
          return v;
        })}
      />
    </div>
  );
};
export default Projects;
