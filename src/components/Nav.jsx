import { Link, useLocation } from 'react-router-dom'
import { HiBriefcase,  HiOutlineCode, HiPaperAirplane } from 'react-icons/hi'

const navData = [
    { name: 'Home', path: '/', icon: <HiPaperAirplane /> },
    { name: 'Work', path: '/work', icon: <HiBriefcase /> },
    { name: 'Skills', path: '/skills', icon: <HiOutlineCode /> }
];

const Nav = () => {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 xl:w-16 xl:max-w-md xl:h-screen w-screen ' >
            {/* Inner */}
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-0 md:px-40 xl:px-0 h-[80px] xl:h-max py-4 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full bg-white/40'>
                {navData.map((link, i) => {
                    return (
                        <Link to={link.path} key={i} className={`${link.path === pathname && 'text-red-600'} relative flex items-center group hover:text-red-600 transition-all duration-300`} >
                            {/* tooltip */}
                            <div className='absolute pr-8 right-0 hidden xl:group-hover:flex'>
                                <div className='bg-white realtive flex  items-center p-[6px] rounded-[3px]'>
                                    <div className='text-[12px] leading-none font-semibold capitalize ' >{link.name}</div>
                                    {/* Triangulo */}
                                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute right-6' ></div>
                                </div>
                            </div>
                            {/* icon */}
                            <div>{link.icon}</div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav