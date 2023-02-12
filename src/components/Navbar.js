import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'
import logo from '../assets/logo.png'

const Navbar = () => {

    const[b2t,setB2t]=useState(false)

    window.addEventListener("scroll",(e)=>{
        if (window.scrollY>=1000) {
            setB2t(true)
        }
        else{
            setB2t(false)
        }
    })

    const [showNav, setShowNav] = useState(false)

    const toggelNav = () => {
        setShowNav(!showNav);
        console.log(showNav);
    }

    return (
        <nav >
            <div id='top' className='absolute top-[-50px]'></div>
            <div className={!b2t ? 'z-[1] w-full flex p-4 justify-between text-white items-center fixed': 'z-[1] w-full flex p-4 justify-between text-white bg-black/40 items-center fixed'}>
                <img src={logo} alt="logo" className='h-20' />
                <HiMenuAlt3 size={30} className='cursor-pointer ' onClick={toggelNav} />
            </div>



            <div className={!showNav ? "bg-black h-screen text-white py-5 px-4 fixed top-0 left-[-100%] z-[1] w-full ease-in-out duration-1000" : "bg-black h-screen text-white py-5 px-4 fixed top-0 left-0 w-full z-[1] ease-in-out duration-1000 opacity-90"}>
                <div className='flex justify-between items-center'>
                <img src={logo} alt="logo" className='h-20' />
                    <IoIosClose size={40} className='cursor-pointer' onClick={toggelNav} />
                </div>
                <div className='pt-48'>
                    <ul className='flex flex-col items-center gap-10 '>
                        <li className='text-3xl font-bold cursor-pointer'>Home</li>
                        <li className='text-3xl font-bold cursor-pointer'>Destinations</li>
                        <li className='text-3xl font-bold cursor-pointer'>Reservations</li>
                        <li className='text-3xl font-bold cursor-pointer'>Amenities</li>
                        <li className='text-3xl font-bold cursor-pointer'>Rooms</li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;