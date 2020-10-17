import React from "react";
import { Container, Title, ContactList, Contact, Link } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.ContactList = function FooterContactList({ children, ...restProps }) {
  return <ContactList {...restProps}>{children}</ContactList>;
};

Footer.Contact = function FooterContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
