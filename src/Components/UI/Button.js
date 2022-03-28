import styles from "./Button.module.scss";

function Button(props) {
  function clickHandler(props) {
    // window.open(props.address);
  }

  return (
    <button
      className={`${styles.button} ${props.classBtn}`}
      onClick={clickHandler}
    >
      <span className={`${styles.front} ${props.classFront}`}>
        {props.text}
      </span>
    </button>
  );
}

export default Button;
