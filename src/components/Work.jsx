import { useState } from 'react'
import transition from '../components/Transition'
import { useMediaQuery } from 'react-responsive'
import Spinner from '../assets/Spinner-1s-200px.svg'
import {
  AnimatePresence, motion
} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'

import { EffectCards } from 'swiper/modules'
import "swiper/css";
import "swiper/css/effect-cards";

import slide_image_1 from '../assets/images/project1.png'
import slide_image_2 from '../assets/images/project2.png'
import slide_image_3 from '../assets/images/project3.png'
import { Link } from 'react-router-dom'

import amazonIcon from '../assets/responsive/amazon.svg'
import chatApp from '../assets/responsive/chat.png'
import todoApp from '../assets/responsive/check.png'

const Card = ({ image, preview, github, name }) => {
  return (
    <div className='h-full w-full text-center mx-auto'>
      <img src={image ? image : Spinner} alt="" className='h-72 mx-auto w-full xl:h-full' />
      <div className='mb-8'>
        <h3 className='mb-8 mt-2'>{name}</h3>
        <Link className='px-4 py-4 bg-red-600 mr-8 rounded-xl' to={preview} target='_blank' >Preview</Link>
        <Link className='px-4 py-4 bg-amber-400 rounded-xl' to={github} target='_blank'>Github</Link>
      </div>
    </div>
  )
}

const projects = [
  {
    content: <Card image={slide_image_3} preview={'https://amazon-plus.vercel.app/'} github={'https://github.com/carlos3020/amazon-plus'} name={'Amazon Plus'} />,
    label: "Amazon+"
  },
  {
    content: <Card image={slide_image_2} preview={'https://talk-time.netlify.app/login'} github={'https://github.com/carlos3020/chat-app'} name={'Chat App'} />,
    label: "Chat App"
  },
  {
    content: <Card image={slide_image_1} preview={'https://todo-app-b96a5.web.app/register'} github={'https://github.com/carlos3020/mern-todo-app'} name={'Todo App'} />,
    label: "Todo App"
  }

]




const Work = () => {
  const isDesktopOrMovil = useMediaQuery({
    query: '(min-width: 640px)'
  })



  return (
    <div className='px-20  w-screen overflow-hidden p-0 m-0 flex flex-col content-center items-center overflow-y-hidden'>
      <h2 className='mb-4 text-4xl font-semibold mt-4 xl:mt-0 xl:mb-8  '>Work</h2>
      {
        isDesktopOrMovil ? <PantallaGrande /> : <PantallaPequeña />
      }
    </div>
  )
}






const PantallaPequeña = () => {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
        className=" w-[240px] h-[320px] text-center mx-auto flex items-center justify-center mt-[20%] mb-0"
      >
        <SwiperSlide className='rounded-xl bg-red-400 flex items-center justify-center text-center'>
          <Link className='h-full w-full flex items-center justify-center flex-col' to="https://amazon-plus.vercel.app" target='_blank'>
            <img src={amazonIcon} alt='' className='mx-auto' />
            <h3 className='mt-4'>Amazon Plus</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='rounded-xl bg-[#17C3B2]'>
          <Link className='h-full w-full flex items-center justify-center flex-col' to="https://talk-time.netlify.app/login" target='_blank'>
            <img src={chatApp} alt='' className='mx-auto' />
            <h3 className='mt-4'>Chat App</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='rounded-xl bg-orange-500'>
          <Link className='h-full w-full flex items-center justify-center flex-col' to="https://todo-app-b96a5.web.app/register" target='_blank'>
            <img src={todoApp} alt='' className='mx-auto' />
            <h3 className='mt-4'>Todo App</h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )

}


const PantallaGrande = () => {
  const [selectedTab, setSelectedTab] = useState(projects[0])
  return (
    <div className='w-full  mx-auto bg-white rounded-xl overflow-hidden flex flex-col shadow-lg mb-20 xl:w-[50%] '>
      <nav className='bg-[#fdfdfd] p-[5px] rounded-xl rounded-b-none border-b-[##eeeeee] h-[10%]  '>
        <ul className='list-none p-0 m-0 font-medium text-sm flex w-full '>
          {
            projects.map(item => (
              <li
                key={item.label}
                className={`${item === selectedTab ? "selected" : ""} list-none  mx-0 font-medium text-sm rounded-md rounded-b-none w-full py-2.5 px-16 realtive flex justify-between items-center flex-1 min-w-0 cursor-pointer text-center`}
                onClick={() => setSelectedTab(item)}
              >{
                  `${item.label}`}
                {item === selectedTab ? (
                  <motion.div className='absolute -border-b mx-0 h-[1px] bg-[#8855ff]' />
                ) : null}
              </li>
            ))
          }
        </ul>
      </nav>
      <main>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='h-full w-full'
          >
            {selectedTab
              ? selectedTab.content
              : "No hay"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default transition(Work);