import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Title>
        <Header.SubTitle>Hey there! I'm</Header.SubTitle>
        <Header.Strong>PHILIP YONG</Header.Strong>
        <Header.Button type="submit" onClick={() => window.open("resume.pdf")}>
          Download Resume
        </Header.Button>
      </Header.Title>
    </Header>
  );
}
