import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// import Footer from '../../components/Footer/Footer';
import { animationConfigs, animationStates, transitionConfigs } from '../../../util/animations';

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
    <div className="ctc-home-bg">
      <motion.div
        className="ctc-home-1-bg"
        variants={animationConfigs.scale(0.5, 0.6)}
        transition={transitionConfigs.spring(1, 0, 0.2)}
        {...animationStates.animate}
      >
        Hello!
      </motion.div>
      {/* <Footer className="home-footer" /> */}
    </div>
  );
};

export default Home;
