import { motion } from "framer-motion";

// variants

export const transitionVariants = {
  initial:{
    x:'100%',
    width:'100%'
  },
  animate:{
    x:'0%',
    width:'0%'
  },
  exit:{
    x:['0%','100%'],
    width:['0%','100%']

  }
}

const transition = (OgComponent) => {
  return () => (
    
    <>
      <OgComponent />
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#CF5C36]"
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className=" bg-[#8447FF] fixed top-0 bottom-0 right-full w-screen h-screen z-30 "
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className=" bg-[#F0C808] fixed top-0 bottom-0 right-full w-screen h-screen z-30 "
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default transition;
