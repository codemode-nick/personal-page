import Tag from "../components/Tag";
import SQL_icon from "../icons/SQL.png";
import NET_icon from "../icons/NET.png";
import CSharp_icon from "../icons/CSharp.png";
import React_icon from "../icons/React.png";
import Tailwind_icon from "../icons/Tailwind.png";
import Next_icon from "../icons/NextJS.png";
import Azure_icon from "../icons/Azure.png";
import AzureDevOps_icon from "../icons/AzureDevOps.png";
import Docker_icon from "../icons/Docker.png";
import Git_icon from "../icons/Git.png";
import Typescript_icon from "../icons/Typescript.png";

const Stack = () => {
  return (
    <section className="w-full" id="stack">
      <h4 className="pb-3.75">My Stack:</h4>
      <div>
        <h5>Programming languages:</h5>
        <div className="flex items-center gap-2.75 pt-1.5">
          <Tag text={"SQL"} icon_src={SQL_icon} icon_alt={"SQL_icon"} />
          <Tag text={".NET"} icon_src={NET_icon} icon_alt={".NET_icon"} />
          <Tag text={"C#"} icon_src={CSharp_icon} icon_alt={"C#_icon"} />
          <Tag
            text={"Typescript"}
            icon_src={Typescript_icon}
            icon_alt={"Typescript_icon"}
          />
        </div>
        <div className="w-full h-px bg-white my-3"></div>
      </div>
      <div>
        <h5>Frontend:</h5>
        <div className="flex items-center gap-2.75 pt-1.5">
          <Tag text={"React"} icon_src={React_icon} icon_alt={"ReactJS_icon"} />
          <Tag
            text={"Tailwind CSS"}
            icon_src={Tailwind_icon}
            icon_alt={"TailwindCSS_icon"}
          />
          <Tag text={"Next.js"} icon_src={Next_icon} icon_alt={"NextJS_icon"} />
        </div>
        <div className="w-full h-px bg-white my-3"></div>
      </div>
      <div>
        <h5>Backend:</h5>
        <div className="flex items-center gap-2.75 pt-1.5">
          <Tag text={".NET"} icon_src={NET_icon} icon_alt={".NET_icon"} />
          <Tag text={"Rest APIs"} />
          <Tag text={"Entity Framework"} />
        </div>
        <div className="w-full h-px bg-white my-3"></div>
      </div>
      <div>
        <h5>Cloud / Infrastructure:</h5>
        <div className="flex items-center gap-2.75 pt-1.5">
          <Tag text={"Azure"} icon_src={Azure_icon} icon_alt={"Azure_icon"} />
          <Tag
            text={"Azure DevOps"}
            icon_src={AzureDevOps_icon}
            icon_alt={"Azure_DevOps_icon"}
          />
          <Tag
            text={"Docker"}
            icon_src={Docker_icon}
            icon_alt={"Docker_icon"}
          />
          <Tag text={"Git"} icon_src={Git_icon} icon_alt={"Git_icon"} />
        </div>
        <div className="w-full h-px bg-white my-3"></div>
      </div>
    </section>
  );
};
export default Stack;
