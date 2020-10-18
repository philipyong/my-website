import React from "react";
import {
  Container,
  Item,
  HeaderTitle,
  Image,
  SubTitle,
  Text,
  Meta,
  Hint,
} from "./styles/projects";

export default function Projects({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Projects.HeaderTitle = function ProjectsHeaderTitle({
  children,
  ...restProps
}) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

Projects.Image = function ProjectsImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Projects.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Projects.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Projects.Item = function CardItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Projects.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Projects.Hint = function CardHint({ children, ...restProps }) {
  return <Hint {...restProps}>{children}</Hint>;
};
