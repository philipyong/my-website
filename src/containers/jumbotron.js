import React from "react";
import jumboData from "../fixtures/jumbo";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      <Jumbotron.HeaderTitle>Experiences</Jumbotron.HeaderTitle>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Group>
            <Jumbotron.Title direction={item.direction}>
              <Jumbotron.CompanyName>{item.companyName}</Jumbotron.CompanyName>
              <Jumbotron.Duration>{item.duration}</Jumbotron.Duration>
            </Jumbotron.Title>
            <Jumbotron.Position direction={item.direction}>
              {item.position}
            </Jumbotron.Position>
            {item.description.map((item) => (
              <Jumbotron.Description key={item.id} direction={item.direction}>
                {item.content}
              </Jumbotron.Description>
            ))}
            <Jumbotron.FrameworkList direction={item.direction}>
              {item.frameworks.map((item) => (
                <Jumbotron.Framework
                  key={item.id}
                  src={`/images/icons/${item.name}.png`}
                  onClick={() => window.open(item.link, "_blank")}
                />
              ))}
            </Jumbotron.FrameworkList>
          </Jumbotron.Group>
          <Jumbotron.CompanyLogo
            src={item.companyLogo}
            onClick={() => window.open(item.link, "_blank")}
            direction={item.direction}
          />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
