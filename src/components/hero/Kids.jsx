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
			img: '/kids/41s2UfnY9sL._AC_SY170_.jpg',
		},
		{
			name: 'Deals',
			img: '/kids/916wO-RgHQL._AC_SY200_.jpg',
		},
		{
			name: 'Beach holiday',
			img: '/kids/81wIEVU2CxL._AC_SY200_.jpg',
		},
		{
			name: 'City break',
			img: '/kids/51n0nMWHlHL._AC_SY200_.jpg',
		},
		{
			name: 'Garden party',
			img: '/kids/61eQqzRjthL._AC_SY200_.jpg',
		},
		{
			name: 'Rained-off summer',
			img: '/kids/61h-EoRpcDL._AC_SY200_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/61HkLuwfX1L._AC_SY200_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/61xAPhCx0uL._AC_SY200_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/81u5auwEl0L._AC_SY200_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/81TXfD3BfGL._AC_SY170_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/81Pfuow1T8L._AC_SY200_.jpg',
		},
		{
			name: 'Summer reads',
			img: '/kids/71R0E39tdjL._AC_SY200_.jpg',
		},
	];

	const settings = {
		dots: false,
		// autoplay: true,
		// autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 5,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div
			className=" pl-5 w-full m-auto bg-white mb-5 pt-5mx-auto"
			style={{ paddingLeft: '20px', paddingRight: '20px' }}
		>
			<h2 className="text-lg font-bold pt-5">Best Sellers in Toys & Games</h2>
			<div className="mt-2">
				<Slider {...settings}>
					{categories.map((category, index) => (
						<div key={index} className="p-0 m-0 gap-2 h-[200px]">
							<img
								src={category.img}
								alt={category.title}
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
