import type { ITagArgument } from "./ITagArguments";

export interface IProjectArguments {
  project_name: string;
  image_src: string;
  link: string;
  project_tags: ITagArgument[];
}
