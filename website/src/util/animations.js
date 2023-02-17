// these animations take in a state and produce a config that relies on that state to animate
const animationConfigs = {
  scale: (startScale = 1, endScale = 1) => ({
    initial: { scale: startScale, opacity: 0 },
    animateIn: { scale: 1, opacity: 1 },
    animateOut: { scale: endScale, opacity: 0 },
  }),
  scaleY: (startScale = 1, endScale = 1) => ({
    initial: { scaleY: startScale, opacity: 0 },
    animateIn: { scaleY: 1, opacity: 1 },
    animateOut: { scaleY: endScale, opacity: 0 },
  }),
  height: (startHeight = 'auto', animateHeight = 'auto', endHeight = 'auto') => ({
    initial: { height: startHeight, opacity: 0 },
    animateIn: { height: animateHeight, opacity: 1 },
    animateOut: { height: endHeight, opacity: 0 },
  }),
  transformX: (startX = 0, endX = 0) => ({
    initial: { x: startX, opacity: 0 },
    animateIn: { x: 0, opacity: 1 },
    animateOut: { x: endX, opacity: 0 },
  }),
  transformY: (startY = 0, endY = 0) => ({
    initial: { y: startY, opacity: 0 },
    animateIn: { y: 0, opacity: 1 },
    animateOut: { y: endY, opacity: 0 },
  }),
  rotate: (startAngle = 0, endAngle = 0) => ({
    initial: { rotate: startAngle, opacity: 0 },
    animateIn: { rotate: 0, opacity: 1 },
    animateOut: { rotate: endAngle, opacity: 0 },
  }),
  opacity: (startOpacity = 1, endOpacity = 1) => ({
    initial: { opacity: startOpacity },
    animateIn: { opacity: 1 },
    animateOut: { opacity: endOpacity },
  }),
};

const animationStates = {
  animate: {
    initial: 'initial',
    animate: 'animateIn',
    exit: 'animateOut',
  },
  whileInView: (animateOnce) => ({
    initial: 'initial',
    whileInView: 'animateIn',
    exit: 'animateOut',
    ...(animateOnce && { viewport: { once: true } }),
  }),
};

const transitionConfigs = {
  simple: (duration = 0, delay = 0) => ({ duration, delay }),
  spring: (duration = 0, delay = 0, bounce = 0) => ({
    duration, delay, bounce, type: 'spring',
  }),
};

export { animationConfigs, animationStates, transitionConfigs };
