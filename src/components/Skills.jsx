import transition from './Transition'




import { Others } from './skills/Others'
import { Frontend } from './skills/Frontend'
import { Backend } from './skills/Backend'


export const Skills = () => {



  return (
    <div className='px-20  w-screen overflow-hidden p-0 m-0 flex flex-col content-center items-center overflow-y-hidden gap-y-4 '>
      <h2 className='mb-4 text-4xl font-semibold mt-4 xl:mt-0 xl:mb-8'>Skills</h2>
      {/* Contenido */}
      <Frontend />
      <Backend />
      <Others />
    </div>
  )
}









export default transition(Skills)