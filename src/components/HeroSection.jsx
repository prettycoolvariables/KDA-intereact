import React from 'react'
import videoo from "../assests/videoo.mp4";
const HeroSection = () => {
    return (
      <div className='flex items-end justify-center w-full h-screen text-center'>
        <video
          src={videoo}
          loop
          muted autoPlay className="object-cover h-full w-full absolute -z-10"
        />
      </div>
    )
  } 

export default HeroSection

