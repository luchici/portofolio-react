import styles from "./IconLink.module.scss";

function IconLink(props) {
  return (
    <img
      src={props.image}
      alt={props.alt}
      className={`${styles.Icon} ${props.className}`}
    />
  );
}

export default IconLink;
