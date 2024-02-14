import React, { useState } from 'react';
import { FaBars, FaWindowClose, FaAngleDown } from 'react-icons/fa';

const Hamburger = () => {
	const [hamburgerMenu, setHamburgerMenu] = useState(true);
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

	function handleHamburgerToggle() {
		setHamburgerMenu(!hamburgerMenu);
	}

	return (
		<div>
			{hamburgerMenu ? (
				<FaBars
					onClick={() => handleHamburgerToggle()}
					size={25}
					className='cursor-pointer  border-none relative'
				/>
			) : (
				<FaWindowClose
					onClick={() => handleHamburgerToggle()}
					size={25}
					className='cursor-pointer  border-none relative'
				/>
			)}

			{!hamburgerMenu ? (
				<div className='absolute bg-white  p-4 w-full top-[90px] left-[0] border '>
					<ul className='flex flex-col gap-2 '>
						{/* WEBSITE BUTTON */}
						<li className='bg-white'>
							<button
								onClick={() => handleDropdown('dropdown1')}
								className='flex justify-between px-6 group w-full items-center
								rounded-full py-2 text-xl hover:text-[#4b2aad]'
							>
								Website <FaAngleDown />
							</button>
							<div
								className={
									toggleDropdown.dropdown1
										? 'grid grid-row-2 bg-white  top-20   p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 '>
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

								<div className='flex flex-col bg-white gap-2 border-t'>
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
							{/* EMAIL BUTTON */}
							<button
								onClick={() => handleDropdown('dropdown2')}
								className='flex justify-between px-6 group w-full items-center  rounded-full py-2 text-xl hover:text-[#4b2aad]'
							>
								Email <FaAngleDown />
							</button>
							<div
								className={
									toggleDropdown.dropdown2
										? 'grid grid-row-2 bg-white  top-20   p-6 gap-4 shadow-sm rounded-md'
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
							{/* SELL BUTTON */}
							<button
								onClick={() => handleDropdown('dropdown3')}
								className='flex justify-between px-6 group w-full items-center    rounded-full py-2 text-xl hover:text-[#4b2aad]'
							>
								Sell <FaAngleDown />
							</button>
							<div
								className={
									toggleDropdown.dropdown3
										? 'grid grid-row-2 bg-white  top-20   p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 '>
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
									<h2 className='flex flex-col bg-white gap-2 border-t'>
										FEATURES
									</h2>
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
							{/* PRICING BUTTON */}
							<button className='flex justify-between px-6 group w-full items-center   rounded-full py-2 text-xl hover:text-[#4b2aad]'>
								Pricing
							</button>
						</li>
						<li>
							{/* RESOURCES BUTTON */}
							<button
								onClick={() => handleDropdown('dropdown4')}
								className='flex justify-between px-6 group w-full items-center  rounded-full py-2 text-xl hover:text-[#4b2aad]'
							>
								Resources <FaAngleDown />
							</button>
							<div
								className={
									toggleDropdown.dropdown4
										? 'grid grid-row-2 bg-white  top-20   p-6 gap-4 shadow-sm rounded-md'
										: 'hidden '
								}
							>
								<div className='flex flex-col bg-white gap-2 pr-4 '>
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

								<div className='flex flex-col bg-white gap-2 border-t'>
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
						<button className='bg-[#4b2aad] hover:bg-[#2c1e53] text-[#fff] font-semibold rounded-full py-2 px-4 text-lg'>
							Sign up free
						</button>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default Hamburger;
