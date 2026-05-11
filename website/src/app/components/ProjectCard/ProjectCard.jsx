import { motion } from "framer-motion";

import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";

import cardStyles from '../SquareCard/Cards.module.css';

const ProjectCard = ({ name, color, image, description, subhead, ...props }) => (
  <motion.div
    className={cardStyles.squareCard}
    {...props}
  >
    <div className={cardStyles.projectCardHeader} style={{ backgroundColor: color }}>
      {name}
    </div>
    <div className={cardStyles.projectCardContent}>
      <img src={image} className={cardStyles.projectCardImage} />
    </div>
  </motion.div>
);

export default ProjectCard;
