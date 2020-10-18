import React, { useRef } from "react";
import { NavBarContainer } from "./containers/navbar";
import { HeaderContainer } from "./containers/header";
import { ProfileContainer } from "./containers/profile";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { ProjectsContainer } from "./containers/projects";
import "./App.css";

function App() {
  const headerRef = useRef(null);
  const profileRef = useRef(null);
  const jumbotronRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <NavBarContainer
        headerRef={headerRef}
        profileRef={profileRef}
        jumbotronRef={jumbotronRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
      />
      <div ref={headerRef} />
      <HeaderContainer />
      <div ref={profileRef} />
      <ProfileContainer />
      <div ref={jumbotronRef} />
      <JumbotronContainer />
      <div ref={projectsRef} />
      <ProjectsContainer />
      <div ref={footerRef} />
      <FooterContainer />
    </>
  );
}

export default App;
