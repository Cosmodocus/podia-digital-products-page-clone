import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Hamburger from '../components/Hamburger';

const Navbar = () => {
	const [toggleDropdown, setToggleDropdown] = useState({
		dropdown1: false,
		dropdown2: false,
		dropdown3: false,
		dropdown4: false,
	});

	const handleDropdown = (dropdown) => {
		setToggleDropdown((prevState) => ({
			dropdown1: dropdown === 'dropdown1' ? !prevState.dropdown1 : false,
			dropdown2: dropdown === 'dropdown2' ? !prevState.dropdown2 : false,
			dropdown3: dropdown === 'dropdown3' ? !prevState.dropdown3 : false,
			dropdown4: dropdown === 'dropdown4' ? !prevState.dropdown4 : false,
		}));
	};

	return (
		<header className='w-full'>
			<nav className='md:flex hidden justify-between mx-auto px-10 py-6  items-center  shadow-md fixed bg-white z-100 w-full '>
				<div className='flex items-center gap-8'>
					<h1 className='font-bold text-3xl text-[#4b2aad]'>podia</h1>
					<ul className='md:flex gap-2 hidden'>
						<li>
							<button
								onClick={() => handleDropdown('dropdown1')}
								className='flex group  items-center relative hover:bg-[#f5efeb]  rounded-full py-2 px-4 text-lg'
							>
								Website <FaAngleDown className='group-hover:bg-[#f5efeb]' />
							</button>
							<div
								className={
									toggleDropdown.dropdown1
										? 'grid grid-cols-2 bg-white absolute top-20  border p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 border-r'>
									<h2 className='text-sm font-medium'>PLATFORM</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Website builder
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Website examples
									</a>
								</div>

								<div className='flex flex-col bg-white gap-2'>
									<h2 className='text-sm font-medium'>FEATURES</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Blogging
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Landing pages
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Link in bio pages
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Portfolio websites
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Integrations
									</a>
								</div>
							</div>
						</li>
						<li>
							<button
								onClick={() => handleDropdown('dropdown2')}
								className='flex group items-center hover:bg-[#f5efeb]   rounded-full py-2 px-4 text-lg'
							>
								Email <FaAngleDown className='group-hover:bg-[#f5efeb]' />
							</button>
							<div
								className={
									toggleDropdown.dropdown2
										? 'grid grid-cols-2 bg-white absolute top-20 border p-6 gap-4 shadow-sm rounded-md'
										: 'hidden'
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 border-r'>
									<h2 className='text-sm font-medium'>PLATFORM</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email marketing
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email examples
									</a>
								</div>

								<div className='flex flex-col bg-white gap-2'>
									<h2 className='text-sm font-medium'>FEATURES</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email templates
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email designer
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email forms
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Email analytics
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Newsletters
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Automations
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Segmentation
									</a>
								</div>
							</div>
						</li>
						<li>
							<button
								onClick={() => handleDropdown('dropdown3')}
								className='flex group items-center hover:bg-[#f5efeb]  rounded-full py-2 px-4 text-lg'
							>
								Sell <FaAngleDown className='group-hover:bg-[#f5efeb]' />
							</button>
							<div
								className={
									toggleDropdown.dropdown3
										? 'grid grid-cols-2 bg-white absolute top-20 border p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 border-r'>
									<h2 className='text-sm font-medium'>PLATFORM</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Online courses
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Digital downloads
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Community
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Checkout
									</a>
								</div>

								<div className='flex flex-col bg-white gap-2'>
									<h2 className='text-sm font-medium'>FEATURES</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Multimedia products
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Presell products
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Upsells
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Coaching
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Webinars
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Affiliates
									</a>
								</div>
							</div>
						</li>
						<li>
							<button className='flex items-center hover:bg-[#f5efeb]  rounded-full py-2 px-4 text-lg'>
								Pricing
							</button>
						</li>
						<li>
							<button
								onClick={() => handleDropdown('dropdown4')}
								className='flex group items-center hover:bg-[#f5efeb]  rounded-full py-2 px-4 text-lg'
							>
								Resources <FaAngleDown className='group-hover:bg-[#f5efeb]' />
							</button>
							<div
								className={
									toggleDropdown.dropdown4
										? 'grid grid-cols-2 bg-white absolute top-20 border p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 border-r'>
									<h2 className='text-sm font-medium'>FREE RESOURCES</h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Resource center
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Hire a Podia Pro
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Creator Advice Library
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Podia demo site
									</a>
								</div>

								<div className='flex flex-col bg-white gap-2'>
									<h2 className='text-sm font-medium'></h2>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Blogging
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Landing pages
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Link in bio pages
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Portfolio websites
									</a>
									<a
										href='#'
										className='hover:text-[#4b2aad] text-gray-600'
									>
										Integrations
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className='flex gap-4'>
					<button className='hover:bg-[#f5efeb] rounded-full py-2 px-4 text-lg'>
						Login
					</button>
					<button className='bg-[#4b2aad] hover:bg-[#2c1e53] text-[#fff] font-semibold rounded-full py-2 px-4 text-lg'>
						Sign up free
					</button>
				</div>
			</nav>

			{/* MOBILE NAVBAR MENU DISPLAY */}
			<nav className='md:hidden flex justify-between mx-auto px-4 py-6  fixed bg-white z-100 items-center  shadow-md   w-full'>
				<h1 className='font-bold text-3xl text-[#4b2aad] px-10'>podia</h1>
				<div className='flex items-center pr-10 gap-4'>
					<button className='hover:bg-[#f5efeb] border rounded-full py-2 px-4 text-lg'>
						Login
					</button>
					<Hamburger />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
