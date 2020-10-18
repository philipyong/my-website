import React from "react";
import { Container } from "./styles/projects";

export default function Projects({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
