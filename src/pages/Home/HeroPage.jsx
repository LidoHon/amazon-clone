import React from 'react';
import Categories from '../../components/hero/Catagory';
import MiniCarousel from '../../components/hero/MiniCarousel';
import MovieCarousel from '../../components/hero/MovieCarousel';
import SummerCarousel from '../../components/hero/SummerCarousel';
import Product from '../../components/Product/Product';
import Kids from '../../components/hero/Kids';
import CatagorySmall from '../../components/Catagory/CatagorySmall';

const HeroPage = () => {
	return (
		<div
			className="mx-auto"
			// style={{ paddingLeft: '20px', paddingRight: '20px' }}
		>
			<Categories />
			<CatagorySmall />
			<Product />
			<MovieCarousel />
			<MiniCarousel />
			<Kids />

			{/* <SummerCarousel /> */}
		</div>
	);
};

export default HeroPage;
