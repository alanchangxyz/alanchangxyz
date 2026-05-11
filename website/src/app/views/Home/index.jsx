import React from 'react';
import { motion } from "framer-motion";

import CircularPortrait from "../../components/CircularPortrait/CircularPortrait";
import IntroCard from "../../components/IntroCard/IntroCard";

import { useAppContext } from '../../../AppContext';
import {
  animationConfigs,
  animationStates,
  transitionConfigs,
} from "../../../util/animations";
import ProjectsGrid from '../../components/ProjectsGrid';
import styles from './Home.module.css';

const DOT_COLORS = [
  "#FF8B51FF",
  "#F9EB6BFF",
  "#75FF75FF",
  "#6CF4F4FF",
  "#8241F3FF",
  "#FF0048FF",
];

const portraitDots = (
  <motion.div
    className={styles.portraitDotsContainer}
    variants={animationConfigs.transformX(-24, 0)}
    transition={transitionConfigs.spring(0.7, 0.1, 0.2)}
    {...animationStates.whileInView(true)}
  >
    {DOT_COLORS.map((color, index) => (
      <motion.div
        key={index}
        className={styles.dot}
        style={{
          marginLeft: `calc(-20px + ${Math.abs((index - ((DOT_COLORS.length - 1) / 2))) ** 2 * 30}%)`,
          backgroundColor: color,
        }}
      />
    ))}
  </motion.div>
);

const Home = () => {
  return (
    <motion.div className={styles.homeContainer}>
      <motion.div className={styles.heroSection}>
        <motion.div className={styles.heroInner}>
          {portraitDots}
          <motion.div className={styles.portraitContainer}>
            <CircularPortrait />
          </motion.div>
          <motion.div className={styles.taglineContainer}>
            <motion.div
              className={styles.taglineCard}
              variants={animationConfigs.scale(0.97, 1)}
              transition={transitionConfigs.spring(0.5, 0.15, 0.15)}
              {...animationStates.whileInView(true)}
            >
              <div className={styles.taglineContent}>
                <motion.div
                  className={styles.taglineLine1}
                  variants={animationConfigs.transformY(12, 0)}
                  transition={transitionConfigs.spring(0.5, 0.3)}
                  {...animationStates.whileInView(true)}
                >
                  passionate about using tech
                </motion.div>
                <motion.div
                  className={styles.taglineLine2}
                  variants={animationConfigs.transformY(12, 0)}
                  transition={transitionConfigs.spring(0.5, 0.5)}
                  {...animationStates.whileInView(true)}
                >
                  to bring about
                </motion.div>
                <motion.div
                  className={styles.taglineLine3}
                  variants={animationConfigs.transformY(12, 0)}
                  transition={transitionConfigs.spring(0.5, 0.9)}
                  {...animationStates.whileInView(true)}
                >
                  exceptional change
                </motion.div>
                <motion.div
                  className={styles.taglineLine4}
                  variants={animationConfigs.transformY(12, 0)}
                  transition={transitionConfigs.spring(0.5, 1.1)}
                  {...animationStates.whileInView(true)}
                >
                  &amp; social good
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.introSection}>
        <motion.div className={styles.introInner}>
          <IntroCard />
        </motion.div>
      </motion.div>
      <ProjectsGrid />
    </motion.div>
  );
};

export default Home;
