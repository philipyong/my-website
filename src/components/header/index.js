import React from "react";
import { Container, Title, SubTitle, Strong } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Strong = function HeaderStrong({ children, ...restProps }) {
  return <Strong {...restProps}>{children}</Strong>;
};
