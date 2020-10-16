import React from "react";
import {
  Container,
  Inner,
  Item,
  Group,
  Title,
  CompanyName,
  Position,
  Description,
  FrameworkList,
  Framework,
  Duration,
  CompanyLogo,
} from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Group = function JumbotronGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.CompanyName = function JumbotronCompanyName({
  children,
  ...restProps
}) {
  return <CompanyName {...restProps}>{children}</CompanyName>;
};

Jumbotron.Duration = function JumbotronDuration({ children, ...restProps }) {
  return <Duration {...restProps}>{children}</Duration>;
};

Jumbotron.Position = function JumbotronPosition({ children, ...restProps }) {
  return <Position {...restProps}>{children}</Position>;
};

Jumbotron.Description = function JumbotronDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

Jumbotron.FrameworkList = function JumbotronFrameworkList({
  children,
  ...restProps
}) {
  return <FrameworkList {...restProps}>{children}</FrameworkList>;
};

Jumbotron.Framework = function JumbotronFramework({ children, ...restProps }) {
  return <Framework {...restProps}>{children}</Framework>;
};

Jumbotron.CompanyLogo = function JumbotronCompanyLogo({
  children,
  ...restProps
}) {
  return <CompanyLogo {...restProps}>{children}</CompanyLogo>;
};
