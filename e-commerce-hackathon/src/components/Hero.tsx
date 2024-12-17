import { Fullscreen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[663px] flex justify-between items-center bg-[#F2F0F1]'>
      <div className='justify-center items-center ml-24'>
      <h1 className='w-[577px] h-[173px] text-6xl font-bold line-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='w-[545px] h-[33px] font-light text-xl mt-5'>
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='bg-black text-white w-[210px] h-[52px] rounded-[62px] mt-16 '>Shop Now</button>
      </div>
      <div className='relative'>
      <Image alt='hero' src={"/hero.png"} width={700} height={663}
      className='mr-8 mt-'>
      </Image>
      <Image src={"/Vector.png"} alt='vector' width={104} height={104}
      className='absolute top-5 left-3/4 '>
      </Image>
      <Image src={"/Vector.png"} alt='vector' width={56} height={56}
      className='absolute -mt-72 '>
      </Image>
      </div>
    </div>
  )
}

export default Hero