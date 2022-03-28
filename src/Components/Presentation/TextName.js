import styles from "./TextName.module.scss";

function TextName(props) {
  return (
    <div className={styles.text}>
      <p className={styles.LookingForWork}>LOOKING FOR WORK</p>
      <h6>Hi, my name is</h6>
      <h1>Bogdan Luchici</h1>
      <h6>and I am</h6>
      <h3>Java Developer</h3>
    </div>
  );
}

export default TextName;
