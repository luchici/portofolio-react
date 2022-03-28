import ProjectCard from "./Components/ProjectCard/ProjectCard";
import Presentation from "./Components/Presentation/Presentation";
import styles from "./App.module.scss";

import image1 from "./resources/icon/Banana.png";
import image2 from "./resources/icon/BlackCat.jpg";

function App() {
  return (
    <div className={styles.App}>
      <Presentation className={styles.grid} />
      <ProjectCard image={image1} />
      <ProjectCard image={image2} />
    </div>
  );
}

export default App;
