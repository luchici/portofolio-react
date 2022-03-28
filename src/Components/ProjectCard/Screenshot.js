import styles from "./Screenshot.module.scss";

// TODO:props the imagage

function Screenshot(props) {
  return (
    <div className={styles.imageDiv}>
      <img className={styles.img} src={props.image} alt="Site Screenshot" />
      <img
        className={styles.imgIcon}
        src="https://img.icons8.com/ios-filled/100/000000/media-queries.png"
        alt="Responsive Icon"
        title="Responsvie Designe"
      />
    </div>
  );
}

export default Screenshot;
