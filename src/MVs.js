import React from 'react'
import BG from "./assests/bg.jpg"
import { Link } from 'react-router-dom'

function MVs() {
  return (
    <div className='flex items-center justify-center w-full h-screen text-center'>
        <img class="object-cover h-full w-full absolute -z-10" src={BG}/>

        <div className='flex flex-col items-center text-black'>
            <h1 className='text-4xl'>POP/STARS(ft. Madison Beer, (G)I-DLE, Jaira Burns)</h1>
       <div className='underline hover:text-blue-800 pt-2 pb-10 flex text-white'>
       <h1>
        <a href='https://youtu.be/UOxkGD8qRB4?si=X7yZ_fG-NHv3_eiT' rel="noopener" target="_blank">click here</a>
       </h1>
       </div>


            <h2 className='text-4xl'>MORE ft. Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns, Seraphine</h2>
       <div className='underline
        hover:text-blue-800 p-2 flex items-center text-white '>
       <h1>
        <a href='https://youtu.be/3VTkBuxU4yk?si=hIelX6ch34cpHj0-' rel="noopener" target="_blank">click here</a>
       </h1>
       </div>
        </div>

      </div>
  )
}

export default MVs
