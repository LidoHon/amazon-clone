import React, { useState, useContext } from 'react';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { DataContext } from '../dataProvider/dataProvider';
import { auth } from '../../Utils/Firebase';
const MiniHeader = () => {
	const currentDate = new Date();
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	const formattedDate = currentDate.toLocaleDateString(undefined, options);

	const [isOpen, setIsOpen] = useState(false);
	const {
		state: { basket, user },
		dispatch,
	} = useContext(DataContext);
	return (
		<>
			<div className="bg-gray-700 p-2 flex flex-row items-center justify-between mini-header">
				<div
					className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%]"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex flex-row items-center">
						<IoMenu className="text-white" size={28} />
						<h1 className="font-bold text-white text-sm ml-1">All</h1>
					</div>
				</div>
				<div className="text-white pl-2 text-xs hidden md:flex flex-grow mini-header">
					<ul className="flex flex-row gap-3">
						<li className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%] p-1">
							<span className="inline-block">Customer Service</span>
						</li>
						<li className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%] p-1">
							<span className="inline-block">Buy more & Save</span>
						</li>
						<li className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%] p-1">
							<span className="inline-block">Amazon Basics</span>
						</li>
						<li className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%] p-1">
							<span className="inline-block">Buy Again</span>
						</li>
						<li className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%] py-1">
							<span className="inline-block">Prime</span>
						</li>
					</ul>
				</div>
				<div className="px-2 border border-transparent hover:border-white duration-300 flex items-center justify-center h-[90%]">
					<div className="text-white font-bold">Prime Day {formattedDate}</div>
				</div>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-screen bg-white  w-64 p-4 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out z-50`}
			>
				{/* Close button */}
				<button
					className="absolute top-2 right-2 text-black hover:text-gray-300 "
					onClick={() => setIsOpen(false)}
				>
					{/* Close icon (replace with your preferred icon) */}
					<IoCloseOutline size={25} />
				</button>

				{/* Sidebar content */}
				<div className="flex flex-col h-full">
					<div className="flex flex-row items-center  mt-3">
						<img
							className="w-12 h-12 rounded-full"
							src="/src/assets/images/header/avater.jpg"
							alt=""
						/>
						{user ? (
							<>
								<h2 className="text-xl  ml-3">
									Hello, {user.email?.split('@')[0]}
								</h2>
							</>
						) : (
							<>
								<p>hello, Gust</p>
							</>
						)}
					</div>
					<hr className="pb-5" />
					<nav className="bg-white flex-grow text-xs">
						<ul className="space-y-5">
							<li className="mb-2">
								<h3 className="font-semibold pb-3">Trending</h3>
								<ul className="ml-4 space-y-2">
									<li>Best Sellers</li>
									<li>New Releases</li>
									<li>Movers & Shakers</li>
								</ul>
								<hr />
							</li>
							<li className="mb-2">
								<h3 className="font-semibold pb-3">
									Digital content & devices
								</h3>
								<ul className="ml-4 space-y-2">
									<li>Amazon Prime Video</li>
									<li>Amazon Music</li>
									<li>Echo, Alexa & Smart Home</li>
									<li>Fire TV</li>
									<li>Kindle E-readers & Books</li>
									<li>Audible Audiobooks</li>
									<li>Apps for Android</li>
								</ul>
							</li>
							<hr className="pb-2" />
							<li className="mb-2">
								<h3 className="font-semibold pb-2">Shop by Department</h3>
								<ul className="ml-4 space-y-2">
									<li>Books</li>
									<li>Music, DVD & Blu-ray</li>
									<li>Video Games and Consoles</li>
									<li>Electronics</li>
									<li>See all</li>
								</ul>
							</li>
							<hr className="pb-2" />
							<li className="mb-2">
								<h3 className="font-semibold pb-2">Programs & Features</h3>
								<ul className="ml-4 space-y-2">
									<li>Amazon Outlet</li>
									<li> made in france</li>
									<li>prime try before you buy </li>
									<li>Amazon business</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default MiniHeader;
