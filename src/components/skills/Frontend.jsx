import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact } from 'react-icons/fa'
import tailwindLogo from '../../assets/tailwind-css.svg'
import nextLogo from '../../assets/next-js.svg'
import astroLogo from '../../assets/astro-icon-dark.svg'
import styles from '../styles.module.css'

export const Frontend = () => {
    const [isOpen, setIsOpen] = useState(false)
  
  
    return (
      <div className='flex justify-center items-center w-full h-full'>
        <motion.div
          className={`${styles.parent_frontend} bg-white w-[100px] h-[100px] justify-center items-center grid grid-cols-4 overflow-x-hidden text-center `}
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          onClick={() => setIsOpen(!isOpen)}
  
        >
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#FE4C1E] text-4xl flex flex-col justify-center items-center`}>
            <FaHtml5 />
            <p className='text-base mx-auto text-black ' >HTML 5</p>
          </div>
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#2277FF] text-4xl flex flex-col justify-center items-center`}>
            <FaCss3Alt />
            <p className='text-base mx-auto text-black ' >CSS</p>
          </div>
  
  
          <FaSass className={`${isOpen ? styles.child : "hidden"} mx-auto text-4xl text-[#D95496]`} />
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#F7DF1E] text-4xl flex flex-col justify-center items-center`}>
            <FaJsSquare />
            <p className='text-base mx-auto text-black ' >JavaScript</p>
          </div>
  
  
          <motion.div layout className={`${isOpen ? "hidden" : "w-[100px] h-[40px] flex items-center justify-center text-center  mx-auto font-semibold"} `}>
            FrontEnd
          </motion.div>
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#149ECA] text-4xl flex flex-col justify-center items-center`}>
            <FaReact />
            <p className='text-base mx-auto text-black ' >React</p>
          </div>
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto  text-4xl flex flex-col justify-center items-center`}>
            <img src={tailwindLogo} className='w-[31px]' />
            <p className='text-base mx-auto text-black ' >Tailwind CSS</p>
          </div>
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto  text-4xl flex flex-col justify-center items-center`}>
            <img src={nextLogo} className={` w-[31px] mx-auto`} />
            <p className='text-base mx-auto text-black ' >Next Js</p>
          </div>
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto  text-4xl flex flex-col justify-center items-center`}>
            <img src={astroLogo} className={` w-[31px]  mx-auto`} />
            <p className='text-base mx-auto text-black ' >Astro</p>
          </div>
        </motion.div>
      </div>
    )
  }