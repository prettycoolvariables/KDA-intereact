import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assests/kda2.jpg"


const Navbar = () => {
  return (
    <div className='absolute w-full h-24 bg-black text-white'>
      <div className='flex justify-between items-center'>
        <div className='p-8'>
          <img class='h-20 w-50' src={Logo}/>

        </div>
        <div>
            <ul className='flex'>
                    <li className='p-7 duration-200 hover:text-blue-800 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='p-7 duration-200 hover:text-blue-800 cursor-pointer'><Link to="/Characters">Characters</Link></li>
                    <li className='p-7 duration-200 hover:text-blue-800 cursor-pointer'><Link to="/MVs">MVs</Link></li>
              
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
