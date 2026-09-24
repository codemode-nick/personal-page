import Tag from "../components/Tag";
import Chess_icon from "../icons/Chess.png";
import Reading_icon from "../icons/Reading.png";
import BJJ_icon from "../icons/BJJ.png";

const Hobby = () => {
  return (
    <div>
      <h4>My Hobbbies:</h4>
      <div>
        <h5>Programming languages:</h5>
        <div className="flex items-center gap-2.75">
          <Tag text={"Chess"} icon_src={Chess_icon} icon_alt={"Chess_icon"} />
          <Tag
            text={"Reading"}
            icon_src={Reading_icon}
            icon_alt={"Reading_icon"}
          />
          <Tag text={"BJJ"} icon_src={BJJ_icon} icon_alt={"BJJ_icon"} />
        </div>
        <div className="w-full h-px bg-white my-3"></div>
      </div>
    </div>
  );
};
export default Hobby;
