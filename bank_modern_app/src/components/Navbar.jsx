import React, { useState } from 'react'
import {close, logo,menu} from "../assets"
import {navLinks} from "../constants"
const Navbar = () => {
  const [toogle, settoggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt= "bank"  className='w-[124]px h-[32]px'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16]px
               text-white ${index===navLinks.length-1 ? 'mr-0':'mr-10'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
          ))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toogle? close:menu}
        alt="menu"
        className='w-[28]px h-[28]px object-contain' onClick={()=>settoggle((prev)=>
          !prev
        )}
        />
        <div className={`${toogle? 'flex': 'hidden '} p-6 bg-black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        `}>
           <ul className='list-none flex flex-col  justify-end items-center flex-1'>
        {
          navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16]px
               text-white ${index===navLinks.length-1 ? 'mr-0':'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
          ))
        }
      </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar