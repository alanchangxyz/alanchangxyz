import React from "react";
import { motion } from "framer-motion";

import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";

import cardStyles from '../SquareCard/Cards.module.css';

const RectangleCard = ({ children, style, ...props }) => {
  return (
    <motion.div className={cardStyles.rectangleCard} style={style} {...props}>
      {children}
    </motion.div>
  )
};

export default RectangleCard;
