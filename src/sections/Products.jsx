import React from 'react';
import Stars from '../assets/Stars__1_.png';
import Courses from '../assets/digital_products-courses.png';
import DigitalDownloads from '../assets/digital_products-downloads.png';
import Webinars from '../assets/digital_products-webinars.png';
import Coaching from '../assets/digital_products-coaching.png';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
	const productsData = [
		{
			id: 1,
			product: 'ONLINE COURSES',
			title: 'Beautiful online courses you can build in moments',
			detail:
				'Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.',
			link: 'Learn more about courses',
			image: Courses,
			rating: Stars,
			comment:
				'I’ve wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy.',
			author: '— Joy Cho, Oh Joy! Academy',
		},
		{
			id: 2,
			product: 'DIGITAL DOWNLOADS',
			title: 'Ebooks, templates, and any file type you can think of',
			detail:
				'Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.',
			link: 'Learn more about downloads',
			image: DigitalDownloads,
			rating: Stars,
			comment:
				'We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun.',
			author: '— Matt & Steph, Plant-based food bloggers',
		},
		{
			id: 3,
			product: 'COACHING',
			title:
				'One-on-one coaching and consultations, with billing managed for you',
			detail:
				'Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations.',
			link: 'Learn more about coaching',
			image: Coaching,
			rating: Stars,
			comment:
				'Podia just works. It’s easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat.',
			author: '— Shawn Leamon, Divorce and Your Money',
		},
		{
			id: 4,
			product: 'WEBINARS',
			title:
				'Webinars and workshops with registration and payment in one place',
			detail:
				'How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website.',
			link: 'Learn more about webinars',
			image: Webinars,
			rating: Stars,
			comment:
				'I love it, Yahoo! Webinars isa so cool. Everyone must buy this and use it. You will say yahoo!',
			author: '— Big Luigi',
		},
	];

	return (
		<section className='flex flex-col w-full  my-12'>
			<h1 className='md:text-3xl text-2xl text-center font-bold'>
				What kinds of products can you sell with Podia?
			</h1>
			<p className=' md:text-xl text-lg text-center md:leading-10 leading-8 text-gray-600'>
				Podia gives you the flexibility to sell whatever you want. That means
				you have more ways to grow your creator business.
			</p>
			<div>
				{productsData.map((product) => (
					<React.Fragment key={product.id}>
						<div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center mx-10 my-8'>
							<div className='md:w-[700px] flex flex-col gap-4'>
								<h2 className='md:text-sm text-xs'>{product.product}</h2>
								<h1 className='text-3xl font-bold leading-12 '>
									{product.title}
								</h1>
								<p className='md:text-xl text-md leading-8'>{product.detail}</p>
								<a
									href='/'
									className='text-lg text-[#4b2aad] flex items-center gap-2 font-semibold'
								>
									{product.link} <FaArrowRight />
								</a>
							</div>
							<img
								className='md:w-[650px] md:h-[450px] w-[350px] h-[250px] mx-auto my-10'
								src={product.image}
								alt='/'
							/>
						</div>
						{/* REFERRAL */}
						<div
							key={product.id}
							className='flex flex-col items-center gap-6 py-4 w-full justify-center mx-auto'
						>
							<img
								className='w-[200px]'
								src={product.rating}
								alt='/'
							/>
							<p className='text-center'>{product.comment}</p>
							<h1 className='text-gray-600'>{product.author}</h1>
						</div>
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Products;
