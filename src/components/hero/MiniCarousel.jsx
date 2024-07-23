import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`absolute top-2/4 transform -translate-y-1/2 right-2 z-10 flex items-center justify-center h-[20vh] border-2 border-white bg-transparent ${className}`}
			style={{ ...style, display: 'flex' }}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`absolute top-2/4 transform -translate-y-1/2 left-2 z-10 flex items-center justify-center h-[20vh] border-2 border-white bg-transparent ${className}`}
			style={{ ...style, display: 'flex' }}
			onClick={onClick}
		/>
	);
};

const MovieCarousel = () => {
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
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Toys_200x200._CB579207856_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Apparel_200x200._CB579207857_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Beauty_200x200._CB579207857_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Deco_200x200._CB579207857_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Food_200x200._CB579207857_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Gifts_200x200._CB579207857_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/summer/MII_FR_BUBBLE_Home_200x200._CB579207856_.jpg',
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div
			className="pl-5 w-full m-auto bg-white mb-5 pt-3 mx-auto"
			style={{ paddingLeft: '20px', paddingRight: '20px' }}
		>
			<h2 className="text-lg font-bold pt-2">Most wished for summer</h2>
			<div className="mt-2">
				<Slider {...settings}>
					{categories.map((category, index) => (
						<div key={index} className="p-0 m-0 gap-2 h-[200px]">
							<img
								src={category.img}
								alt={category.name}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default MovieCarousel;
