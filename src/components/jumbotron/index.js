import React from "react";
import {
  Container,
  Inner,
  Item,
  Title,
  CompanyName,
  Position,
  Description,
  FrameworkList,
  Framework,
  Duration,
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

Jumbotron.Title = function JumbotronTitle({
  companyName,
  duration,
  ...restProps
}) {
  return (
    <Title>
      <CompanyName {...restProps}>{companyName}</CompanyName>
      <Duration>{duration}</Duration>
    </Title>
  );
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
  frameworks,
  children,
  ...restProps
}) {
  return (
    <FrameworkList {...restProps}>
      {frameworks.map((item) => (
        <Framework key={item.id} src={`/images/icons/${item.name}.png`} />
      ))}
    </FrameworkList>
  );
};
