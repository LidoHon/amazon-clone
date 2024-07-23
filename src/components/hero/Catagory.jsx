// Categories.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categoriesData from '../../assets/data/catagory';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		setCategories(categoriesData);
	}, []);

	return (
		<div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 catagory">
			{categories.map((category, index) => {
				const linkItem = category.items.find((item) => item.link);
				const categoryLink = category.title.replace(/\s+/g, '-').toLowerCase();

				return (
					<div key={index} className="border p-2 rounded bg-white">
						<h3 className="text-xl font-bold mb-4">{category.title}</h3>
						<div className="grid grid-cols-2 gap-4">
							{category.items.map(
								(item, idx) =>
									item.name &&
									item.image && (
										<div key={idx} className="flex flex-col">
											<img
												src={item.image}
												alt={item.name}
												className="w-full h-24 object-cover mb-2"
											/>
											<p className="text-xs text-left">{item.name}</p>
										</div>
									)
							)}
						</div>
						{linkItem && (
							<Link
								to="/no-products"
								className="text-customBlue mt-4 block text-left text-sm hover:text-red-800"
							>
								{linkItem.link}
							</Link>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
