import React from "react";
import { Footer } from "../components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export function FooterContainer() {
  function sendEmail() {
    window.location.href = "mailto:philipyong@live.com.my";
  }

  return (
    <Footer>
      <Footer.Title>Contact Me!</Footer.Title>
      <Footer.ContactList>
        <Footer.Contact
          onClick={() => window.open("https://github.com/yongphilip", "_blank")}
        >
          <GitHubIcon style={{ "font-size": "50px" }} />
          <Footer.Link>yongphilip</Footer.Link>
        </Footer.Contact>
        <Footer.Contact
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/philip-y-95bb77139/",
              "_blank"
            )
          }
        >
          <LinkedInIcon style={{ "font-size": "50px" }} />
          <Footer.Link>Philip Yong</Footer.Link>
        </Footer.Contact>
        <Footer.Contact onClick={() => sendEmail()}>
          <MailIcon style={{ "font-size": "50px" }} />
          <Footer.Link>philipyong@live.com.my</Footer.Link>
        </Footer.Contact>
      </Footer.ContactList>
    </Footer>
  );
}
