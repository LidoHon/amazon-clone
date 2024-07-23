import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`absolute top-1/4 transform -translate-y-1/2 right-4 z-10 flex items-center justify-center h-[20vh] border-2 border-white bg-transparent ${className}`}
			style={{ ...style, display: 'flex' }}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`absolute top-1/4 transform -translate-y-1/2 left-4 z-10 flex items-center justify-center h-[20vh] border-2 border-white bg-transparent ${className}`}
			style={{ ...style, display: 'flex' }}
			onClick={onClick}
		/>
	);
};

const Carousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className="relative mx-20">
			<Slider {...settings}>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/619CNqTTLPL._SX3000_.jpg"
						alt="Slide 1"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/71k2k2dIgfL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/61UR8Xo7cIL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/71QeC6IOP5L._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/71-uacoDd-L._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/616G6UnuBqL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/61yuTNhxjJL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/71akqO4tMcL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/71Lt953nctL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/719BP-8lfWL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/images/carousel/61iiS6eXWgL._SX3000_.jpg"
						alt="Slide 2"
					/>
					<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
