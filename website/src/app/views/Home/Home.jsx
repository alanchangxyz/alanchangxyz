import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download,
  GitHub,
  Grid,
  Linkedin,
  Mail,
} from 'react-feather';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import useViewport from '../../../util/useViewport';
import { animationConfigs, animationStates, transitionConfigs } from '../../../util/animations';
import projects from '../projects';

import portrait from '../../../images/portrait-circle.png';
// import resume from '../../../resume-alan-chang-sp2023.pdf';
import styles from './Home.module.css';

function Home() {
  const [hovered, setHovered] = useState(null);
  const { width } = useViewport();

  return (
    <motion.div
      className={styles.home}
      variants={animationConfigs.opacity(0.2, 1)}
      transition={transitionConfigs.spring(1, 0, 0.2)}
      {...animationStates.animate}
    >
      <motion.div
        className={styles.home1}
        variants={animationConfigs.opacity(0.2, 1)}
        transition={transitionConfigs.spring(1, 0, 0.2)}
        {...animationStates.animate}
      >
        {width > 1100 ? (
          <>
            <div className={styles.home1Left}>
              {/* <div className={styles.home1TopCircles}>
                {['#FF6D6D', '#FFFF83'].map((backgroundColor, index) => (
                  <div
                    className={styles.h1RC}
                    style={{
                      backgroundColor,
                      marginLeft: 80 + 40 * index,
                      marginTop: '20%',
                      position: 'relative'
                    }}
                  />
                  )
                )}
              </div> */}
              <motion.div
                className={styles.home1LeftBox}
                {...animationStates.whileInView(false)}
                variants={animationConfigs.scale(0.3, 0.5)}
                transition={transitionConfigs.spring(0.75, 0.1, 0.2)}
              >
                <div className={styles.h1LHeader}>
                  <p className={styles.h1LHP}>
                    Alan Chang
                    <span className={styles.h1P}>[he/him]</span>
                  </p>
                  <p className={styles.h1LSH}>University of California, Irvine - Computer Science</p>
                  {/* <p className={styles.h1LSH}>Computer Science @ University of California, Irvine</p> */}
                </div>
                <div className={styles.h1BT}>
                  <p className={styles.h1BP}>
                    Passionate about using tech to bring about exceptional change and social good.
                    Currently building at{' '}
                    <a className={styles.h1RL} href="https://ctc-uci.com" alt="Commit the Change">Commit the Change</a>
                    {' '}and{' '}
                    <a className={styles.h1RL} href="https://hack.ics.uci.edu" alt="Hack at UCI">Hack at UCI</a>
                    !
                  </p>
                  <p className={styles.h1BP}>
                    My interests include DevOps, AI & ML, and trying the best food Orange County has to offer. You can see my work and connect here 👇
                  </p>
                  <div className={styles.home1BottomBoxButtons}>
                    <a href="https://github.com/alanchangxyz" alt="alanchangxyz on Github">
                      <div
                        className={`${styles.h1Button} ${hovered === 'GitHub' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('GitHub')}
                        onFocus={() => setHovered('GitHub')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <GitHub className={styles.h1Icon} />
                        <p className={styles.h1ButtonText}>
                          @alanchangxyz
                        </p>
                      </div>
                    </a>
                    <a href="https://linkedin.com/in/acxyz" alt="in/acxyz on LinkedIn">
                      <div
                        className={`${styles.h1Button} ${hovered === 'LinkedIn' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('LinkedIn')}
                        onFocus={() => setHovered('LinkedIn')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <Linkedin className={`${styles.h1LinkedinIcon} ${styles.h1Icon}`} />
                        <p className={styles.h1ButtonText}>
                          /in/acxyz
                        </p>
                      </div>
                    </a>
                    <a href="mailto:alanc16@uci.edu" alt="Email me at alanc16@uci.edu">
                      <div
                        className={`${styles.h1Button} ${hovered === 'Email' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('Email')}
                        onFocus={() => setHovered('Email')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <Mail className={styles.h1Icon} />
                        <p className={styles.h1ButtonText}>
                          alanc16@uci.edu
                        </p>
                      </div>
                    </a>
                    <div
                      className={`${styles.h1Button} ${hovered === 'Portfolio' && styles.h1ButtonHover}`}
                      role="button"
                      tabIndex={0}
                      onMouseOver={() => setHovered('Portfolio')}
                      onFocus={() => setHovered('Portfolio')}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => document.getElementsByClassName(styles.home2)[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}
                      onKeyDown={() => document.getElementsByClassName(styles.home2)[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                      <Grid className={styles.h1Icon} />
                      <p className={styles.h1ButtonText}>
                        view portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={styles.home1Right}>
              <motion.img
                src={portrait}
                className={styles.home1Portrait}
                {...animationStates.whileInView(false)}
                variants={animationConfigs.transformY(-40, 0, -40)}
                transition={transitionConfigs.spring(0.5, 0.1, 0.4)}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.home1Top}>
              <motion.img
                src={portrait}
                className={styles.home1Portrait}
                {...animationStates.whileInView(false)}
                variants={animationConfigs.transformY(-40, 0, -40)}
                transition={transitionConfigs.spring(0.5, 0.1, 0.4)}
              />
            </div>
            <div className={styles.home1Bottom}>
              <motion.div
                className={styles.home1BottomBox}
                {...animationStates.whileInView(false)}
                variants={animationConfigs.scale(0.3, 0.5)}
                transition={transitionConfigs.spring(0.75, 0.1, 0.2)}
              >
                <div className={styles.home1BottomBoxHeader}>
                  <p className={styles.home1BottomBoxHeaderBig}>
                    Alan Chang
                    <span className={styles.home1BottomBoxHeaderSmall}>[he/him]</span>
                  </p>
                  <p className={styles.home1BottomBoxSubhead}>UC Irvine - Computer Science</p>
                </div>
                <div className={styles.home1BottomBoxBody}>
                  <p className={styles.home1BottomBoxBodyP}>
                    Passionate about using tech to bring about exceptional change and social good.
                    Currently building at{' '}
                    <a className={styles.h1RL} href="https://ctc-uci.com" alt="Commit the Change">Commit the Change</a>
                    {' '}and{' '}
                    <a className={styles.h1RL} href="https://hack.ics.uci.edu" alt="Hack at UCI">Hack at UCI</a>
                    !
                  </p>
                  <p className={styles.home1BottomBoxBodyP}>
                    My interests include DevOps, AI & ML, and trying the best food Orange County has to offer. You can see my work and connect here 👇
                  </p>
                  <div className={styles.home1BottomBoxButtons}>
                    <a href="https://github.com/alanchangxyz" alt="alanchangxyz on Github">
                      <div
                        className={`${styles.h1Button} ${hovered === 'GitHub' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('GitHub')}
                        onFocus={() => setHovered('GitHub')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <GitHub className={styles.h1Icon} />
                        <p className={styles.h1ButtonText}>
                          @alanchangxyz
                        </p>
                      </div>
                    </a>
                    <a href="https://linkedin.com/in/acxyz" alt="in/acxyz on LinkedIn">
                      <div
                        className={`${styles.h1Button} ${hovered === 'LinkedIn' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('LinkedIn')}
                        onFocus={() => setHovered('LinkedIn')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <Linkedin className={`${styles.h1LinkedinIcon} ${styles.h1Icon}`} />
                        <p className={styles.h1ButtonText}>
                          /in/acxyz
                        </p>
                      </div>
                    </a>
                    <a href="mailto:alanc16@uci.edu" alt="Email me at alanc16@uci.edu">
                      <div
                        className={`${styles.h1Button} ${hovered === 'Email' && styles.h1ButtonHover}`}
                        onMouseOver={() => setHovered('Email')}
                        onFocus={() => setHovered('Email')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <Mail className={styles.h1Icon} />
                        <p className={styles.h1ButtonText}>
                          alanc16@uci.edu
                        </p>
                      </div>
                    </a>
                    <div
                      className={`${styles.h1Button} ${hovered === 'Portfolio' && styles.h1ButtonHover}`}
                      role="button"
                      tabIndex={0}
                      onMouseOver={() => setHovered('Portfolio')}
                      onFocus={() => setHovered('Portfolio')}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => document.getElementsByClassName(styles.home2)[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}
                      onKeyDown={() => document.getElementsByClassName(styles.home2)[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                      <Grid className={styles.h1Icon} />
                      <p className={styles.h1ButtonText}>
                        view portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
      <motion.div
        className={styles.home2}
        variants={animationConfigs.opacity(0.2, 1)}
        transition={transitionConfigs.spring(1, 0, 0.2)}
        {...animationStates.animate}
      >
        <div className={styles.home2SplitHeaders}>
          <div className={styles.home2SplitLeft}>
            <motion.div
              className={styles.home2ExperienceHeader}
              variants={animationConfigs.transformX('-60%', '60%')}
              transition={transitionConfigs.spring(1.1, 0, 0.2)}
              {...animationStates.whileInView(true)}
            >
              <p className={styles.home2ProjectsHeaderText}>
                Experience
              </p>
            </motion.div>
          </div>
          <div className={styles.home2SplitRight}>
            <a href="/resume-alan-chang-sp2023.pdf" alt="Download Alan Chang's resume" download>
              <motion.div
                className={`${styles.home2DownloadHeader} ${hovered === 'Resume' && styles.h1ButtonHover}`}
                onMouseOver={() => setHovered('Resume')}
                onFocus={() => setHovered('Resume')}
                onMouseLeave={() => setHovered(null)}
                variants={animationConfigs.transformX('60%', '-60%')}
                transition={transitionConfigs.spring(1.1, 0, 0.2)}
                {...animationStates.whileInView(true)}
              >
                <Download className={styles.home2DownloadIcon} />
                <p className={styles.home2DownloadHeaderText}>
                  Resume
                </p>
              </motion.div>
            </a>
          </div>
        </div>
        <div className={styles.home2Projects}>
          {projects.pro.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
        <motion.div
          className={styles.home2ProjectsHeader}
          variants={animationConfigs.transformX('-60%', '60%')}
          transition={transitionConfigs.spring(1.1, 0, 0.2)}
          {...animationStates.whileInView(true)}
        >
          <p className={styles.home2ProjectsHeaderText}>
            Projects
          </p>
        </motion.div>
        <motion.div
          className={styles.home2Projects}
          variants={animationConfigs.rotate(-10, 2)}
          transition={transitionConfigs.spring(0.2, 0, 0.1)}
          {...animationStates.whileInView(true)}
        >
          {projects.proj.map((p) => <ProjectCard key={p.name} {...p} />)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
