import type { FunctionComponent } from "react";
import type { ITagArgument } from "../interfaces/ITagArguments";

const Tag: FunctionComponent<ITagArgument> = ({ text, icon_src, icon_alt }) => {
  return (
    <div className="h-8 w-fit p-1.5 flex items-center justify-center gap-1 bg-[#042713] rounded-md transition-all duration-300 drop-shadow-md drop-shadow-black/50 hover:bg-[#01160a] hover:text-[#5cb472]">
      <h5 className="text-xs text-[#72E48E] text-nowrap">{text}</h5>
      {icon_src && (
        <img src={icon_src} alt={icon_alt} className="w-4 h-4 shrink-0" />
      )}
    </div>
  );
};
export default Tag;
