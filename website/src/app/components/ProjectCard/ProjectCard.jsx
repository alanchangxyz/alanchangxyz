import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  name, subhead, color, description,
}) => (
  <motion.div
    className={styles.projectCard}
    variants={animationConfigs.rotate(15, -15)}
    transition={transitionConfigs.spring(1.25, 0, 0.2)}
    {...animationStates.whileInView(true)}
  >
    <div
      className={styles.projectCardHeader}
      style={{ backgroundColor: color }}
    >
      <motion.p
        className={styles.projectCardText}
        variants={animationConfigs.opacity(0, 0)}
        transition={transitionConfigs.simple(0.5, 0.5)}
        {...animationStates.whileInView(true)}
      >
        {name}
      </motion.p>
      <motion.p
        className={styles.projectCardSubhead}
        variants={animationConfigs.opacity(0, 0)}
        transition={transitionConfigs.simple(0.5, 0.6)}
        {...animationStates.whileInView(true)}
      >
        {subhead}
      </motion.p>
    </div>
    <motion.div
      className={styles.projectCardBody}
      variants={animationConfigs.opacity(0, 0)}
      transition={transitionConfigs.simple(0.7, 0.6)}
      {...animationStates.whileInView(true)}
    >
      {description}
    </motion.div>
  </motion.div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  subhead: PropTypes.string,
  color: PropTypes.string.isRequired,
  description: PropTypes.string,
};

ProjectCard.defaultProps = {
  subhead: "",
  description: "",
};

export default ProjectCard;
