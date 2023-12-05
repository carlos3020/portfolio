import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import { FaNodeJs } from 'react-icons/fa'
import { FaJava, FaPython } from 'react-icons/fa6'
import { BiLogoMongodb } from 'react-icons/bi'
import { SiExpress, SiMysql, SiFirebase } from 'react-icons/si'

export const Backend = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className='flex justify-center items-center w-full h-full '>
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          className={`${styles.parent_backend} bg-white w-[100px] h-[100px] flex justify-center items-center gap-x-1`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#699F64] text-2xl flex flex-col justify-center items-center`}>
            <FaNodeJs />
            <p className='text-base mx-auto text-black ' >Node Js</p>
          </div>
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#12924F] text-2xl flex flex-col justify-center items-center`}>
            <BiLogoMongodb />
            <p className='text-base mx-auto text-black ' >Mongo DB</p>
          </div>
  
          <div className={`${isOpen ? styles.child : "hidden"} mx-auto text-[#575757] text-2xl flex flex-col justify-center items-center`}>
            <SiExpress />
            <p className='text-base mx-auto text-black ' >Express</p>
          </div>
  
          <motion.div layout className={`${isOpen ? "hidden" : "w-[100px] h-[40px] flex items-center justify-center text-center  mx-auto font-semibold"} `} >
            Backend
          </motion.div>
  
          <SiMysql className={`${isOpen ? styles.child : "hidden"} mx-auto text-6xl text-[#56669A]`} />
  
          <div className={`${isOpen ? styles.child_backend : "hidden"} mx-auto text-[#FFCB2B] text-2xl flex flex-col justify-center items-center`}>
            <SiFirebase />
            <p className='text-base mx-auto text-black ' >Firebase</p>
          </div>

          <div className={`${isOpen ? styles.child_backend : "hidden"} mx-auto text-[#027AC0] text-2xl flex flex-col justify-center items-center`}>
            <FaJava />
            <p className='text-base mx-auto text-black ' >Java</p>
          </div>

          <div className={`${isOpen ? styles.child_backend : "hidden"} mx-auto text-[#3975A5] text-2xl flex flex-col justify-center items-center`}>
            <FaPython />
            <p className='text-base mx-auto text-black ' >Python</p>
          </div>
  
        </motion.div>
      </div>
    )
  }