import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const checkOpen = () => {
    setOpen(!open);
  }


  const closeMenu = () =>{
    setOpen(!open)
  }

  return (
    <div className='nav bg-[#fff] h-[15vh] fixed top-0 w-[100%] z-[1] max-[430px]:h-[10vh] '>
    <div className='max-w-[1300px] max-md:px-3 m-auto py-4  px-5 '>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-[27px] font-bold max-[430px]:text-[18px] '>Mokola Ibadan Community</h1>
           <div className={`navLinks flex flex-row justify-center items-center h-[100%] gap-3.5  ${open ? 'show' : '' }`}>
              <Link className='text-[19px]' onClick={closeMenu} to='/'>Home</Link>
              <Link className='text-[19px]' onClick={closeMenu} to='/community'>Community</Link>
              <Link className='text-[19px]' onClick={closeMenu} to='/support'>Support</Link>
              <Link className='text-[19px]' onClick={closeMenu} to='/contact'>Contact</Link>
           </div>

           <div className='hamburger hidden max-[430px]:block' onClick={checkOpen}>
             <div className={`bars ${open ? 'show' : ''}`}></div>
             <div className={`bars ${open ? 'show' : ''}`}></div>
             <div className={`bars ${open ? 'show' : ''}`}></div>
           
           </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar;