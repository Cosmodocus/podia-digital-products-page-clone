import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Details from './sections/Details';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Details />
			<Products />
			<CTA />
			{/* <Footer /> */}
		</>
	);
};

export default App;
