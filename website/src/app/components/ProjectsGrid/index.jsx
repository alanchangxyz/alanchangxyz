import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard/ProjectCard";
import SquareCard from "../SquareCard/SquareCard";
import RectangleCard from "../RectangleCard/RectangleCard";

import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";

import projects from "../../views/projects";

import grad from "../../../images/grad.jpg";
import hike from "../../../images/hike.jpg";
import hackuci from "../../../images/hackuci.jpg";
import tokage from "../../../images/tokage.jpg";
import styles from './ProjectsGrid.module.css';

const containerVariants = {
  initial: {},
  animateIn: { transition: { staggerChildren: 0.08 } },
  animateOut: {},
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animateIn: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  animateOut: { opacity: 0 },
};

const ProjectsGrid = () => {
  return (
    <motion.div
      className={styles.projectsGridContainer}
      variants={containerVariants}
      {...animationStates.whileInView(true)}
    >
      <SquareCard variants={itemVariants} className={styles.titleCard}>
        <span className={styles.titleCardItalic}>things i've done,</span><br />
        <span className={styles.titleCardBold}>places i've been</span><br />
      </SquareCard>
      <SquareCard variants={itemVariants}>
        <img className={styles.squareCardImage} src={grad} />
      </SquareCard>
      {projects.proj.map((p) => (
        <ProjectCard key={p.name} variants={itemVariants} {...p} />
      ))}
      <SquareCard variants={itemVariants}>
        <img className={styles.squareCardImage} src={tokage} />
      </SquareCard>
      <SquareCard variants={itemVariants}>
        <img className={styles.squareCardImage} src={hike} />
      </SquareCard>
      <RectangleCard variants={itemVariants}>
        <img className={styles.squareCardImage} src={hackuci} />
      </RectangleCard>
    </motion.div>
  );
}

export default ProjectsGrid;
