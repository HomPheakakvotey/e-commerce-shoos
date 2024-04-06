import React from 'react';

export default function Hero () {
  return (
    <div className='bg-[#F0EFEC] '>
        <div className="grid max-w-screen-xl mx-auto lg:gap-10 xl:gap-2 lg:py-5 lg:grid-cols-12 p-[50px] mt-14">
        <div className="mr-auto place-self-center lg:col-span-7 my-28">
        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#2b2b2b]">About Us</h1>
        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-[20px] lg:text-xl">Our journey began with a simple idea: to create a space where customers could find unique, high-quality products without the hassle of navigating through endless options. We noticed a gap in the market for a platform that not only offered a wide range of products but also provided a seamless shopping experience.</p>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex my-28">
        <img src="https://img.ltwebstatic.com/images3_ccc/2024/01/03/b6/170426534310c91b51dc716fa7456a58543ea59af0_thumbnail_1152x.webp" alt="mockup"  />
      </div>
    </div>
    </div>
  );
};
