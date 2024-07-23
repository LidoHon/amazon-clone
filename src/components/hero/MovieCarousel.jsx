import React from 'react';
import items from '../../assets/data/carouselItems';
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
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		// autoplay: true,
		// autoplaySpeed: 5000,
		slidesToShow: 15,
		slidesToScroll: 5,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 12,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
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
			<h2 className="text-lg font-bold pt-5">Most wished for in Movies & TV</h2>
			<div className="mt-2">
				<Slider {...settings}>
					{items.map((item, index) => (
						<div key={index} className="p-0 m-0 gap-2 h-[200px]">
							<img
								src={item.img}
								alt={item.title}
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
