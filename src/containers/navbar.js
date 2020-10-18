import React from "react";
import { NavBar } from "../components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export function NavBarContainer({
  headerRef,
  profileRef,
  jumbotronRef,
  projectsRef,
  footerRef,
}) {
  return (
    <NavBar>
      <NavBar.Button onClick={() => scrollToRef(headerRef)}>
        <HomeOutlinedIcon fontSize="inherit" />
      </NavBar.Button>
      <NavBar.Button onClick={() => scrollToRef(profileRef)}>
        <AccountCircleOutlinedIcon fontSize="inherit" />
      </NavBar.Button>
      <NavBar.Button onClick={() => scrollToRef(jumbotronRef)}>
        <WorkOutlineOutlinedIcon fontSize="inherit" />
      </NavBar.Button>
      <NavBar.Button onClick={() => scrollToRef(projectsRef)}>
        <FolderOutlinedIcon fontSize="inherit" />
      </NavBar.Button>
      <NavBar.Button onClick={() => scrollToRef(footerRef)}>
        <EmailOutlinedIcon fontSize="inherit" />
      </NavBar.Button>
    </NavBar>
  );
}
