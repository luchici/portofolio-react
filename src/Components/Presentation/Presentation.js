import Button from "../UI/Button";
import NavBar from "./NavBar";
import TextName from "./TextName";

import Icon from "../../resources/icon/messenger.png";

import styles from "./Presentation.module.scss";

function Presentation(props) {
  // const style = `${props.className} `;

  return (
    <div className={styles.Presentation}>
      <NavBar />
      <TextName />
      <Button
        text="GET IN TOUCH"
        icon={Icon}
        classBtn={styles.getInTouchBtn}
        classFront={styles.getInTouchFront}
      />
    </div>
  );
}

export default Presentation;
