import React from 'react';
import { motion } from 'framer-motion';

import { animationConfigs, animationStates, transitionConfigs } from '../../../util/animations';
import styles from './CircularPortrait.module.css';

import portrait from '../../../images/portrait.webp';

const CircularPortrait = ({ style }) => {
  return (
    <motion.img
      src={portrait}
      className={styles.circle}
      alt="Portrait"
      fetchPriority="high"
      {...animationStates.whileInView(false)}
      variants={animationConfigs.transformY(-40, 0, -40)}
      transition={transitionConfigs.spring(0.5, 0.1, 0.4)}
      {...style}
    />
  );
};

export default CircularPortrait;
