import "./App.css";
import profileImage from "./img/profile-image.jpg";
import TumImage from "./icons/TUM.png";
import AIImage from "./icons/AI.png";
import CloudImage from "./icons/Cloud.png";
import Tag from "./components/Tag";

function App() {
  return (
    <body className="w-145.75 h-full bg-gray-600 flex items-center justify-center">
      <div>
        <img
          className="object-cover rounded-full bg-white h-14 w-14"
          src={profileImage}
          alt="profile-picture"
        />
      </div>
      <div>
        <h3>Mykola Sidenko 👋</h3>
        <h4>Web Dev enthusiast 🧑‍💻</h4>
      </div>
      <p>
        Computer Science Student & Software Developer <br />
        Computer Science student at TUM with some experience building web
        applications and backend systems. Interested in software engineering,
        cloud technologies, and AI.
      </p>
      <div className="flex items-center justify-start gap-2.75">
        <Tag text={"TUM"} icon_src={TumImage} icon_alt={"TUM_icon"} />
        <Tag text={"AI"} icon_src={AIImage} icon_alt={"AI_icon"} />
        <Tag text={"Cloud"} icon_src={CloudImage} icon_alt={"Cloud_icon"} />
      </div>
    </body>
  );
}

export default App;
