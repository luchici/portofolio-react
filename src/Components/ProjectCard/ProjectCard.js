import Screenshot from "./Screenshot";

import styles from "./ProjectCard.module.scss";



function ProjectCard(props) {
  return (
    <div className={styles.ProjectCard}>
      <Screenshot image={props.image} />
      <div className={styles.cardText}>
        <h3>To-Do List</h3>
        <p>
          Culpa sint excepteur ut occaecat sint nostrud culpa nulla eu. Aliquip
          tempor nulla aliqua quis aliqua nostrud amet est. Deserunt quis tempor
          veniam minim dolore ea esse est et sint dolor. Dolore cillum
          incididunt incididunt exercitation in nulla aliquip cillum in laborum
          velit pariatur do.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
