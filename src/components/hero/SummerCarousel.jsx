import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
	{
		name: 'Essentials',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_half-size._CB556250464_.jpg',
	},
	{
		name: 'Deals',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE._CB556250464_.jpg',
	},
	{
		name: 'Beach holiday',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_2._CB556250464_.jpg',
	},
	{
		name: 'City break',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_3._CB556250464_.jpg',
	},
	{
		name: 'Garden party',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_4._CB556250464_.jpg',
	},
	{
		name: 'Rained-off summer',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_5._CB556250464_.jpg',
	},
	{
		name: 'Summer reads',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_6._CB556250464_.jpg',
	},
	{
		name: 'Summer reads',
		img: '/summer/Exp_GW_Dt_Bub_400X400-200X200_HALF_SIZE_V2-EN._CB553709019_.jpg',
	},
	{
		name: 'Summer reads',
		img: '/summer/FRen_200x200_Deals._CB556425725_.png',
	},
];

const SuumerCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? categories.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === categories.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="relative w-full overflow-hidden bg-white">
			<h2 className="text-xl font-bold mb-4 pt-5 pl-4">
				Summer is here: Shop by category
			</h2>
			<div className="flex items-center grid-cols-4">
				<button
					className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
					onClick={prevSlide}
				>
					<FaChevronLeft />
				</button>
				<div className="flex  space-x-2 overflow-hidden w-full">
					{categories.map((category, index) => (
						<div key={index}>
							<div className=" p-1">
								<img src={category.img} alt={category.name} className="" />
							</div>
						</div>
					))}
				</div>
				<button
					className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
					onClick={nextSlide}
				>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
};

export default SuumerCarousel;
