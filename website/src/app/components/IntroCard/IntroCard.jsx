import { motion } from 'framer-motion';
import { GitHub, Grid, Linkedin, Mail } from 'react-feather';

import { animationConfigs, animationStates, transitionConfigs } from '../../../util/animations';

import styles from '../../views/Home/Home.module.css';
import introCardStyles from './IntroCard.module.css';
import projectsGridStyles from '../ProjectsGrid/ProjectsGrid.module.css';

const FULL_NAME = 'Alan Chang';
const SECONDARY = '[he/him]';
const TAGLINE = 'software engineer - seattle, wa';
const INTRO = <>
  <motion.p
    className={introCardStyles.bodyParagraph}
    variants={animationConfigs.transformY(-20, 20)}
    transition={transitionConfigs.spring(0.9, 0.8, 0.1)}
    {...animationStates.whileInView(true)}
  >
    I view and interact with the world through the lens of a diverse array of perspectives
    that I've lived, encountered, and shared with others throughout my life. I'm at my best when
    I'm able to bring a voice to these perspectives, to create with depth and intention for the greater good.
  </motion.p>
  <motion.p
    className={introCardStyles.bodyParagraph}
    variants={animationConfigs.transformY(-20, 20)}
    transition={transitionConfigs.spring(0.9, 0.8, 0.1)}
    {...animationStates.whileInView(true)}
  >
    I'm an avid foodie with interests in sports, photography, and indie pop music! I'm always in search
    of novel and excellent experiences, and constantly strive to pursue these values in my own endeavors.
  </motion.p>
  <motion.p
    className={introCardStyles.bodyParagraph}
    variants={animationConfigs.transformY(-20, 20)}
    transition={transitionConfigs.spring(0.9, 0.8, 0.1)}
    {...animationStates.whileInView(true)}
  >
    I currently build for FinOps systems that create transparency, clarity, and financial agency for millions of users each month.
    I'm always looking to expand my knowledge & network! You can find me at the following links.
  </motion.p>
</>;
const EMAIL = "alan@alanchang.xyz";
const LINKEDIN = "https://linkedin.com/in/acxyz";

const IntroCard = () => {
  return (
    <motion.div
      className={introCardStyles.box}
      {...animationStates.whileInView(false)}
      variants={animationConfigs.scale(0.3, 0.5)}
      transition={transitionConfigs.spring(0.75, 0.1, 0.2)}
    >
      <motion.div className={introCardStyles.headerContainer}>
        <motion.p
          className={introCardStyles.headerName}
          variants={animationConfigs.transformX(-20, 20)}
          transition={transitionConfigs.simple(0.4, 0.4)}
          {...animationStates.whileInView(true)}
        >
          {FULL_NAME}
          <motion.span
            className={introCardStyles.headerNameAlt}
            variants={animationConfigs.transformX(-20, 20)}
            transition={transitionConfigs.simple(0.4, 0.6)}
            {...animationStates.whileInView(true)}
          >
            {SECONDARY}
          </motion.span>
        </motion.p>
        <motion.p
          className={introCardStyles.headerSecondary}
          variants={animationConfigs.transformX(-20, 20)}
          transition={transitionConfigs.simple(0.5, 0.8)}
          {...animationStates.whileInView(true)}
        >
          {TAGLINE}
        </motion.p>
      </motion.div>
      <motion.div className={introCardStyles.bodyContainer}>
        <div className={introCardStyles.introContainer}>
          <div className={introCardStyles.introTextContainer}>
            {INTRO}
          </div>
          <div className={introCardStyles.socialLinksContainer}>
            <motion.a
              href="https://github.com/alanchangxyz"
              alt="alanchangxyz on Github"
              variants={animationConfigs.transformY(-12, 0)}
              transition={transitionConfigs.spring(0.6, 0.4)}
              {...animationStates.whileInView(true)}
            >
              <div className={introCardStyles.socialLinkButton}>
                <GitHub className={introCardStyles.socialLinkButtonIcon} />
                <p className={introCardStyles.socialLinkButtonText}>@alanchangxyz</p>
              </div>
            </motion.a>
            <motion.a
              href={LINKEDIN}
              alt="in/acxyz on LinkedIn"
              variants={animationConfigs.transformY(-12, 0)}
              transition={transitionConfigs.spring(0.6, 0.65)}
              {...animationStates.whileInView(true)}
            >
              <div className={introCardStyles.socialLinkButton}>
                <Linkedin className={`${introCardStyles.socialLinkButtonIcon}`} />
                <p className={introCardStyles.socialLinkButtonText}>/in/acxyz</p>
              </div>
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              alt={`Email me at ${EMAIL}`}
              variants={animationConfigs.transformY(-12, 0)}
              transition={transitionConfigs.spring(0.6, 0.9)}
              {...animationStates.whileInView(true)}
            >
              <div className={introCardStyles.socialLinkButton}>
                <Mail className={introCardStyles.socialLinkButtonIcon} />
                <p className={introCardStyles.socialLinkButtonText}>{EMAIL}</p>
              </div>
            </motion.a>
            <motion.div
              className={introCardStyles.socialLinkButton}
              role="button"
              tabIndex={0}
              variants={animationConfigs.transformY(-12, 0)}
              transition={transitionConfigs.spring(0.6, 1.1)}
              {...animationStates.whileInView(true)}
              onClick={() => document
                .getElementsByClassName(projectsGridStyles.projectsGridContainer)[0]
                .scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })}
            >
              <Grid className={introCardStyles.socialLinkButtonIcon} />
              <p className={introCardStyles.socialLinkButtonText}>what's on the menu?</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroCard;
