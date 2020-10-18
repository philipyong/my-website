import React from "react";
import { Container, Button } from "./styles/navbar";

export default function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NavBar.Button = function NavBarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
