import React from 'react'
import BG from "./assests/bg.jpg"
import CH1 from "./assests/ff1.jpg"
import CH2 from "./assests/ff2.jpg"
import CH0 from "./assests/KDA.jpg"
function Characters() {
  return (

   <div className='flex flex-col items-center justify-center w-full'>
        <img class="object-cover h-full w-full absolute -z-10" src={BG}/>


        <div className='pt-12 flex items-center'>
        <img class="flex-auto" src={CH0}/>
        </div>
        <div className='flex items-center'>
        <img class="flex-auto" src={CH1}/>
        </div>
        
        <div className='flex items-center'>
        <img class="flex-auto" src={CH2}/>
        </div>


        </div>
      
  )
}

export default Characters
