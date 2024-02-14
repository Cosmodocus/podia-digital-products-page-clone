import React from 'react';
import CartIcon from '../assets/digital_products-icon-cart.svg';
import LoginIcon from '../assets/digital_products-icon-login.svg';
import UploadIcon from '../assets/digital_products-icon-upload.svg';

const Details = () => {
	return (
		<section className='flex flex-col items-center gap-6 mt-8 py-20'>
			<h1 className='md:text-3xl text-2xl text-center font-bold'>
				All you have to do is make the product. Podia takes care of the details
				for you.
			</h1>
			<p className='md:w-[1000px] md:text-xl text-center md:leading-10 leading-8 text-gray-600'>
				Podia lets you make your sales page, take payments, and give your
				customers access all in one place. Host and sell your products without
				needing to figure out a handful of new tools.
			</p>
			<div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
				<div className='flex flex-col items-center text-center px-2 gap-4'>
					<img
						src={CartIcon}
						alt=''
					/>
					<h2 className='font-semibold'>
						Checkout and sales are handled for you
					</h2>
					<p className='text-gray-600'>
						You don’t have to figure out a bunch of tools or website embeds.
						Just connect a payment provider and your Podia site takes care of
						payments for you.
					</p>
				</div>
				<div className='flex flex-col items-center text-center px-2 gap-4'>
					<img
						src={LoginIcon}
						alt=''
					/>
					<h2 className='font-semibold w-[400px]'>
						Your customers log in, and your products are there for them
					</h2>
					<p className='text-gray-600'>
						Your Podia site handles access to products for you. Everything is in
						one place. When your customers buy a product, they get a log in.
						After that, they can see all the products they’ve bought from you.
					</p>
				</div>
				<div className='flex flex-col items-center text-center px-2 gap-4'>
					<img
						src={UploadIcon}
						alt=''
					/>
					<h2 className='font-semibold w-[400px]'>
						Upload your product. Make your sales page. Done.
					</h2>
					<p className='text-gray-600'>
						You could sell a digital product by this afternoon. Podia handles
						hosting, sales pages, checkout, and delivery. All you need is
						something to sell.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Details;
