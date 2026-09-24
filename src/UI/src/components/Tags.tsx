import type { FunctionComponent } from "react";
import Tag from "./Tag";
import type { ITagProps } from "../interfaces/ITagsProps";

const Tags: FunctionComponent<ITagProps> = ({ tagArray }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 p-2">
      {tagArray.map((v) => {
        return (
          <Tag text={v.text} icon_src={v.icon_src} icon_alt={v.icon_alt} />
        );
      })}
    </div>
  );
};
export default Tags;
