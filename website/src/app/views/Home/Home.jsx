import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// import Footer from '../../components/Footer/Footer';
import { animationConfigs, animationStates, transitionConfigs } from '../../../util/animations';

import portrait from '../../../images/portrait-sq.jpg';
import styles from './Home.module.css';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  return (
    <>
      <motion.div
        className={styles.home1}
        variants={animationConfigs.scale(0.5, 0.6)}
        transition={transitionConfigs.spring(1, 0, 0.2)}
        {...animationStates.animate}
      >
        <div className={styles.home1Top}>
          <div className={styles.home1Left}>
            <div className={styles.h1LText}>
              Hello!
            </div>
          </div>
          <div className={styles.home1Right}>
            <motion.img
              src={portrait}
              className={styles.home1Portrait}
              {...animationStates.animate}
              variants={animationConfigs.opacity(0, 1, 0)}
              transition={transitionConfigs.spring(1.5, 0.5, 0.2)}
            />
          </div>
        </div>
        <div className={styles.home1Bottom}>
          <div className={styles.h1BText}>
            Hello!
          </div>
        </div>
      </motion.div>
      {/* <Footer className="home-footer" /> */}
    </>
  );
};

export default Home;
