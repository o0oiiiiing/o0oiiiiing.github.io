import { useRef } from "react";
import Header from "./components/commons/Header";
import Home from "./components/sections/Home";
import Skill from "./components/Skill/Skill";
import Project from "./components/sections/Project";
import Education from "./components/Education/Education";
import Contact from "./components/sections/Contact";
import ScrollToTopButton from "./components/commons/ScrollToTopButton";

function App() {
  // 각 영역에 대한 ref 생성
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // ref를 이용해 스크롤하는 함수
  const scrollToSkill = () => {
    if (skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 메뉴별 스크롤 함수 모음
  const scrollFunctions = {
    scrollToSkill,
    scrollToProject,
    scrollToEducation,
    scrollToContact,
  };

  return (
    <>
      <Header scrollFunctions={scrollFunctions} />
      <ScrollToTopButton />
      <main>
        <Home />
        <Skill skillRef={skillRef} />
        <Project projectRef={projectRef} />
        <Education educationRef={educationRef} />
        <Contact contactRef={contactRef} />
      </main>
    </>
  );
}

export default App;
