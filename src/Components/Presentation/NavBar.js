import styles from "./NavBar.module.scss";
import Button from "../UI/Button";
import IconLink from "./IconLink";

import githubImage from "../../resources/icon/github-sign.png";
import linkedinImage from "../../resources/icon/linkedin-logo.png";
import gmailImage from "../../resources/icon/gmail.png";

function NavBar(props) {
  const githubIcon = {
    image: githubImage,
    alt: "Github Icon",
  };

  const linkedinIcon = {
    image: linkedinImage,
    alt: "Linkedin Icon",
  };

  const gmailIcon = {
    image: gmailImage,
    alt: "Gmail Icon",
  };

  return (
    <div className={styles.NavBar}>
      <Button text="About" address="https://www.google.com/" />
      <Button text="CV" />
      <IconLink image={githubIcon.image} alt={githubIcon.alt} />
      <IconLink image={linkedinIcon.image} alt={linkedinIcon.alt} />
      <IconLink
        image={gmailIcon.image}
        alt={gmailIcon.alt}
        className={styles.gmailIcon}
      />
    </div>
  );
}

export default NavBar;
