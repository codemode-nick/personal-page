import Tag from "../components/Tag";
import Chess_icon from "../icons/Chess.png";
import Reading_icon from "../icons/Reading.png";
import BJJ_icon from "../icons/BJJ.png";

const Hobby = () => {
  return (
    <section className="w-full" id="hobbies">
      <h4>My Hobbies:</h4>
      <div className="flex items-center gap-2.75 pt-1.5">
        <Tag text={"Chess"} icon_src={Chess_icon} icon_alt={"Chess_icon"} />
        <Tag
          text={"Reading"}
          icon_src={Reading_icon}
          icon_alt={"Reading_icon"}
        />
        <Tag text={"BJJ"} icon_src={BJJ_icon} icon_alt={"BJJ_icon"} />
      </div>
      <div className="w-full h-px bg-white my-3"></div>
    </section>
  );
};
export default Hobby;
