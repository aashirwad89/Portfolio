import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Participation from "./components/Participation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
   <>
   <Landing/>
   <Experience/>
   <About/>
   <Skills/>
   <Projects/>
   <Education/>
   <Participation/>
   <Footer/>
   </>
  );
}
