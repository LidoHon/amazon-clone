import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../api/Endpoints';
import ProductCard from '../../components/Product/ProductCard';
import spinner from '../../components/Spinner';

const CategoryDetails = () => {
	const { categoryName } = useParams();
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				setResults(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [categoryName]);

	return (
		<section className="bg-gray-100 py-10">
			<div className="container mx-auto px-5">
				<h1 className="text-3xl font-bold text-gray-800 mb-5">
					{categoryName}
				</h1>
				<p className="text-lg text-gray-600 mb-10">
					Showing results for {categoryName}
				</p>
				<hr className="border-gray-300 mb-10" />
				{loading ? (
					<spinner />
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{results.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								renderAdd={true}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CategoryDetails;
