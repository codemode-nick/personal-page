import "./App.css";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hobby from "./sections/Hobby";
import Projects from "./sections/Projects";
import Sidebar from "./sections/Sidebar";
import Stack from "./sections/Stack";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="w-175 max-w-266.75 mx-auto bg-[#707070] min-h-screen">
        <div className="w-full max-w-[85%] mx-auto flex flex-col items-start gap-15.5 py-5">
          <About />
          <Stack />
          <Hobby />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
