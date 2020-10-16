import React from "react";
import jumboData from "../fixtures/jumbo";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron
          key={item.id}
          companyLogo={item.companyLogo}
          position={item.id % 2 === 0 ? "left" : "right"}
        >
          <Jumbotron.Title
            companyName={item.companyName}
            duration={item.duration}
          />
          <Jumbotron.Position>{item.position}</Jumbotron.Position>
          <Jumbotron.Description>{item.description}</Jumbotron.Description>
          <Jumbotron.FrameworkList frameworks={item.frameworks} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
