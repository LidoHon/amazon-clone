import React, { useContext, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import MiniHeader from './MiniHeader';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../dataProvider/dataProvider';
import { auth } from '../../Utils/Firebase';
const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('All');
	const [isButtonBorderOrange, setIsButtonBorderOrange] = useState(false);
	const [isInputBorderOrange, setIsInputBorderOrange] = useState(false);
	const {
		state: { basket, user },
		dispatch,
	} = useContext(DataContext);
	const navigate = useNavigate();
	const options = [
		'All',
		'Home & Kitchen',
		'High-Tech',
		'Sports & Outdoors',
		'Lawn & Garden',
		'Sport & leisure',
		'Video Games',
		'Offices',
	];

	const handleButtonClick = (option) => {
		setSelectedOption('All');
		setDropdownOpen(!dropdownOpen);
		setIsButtonBorderOrange(true);
		setIsInputBorderOrange(false);

		if (option === 'All') {
			navigate('/');
		} else {
			navigate(`/no-products`);
		}
	};

	const handleInputFocus = () => {
		setIsButtonBorderOrange(false);
		setIsInputBorderOrange(true);
		setDropdownOpen(false);
	};

	return (
		<>
			<section className="bg-slate-950 sticky top-0 z-10">
				<div className="flex flex-col md:flex-row items-center p-1 space-x-4">
					<Link
						className="px-2 border border-transparent hover:border-white duration-300 items-center justify-center h-[90%]"
						to="/"
					>
						<img
							className="w-15 h-10 mx-1 pt-2 logo"
							src="/header/pngimg.com - amazon_PNG11.png"
							alt="amazon"
						/>
					</Link>
					<div className=" px-2 border border-transparent hover:border-white duration-300  justify-center h-[90%] text-xs flex flex-col items-center space-y-1">
						<p className="text-neutral-400 text-center">Deliver to</p>
						<div className="flex flex-row items-center space-x-1">
							<CiLocationOn className="text-white font-bold" size={20} />
							<span className="font-semibold text-white">Ethiopia</span>
						</div>
					</div>
					<div className={`flex items-center w-[60%]  `}>
						<div className="relative">
							<button
								className={`bg-gray-200 p-2 rounded-l-md focus:outline-none flex items-center ${
									isButtonBorderOrange ? 'border-2 border-orange-500' : ''
								}`}
								onClick={() => handleButtonClick(selectedOption)}
							>
								<span>{selectedOption}</span>
								<FaChevronDown size={10} className="ml-1" />
							</button>
							{dropdownOpen && (
								<ul className="absolute bg-white border border-gray-200 rounded-md mt-2 w-40 z-50 text-xs">
									{options.map((option) => (
										<li
											key={option}
											className="px-4 py-2 cursor-pointer hover:bg-gray-200"
											onClick={() => handleButtonClick(option)}
										>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
						<input
							type="text"
							className={`w-full focus:outline-none text-xs p-3 ${
								isInputBorderOrange ? 'border-2 border-orange-500' : ''
							}`}
							placeholder="Search Amazon.fr"
							onFocus={handleInputFocus}
						/>
						<button className="bg-orange-400 p-2 rounded-r-md focus:outline-none">
							<IoMdSearch size={25} />
						</button>
					</div>
					<div className=" flex flex-row items-center space-x-7 text-white text-sm">
						<div className="flex pt-4 md:pt-0">
							<div className="flex flex-row  ">
								<div className="flex flex-row py-2 px-2 border border-transparent hover:border-white duration-300 items-center justify-center h-[90%] ">
									<img
										className="w-5 h-5"
										src="/header/Flag_of_France.svg.png"
										alt=""
									/>
									<h1 className="font-semibold  ml-2">EN</h1>
								</div>
							</div>
							<div className="group ">
								<div className="text-xs space-y-1 px-2 border border-transparent hover:border-white duration-300 items-center justify-center h-[90%] ">
									<Link
										to={!user && '/auth'}
										className="text-neutral-400 cursor-pointer"
									>
										<div>
											{user ? (
												<>
													<p>Hello,{user.email?.split('@')[0]} </p>
													<span
														className="font-bold cursor-pointer"
														onClick={() => auth.signOut()}
													>
														Sign out
													</span>
												</>
											) : (
												<>
													<p>hello Please Login</p>
													<div className="flex flex-row items-center space-x-1">
														<span className="font-semibold text-white">
															Account & Lists
														</span>
														<FaChevronDown size={12} />
													</div>
												</>
											)}
										</div>
									</Link>
								</div>
							</div>
							<div className="group">
								<div className="text-xs flex flex-col space-y-1 px-2 border border-transparent hover:border-white duration-300 items-center justify-center h-[90%]">
									<p className="text-neutral-400">Returns</p>
									<Link to="/orders" className="font-semibold text-white">
										& Orders
									</Link>
								</div>
							</div>
						</div>

						<div className="group">
							<div className="flex flex-row items-center space-x-1 x-2 border border-transparent hover:border-white duration-300  justify-center h-[90%]">
								<Link to="/cart" className="relative inline-block">
									<LuShoppingCart size={35} />
									<span className="text-orange-600 absolute top-1 right-2 font-bold text-xl">
										{basket.length}
									</span>
								</Link>

								<span className="font-semibold text-md text-white">Basket</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<MiniHeader />
		</>
	);
};

export default Header;
