import { useRef } from "react";
import Header from "./components/commons/Header";
import Home from "./components/sections/Home";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Contact from "./components/sections/Contact";
import ScrollToTopButton from "./components/commons/ScrollToTopButton";

function App() {
  // 각 영역에 대한 ref 생성
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
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

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 영역별 스크롤 함수 모음
  const scrollFunctions = {
    scrollToSkill,
    scrollToProject,
    scrollToExperience,
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
        <Experience experienceRef={experienceRef} />
        <Contact contactRef={contactRef} />
      </main>
    </>
  );
}

export default App;
