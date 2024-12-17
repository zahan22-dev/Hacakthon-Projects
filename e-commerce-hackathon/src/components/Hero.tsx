import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='md:w-full md:h-[653px] w-[390px] h-[853px] md:flex justify-between items-center bg-[#F2F0F1] px-4 pt-2'>
      <div className='justify-center items-center md:ml-24'>
      <h1 className='md:w-[577px] md:h-[173px] w-[315px] h-[93px] text-3xl md:text-6xl font-extrabold line-[64px] left-1 mt-6'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='md:w-[545px] md:h-[33px] w-[340px] h-[30px] font-light text-m md:text-xl mt-4 md:mt-5 md:-mb-0 -mb-8'>
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='text-center bg-black text-white md:w-[200px] md:h-[52px] w-[300px] h-[52px] rounded-[62px] md:mt-16 mt-24 '>Shop Now</button>
      </div>
 <div className='block md:hidden mt-2'>
 <div className='flex w-[278px] h-[72px] justify-between items-center ml-5 '>
      <section>
        <h3 className='text-2xl font-semibold'>200+</h3>
        <p className='font-light text-sm'>International Brands</p>
      </section>
      <section>
        <h3 className='text-2xl font-semibold'>2,000+</h3>
        <p className='font-light text-sm'>High-Quality Products</p>
      </section>
      </div>
 </div>
 <div className='block md:hidden mt-2'>
 <section className='w-[120px] h-[48px] justify-center items-center mx-auto'>
        <h3 className='text-2xl font-semibold'>30,000+</h3>
        <p className='font-light text-sm'>Happy Customers</p>
      </section>
 </div>
      <div className='relative mb-4'>
      <Image alt='hero' src={"/hero.png"} width={700} height={663}
      className='mr-8 md:w-[700px] md:h-[663px] w-[390px] h-[480px]'>
      </Image>
      <Image src={"/Vector.png"} alt='vector' width={104} height={104}
      className='absolute top-5 left-3/4 md:w-[104px] md:h-[104px] w-[76px] h-[76px]'>
      </Image>
      <Image src={"/Vector.png"} alt='vector' width={80} height={56}
      className='absolute -mt-96 md:w-[70px] md:h-[56px] w-[44px] h-[44px] '>
      </Image>
      </div>
    </div>
  )
}

export default Hero