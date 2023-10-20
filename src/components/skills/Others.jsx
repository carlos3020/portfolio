import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsGit } from 'react-icons/bs'
import { FaFigma } from 'react-icons/fa'
import styles from '../styles.module.css'

export const Others = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex justify-center items-center w-full h-full' >
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={`${styles.parent_others} bg-white w-[100px] h-[100px] flex justify-center items-center`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`${isOpen ? styles.child_backend : "hidden"} mx-auto text-[#F05030] text-4xl flex flex-col justify-center items-center`}>
                    <BsGit />
                    <p className='text-base mx-auto text-black ' >Git</p>
                </div>
                <motion.div layout className={`${isOpen ? "hidden" : "w-[100px] h-[40px] flex items-center justify-center text-center  mx-auto font-semibold"} `} >
                    Others
                </motion.div>
                <div className={`${isOpen ? styles.child_backend : "hidden"} mx-auto text-black text-4xl flex flex-col justify-center items-center`}>
                    <FaFigma />
                    <p className='text-base mx-auto text-black ' >Figma</p>
                </div>
                </motion.div>
        </div>
    )

}
