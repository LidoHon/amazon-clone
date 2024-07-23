import React from 'react';
import Carousel from '../../components/hero/Carousel';
import HeroPage from './HeroPage';

const HomePage = () => {
	return (
		<>
			<div className="relative">
				<Carousel />
				<HeroPage />
			</div>
		</>
	);
};

export default HomePage;
