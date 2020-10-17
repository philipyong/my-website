import React from "react";
import {
  Container,
  Grid,
  LeftGroup,
  MiddleGroup,
  RightGroup,
  SubTitle,
  Description,
  Title,
  Image,
  MiniTitle,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Grid = function ProfileGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Profile.LeftGroup = function ProfileLeftGroup({ children, ...restProps }) {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};

Profile.MiddleGroup = function ProfileMiddleGroup({ children, ...restProps }) {
  return <MiddleGroup {...restProps}>{children}</MiddleGroup>;
};

Profile.RightGroup = function ProfileRightGroup({ children, ...restProps }) {
  return <RightGroup {...restProps}>{children}</RightGroup>;
};

Profile.SubTitle = function ProfileSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Profile.Description = function ProfileDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Image = function ProfileImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Profile.MiniTitle = function ProfileMiniTitle({ children, ...restProps }) {
  return <MiniTitle {...restProps}>{children}</MiniTitle>;
};
