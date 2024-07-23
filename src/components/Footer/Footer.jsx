import React from 'react';
import FooterMiddle from './FooterMiddle';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Optional: smooth scroll animation
		});
	};

	return (
		<footer className="text-white w-full bg-gray-500">
			<div className="flex justify-center bg-gray-600 py-3 hover:bg-gray-500">
				<p
					onClick={scrollToTop}
					className="text-sm text-gray-400 cursor-pointer"
				>
					Back to top
				</p>
			</div>
			<FooterMiddle />
			<div className="flex flex-row justify-center text-gray-400 bg-gray-900  py-2 pt-5">
				<div className="space-x-4 text-xs flex flex-row">
					<div className="group">
						<h5 className="font-bold mb-2  text-white group-hover:underline">
							Amazon Music
						</h5>
						<ul className="group-hover:underline text-gray-400 ">
							<li className="mb-2">Streem</li>
							<li className="mb-2">millions</li>
							<li className="mb-2 ">of songs</li>
						</ul>
					</div>

					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							AbeBooks
						</h5>
						<ul>
							<li>Books,art</li>
							<li>&</li>
							<li>collections</li>
						</ul>
					</div>
					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							Amazon Web Services
						</h5>
						<ul>
							<li>scalable </li>
							<li>cloud</li>
							<li>computing</li>
							<li>Services</li>
						</ul>
					</div>
					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							Audible
						</h5>
						<ul>
							<li>Download </li>
							<li>Audiobooks</li>
						</ul>
					</div>
					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							Kindle Direct Publishing
						</h5>
						<ul>
							<li>indie digital & </li>
							<li>Print Publishing</li>
							<li>Made Easy </li>
						</ul>
					</div>
					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							Amazon Warehouse
						</h5>
						<ul>
							<li>Deep </li>
							<li>Discount</li>
							<li>Open-Box </li>
							<li>Products </li>
						</ul>
					</div>
					<div className="group">
						<h5 href="#" className="group-hover:underline text-white font-bold">
							Shopbop
						</h5>
						<ul>
							<li>Designer </li>
							<li>Fashion </li>
							<li>Brands </li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex justify-center text-gray-400 text-xs bg-gray-900  pb-4">
				<p className="text-center text-xs">
					Conditions of Use & Sale · Privacy Notice · Cookies Notice ·
					Interest-Based Ads Notice
					<br /> © 1996-2024, Amazon.com, Inc. or its affiliates
				</p>
			</div>
		</footer>
	);
};

export default Footer;
