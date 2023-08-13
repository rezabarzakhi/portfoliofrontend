import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  function toggleDarkMode() {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  return (
    <div className={` ${darkMode ? "dark" : ""}  flex justify-center w-full`}>
      <div className="w-full flex justify-center bg-gray-light-default dark:bg-gray-dark-default">
        <div className="w-full  flex flex-col align-middle justify-center items-center bg-gray-light-default dark:bg-gray-dark-default">
          <Navbar
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Testimonials />
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
