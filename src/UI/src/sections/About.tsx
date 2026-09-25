import Tag from "../components/Tag";
import profileImage from "../img/profile-image.jpg";
import TumIcon from "../icons/TUM.png";
import AIIcon from "../icons/AI.png";
import CloudIcon from "../icons/Cloud.png";
import RoboticsIcon from "../icons/Robotics.png";

const About = () => {
  return (
    <section className="flex flex-col" id="about">
      <div>
        <img
          className="object-cover rounded-full bg-white h-14 w-14"
          src={profileImage}
          alt="profile-picture"
        />
      </div>
      <div className="pb-1.5 pt-3">
        <h3>Mykola Sidenko 👋</h3>
        <h4>Web Dev enthusiast 🧑‍💻</h4>
      </div>
      <div className="w-full h-px bg-white"></div>
      <p className="py-1.5">Computer Science Student & Software Developer</p>
      <p className="py-1.5">
        Computer Science student at TUM with some experience building web
        applications and backend systems. Interested in software engineering,
        cloud technologies, and AI.
      </p>
      <div className="flex items-center justify-start gap-2.75 mt-2">
        <Tag text={"TUM"} icon_src={TumIcon} icon_alt={"TUM_icon"} />
        <Tag text={"AI"} icon_src={AIIcon} icon_alt={"AI_icon"} />
        <Tag text={"Cloud"} icon_src={CloudIcon} icon_alt={"Cloud_icon"} />
        <Tag
          text={"Robotics"}
          icon_src={RoboticsIcon}
          icon_alt={"Robotics_icon"}
        />
      </div>
    </section>
  );
};
export default About;
