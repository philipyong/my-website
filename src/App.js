import React from "react";
import { HeaderContainer } from "./containers/header";
import { ProfileContainer } from "./containers/profile";
import { JumbotronContainer } from "./containers/jumbotron";
import "./App.css";

function App() {
  return (
    <>
      <HeaderContainer />
      <ProfileContainer />
      <JumbotronContainer />
    </>
  );
}

export default App;
