import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='container relative pt-16'>
        <Image className='w-full h-auto'
        src="/hero.webp"
        width={1500}
        height={900}
        alt='hero bg'
        />
      
    </div>
  )
}

export default Hero
