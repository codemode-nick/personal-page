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
      <div className="w-full lg:w-175 lg:max-w-none mx-auto bg-[#707070] min-h-screen">
        <div className="w-full max-w-[85%] mx-auto flex flex-col items-start gap-6 py-5 px-4 sm:px-6">
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
