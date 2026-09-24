import instagram_Icon from "../icons/instagram.png";
import linkedIn_Icon from "../icons/linkedIn.png";
import Github_Icon from "../icons/Github.png";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full h-px bg-white my-3"> </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-col">
          <h6>My socials:</h6>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5">
              <a href="https://www.instagram.com/nickname20020/">
                <img src={instagram_Icon} alt="instagram_icon" />
              </a>
            </div>
            <div className="w-5 h-5">
              <a href="https://www.linkedin.com/in/mykola-sidenko-a0006243a/">
                <img src={linkedIn_Icon} alt="linkedIn_icon" />
              </a>
            </div>
            <div className="w-5 h-5">
              <a href="https://github.com/codemode-nick/">
                <img src={Github_Icon} alt="github_icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/codemode-nick/personal-page">
            Website Link on Github
          </a>
          <div>
            <a href="https://github.com/codemode-nick/personal-page">
              <img src={Github_Icon} alt="instagram_icon" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
