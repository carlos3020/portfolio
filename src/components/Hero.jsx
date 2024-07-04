import heroImg from '../assets/programming.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Hero = () => {
  return (
    <div className='flex flex-col  xl:flex-row text-center xl:text-left mx-auto justify-center items-center px-20 h-screen xl:pb-10'>
      <div className='flex flex-col xl:inline-block'>
        <motion.h1
          className='font-semibold text-6xl'
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >Soy Kevin Villota</motion.h1>
        <motion.p
          className='mt-4 mb-8'
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          Desarrollador Autodidacta y egresado del SENA
        </motion.p>
        <Link
        to="https://drive.google.com/file/d/1Np4p-otBoyQVVzjk7E1SHLziArm4XoxO/view?usp=sharing"
        target='_blank'
        className='bg-red-600 px-8 py-4 text-white'
        >Ver CV</Link>
      </div>
      <motion.img
      src={heroImg}
      alt=''
      className='hidden xl:flex w-1/2'
      variants={fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      />
    </div>
  )
}

export default Hero