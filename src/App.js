import React from "react";
import { HeaderContainer } from "./containers/header";
import { ProfileContainer } from "./containers/profile";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <HeaderContainer />
      <ProfileContainer />
      <JumbotronContainer />
      {/* PROJECTS */}
      <FooterContainer />
    </>
  );
}

export default App;
