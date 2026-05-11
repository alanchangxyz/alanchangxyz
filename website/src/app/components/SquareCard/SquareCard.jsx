import React from "react";
import { motion } from "framer-motion";

import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";

import cardStyles from './Cards.module.css';

const SquareCard = ({ children, style, className, ...props }) => {
  return (
    <motion.div className={`${cardStyles.squareCard}${className ? ` ${className}` : ''}`} style={style} {...props}>
      {children}
    </motion.div>
  )
};

export default SquareCard;
