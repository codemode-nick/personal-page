import "./App.css";
import About from "./sections/About";
import Hobby from "./sections/Hobby";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";

function App() {
  return (
    <body className="w-175 max-w-266.75 mx-auto h-full min-h-screen bg-[#707070] flex items-center justify-center">
      <About />
      <Stack />
      <Hobby />
      <Projects />
    </body>
  );
}

export default App;
