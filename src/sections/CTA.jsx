import React from 'react';

const CTA = () => {
	return (
		<section className='w-full'>
			<div className='bg-[#301e66] text-white m-4 flex flex-col items-center py-20 px-8 gap-4 rounded-md'>
				<h1 className='text-4xl text-center'>Get your free Podia account</h1>
				<p className='md:text-xl  text-lg text-center'>
					Join the 150,000+ creators who use Podia to create websites, sell
					digital products, and build online communities.
				</p>
				<button className='rounded-full bg-[#7456cf] hover:bg-[#8466db] px-4 py-2'>
					Sign up for free
				</button>
			</div>
		</section>
	);
};

export default CTA;
