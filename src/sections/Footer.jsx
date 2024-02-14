import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Footer = () => {
	const [toggleFooter, setToggleFooter] = useState({
		dropdown1: false,
		dropdown2: false,
		dropdown3: false,
		dropdown4: false,
		dropdown5: false,
	});

	const handleToggleFooter = (dropdown) => {
		setToggleFooter((prevState) => ({
			...prevState,
			[dropdown]: !prevState[dropdown],
		}));
	};

	console.log(toggleFooter.dropdown1);
	return (
		<>
			<footer className='bg-[#f5efeb] py-40 px-10 md:flex hidden flex-col gap-4'>
				<div className='flex gap-4 items-center'>
					<h1 className='font-semibold text-xl'>Platform</h1>
					<a
						href=''
						className='text-gray-500 underline hover:text-[#4b2aad]'
					>
						Pricing
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Sign up free
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Community
					</a>
					<a
						href=''
						className='text-gray-500 underline hover:text-[#4b2aad] '
					>
						Website builder
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Digital products
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Email marketing
					</a>
				</div>
				<div className='flex gap-4 items-center'>
					<h1 className='font-semibold text-xl'>Support</h1>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Contact us
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Help center
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Hire a Podia pro
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Creator community
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Podia 101{' '}
					</a>
				</div>
				<div className='flex gap-4 items-center'>
					<h1 className='font-semibold text-xl'>Features</h1>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Online courses
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Downloads
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Webinars
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Coaching
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						All features
					</a>
				</div>
				<div className='flex gap-4 items-center'>
					<h1 className='font-semibold text-xl'>Compare</h1>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Kajabi
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Teachable
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Thinkific
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Patreon
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Gumroad
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Podia alternatives
					</a>
				</div>
				<div className='flex gap-4 items-ce'>
					<h1 className='font-semibold text-xl'>Social</h1>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Twitter
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Facebook
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Instagram
					</a>
					<a
						href=''
						className='text-gray-500 underline  hover:text-[#4b2aad]'
					>
						Youtube
					</a>
				</div>
				<p className='text-gray-500'>Podia Labs, Inc. © 2024 Terms Privacy</p>
			</footer>

			{/* MOBILE ACCORDIAN FOOTER */}
			<footer className='bg-[#f5efeb] py-40 px-10 flex md:hidden flex-col gap-4'>
				<div
					onClick={() => handleToggleFooter('dropdown1')}
					className='relative'
				>
					<h1 className='font-bold flex items-center w-full justify-between hover:text-[#4b2aad] cursor-pointer'>
						Platform <FaAngleDown />
					</h1>
					<div
						className={
							toggleFooter.dropdown1
								? 'flex flex-col gap-4 border-b py-2 absolute top-0 left-0 h-[200px] bg-[#f5efeb]'
								: 'hidden'
						}
					>
						<ul>
							<a
								href=''
								className='text-gray-500 underline hover:text-[#4b2aad]'
							>
								Pricing
							</a>
							<li>
								<a
									href=''
									className='text-gray-500 underline  hover:text-[#4b2aad]'
								>
									Sign up free
								</a>
							</li>
							<li>
								<a
									href=''
									className='text-gray-500 underline  hover:text-[#4b2aad]'
								>
									Community
								</a>
							</li>
							<li>
								<a
									href=''
									className='text-gray-500 underline hover:text-[#4b2aad] '
								>
									Website builder
								</a>
							</li>
							<li>
								<a
									href=''
									className='text-gray-500 underline  hover:text-[#4b2aad]'
								>
									Digital products
								</a>
							</li>
							<li>
								<a
									href=''
									className='text-gray-500 underline  hover:text-[#4b2aad]'
								>
									Email marketing
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<h1>Support</h1>
				</div>
				<div>
					<h1>Features</h1>
				</div>
				<div>
					<h1>Compare</h1>
				</div>
				<div>
					<h1>Social</h1>
				</div>
			</footer>
		</>
	);
};

export default Footer;
