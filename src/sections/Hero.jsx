import React from 'react';
import HeroImg from '../assets/digital_products-hero.png';

const Hero = () => {
	return (
		<section className='w-full md:h-screen flex flex-col md:flex-row justify-evenly items-center px-8'>
			<div className='p-8 flex flex-col md:w-[700px] mx-auto gap-4'>
				<h2 className='md:text-sm text-xs'>DIGITAL PRODUCTS</h2>
				<h1 className='md:text-5xl text-3xl font-bold leading-12 '>
					Sell online courses, coaching sessions, webinars, workshops, ebooks,
					and anything you can think of on Podia
				</h1>
				<p className='md:text-xl text-lg leading-8'>
					Get everything you need in one place that you own. Podia takes care of
					hosting products, taking payments, and getting products to your
					customers. And you always control your own work.
				</p>
				<button className='text-center block mx-auto py-4 px-2 w-[300px] text-xl text-white bg-[#4b2aad] rounded-full'>
					Get your free acount
				</button>
			</div>
			<img
				className='md:w-[550px] md:h-[500px] rounded-md w-[350px] h-[300px]'
				src={HeroImg}
				alt='hero-img'
			/>
		</section>
	);
};

export default Hero;
