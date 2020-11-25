import React from "react";
import projectsData from "../fixtures/projects.json";
import { Projects } from "../components";

export function ProjectsContainer() {
  return (
    <>
      <Projects.HeaderTitle>My Projects</Projects.HeaderTitle>
      <Projects.Hint>Hold to find out more!</Projects.Hint>
      <Projects>
        {projectsData.reverse().map((item) => (
          <Projects.Item
            key={item.id}
            onClick={() => window.open(item.link, "_blank")}
          >
            <Projects.Image src={`/images/projects/${item.image}`} />
            <Projects.Meta>
              <Projects.SubTitle>{item.title}</Projects.SubTitle>
              <Projects.Text>{item.description}</Projects.Text>
            </Projects.Meta>
          </Projects.Item>
        ))}
      </Projects>
    </>
  );
}
