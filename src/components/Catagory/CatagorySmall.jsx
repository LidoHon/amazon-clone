import React from 'react';
import { catagoryInfo } from './catagory';
import CatagoryCard from './CatagoryCard';

const CatagorySmall = () => {
	return (
		<div className=" mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{catagoryInfo.map((info, index) => (
				<CatagoryCard key={index} data={info} />
			))}
		</div>
	);
};

export default CatagorySmall;
