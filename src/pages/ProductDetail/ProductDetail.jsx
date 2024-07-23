import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';
import axios from 'axios';
import { productUrl } from '../../api/Endpoints';
import Spinners from '../../components/Spinner';
import { DataContext } from '../../components/dataProvider/dataProvider';
import { Type } from '../../Utils/ActionType';
const ProductDetail = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const { state, dispatch } = useContext(DataContext);
	useEffect(() => {
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				// console.log(res.data);
			})
			.catch((error) => {
				console.log('Error fetching product:', error);
			});
	}, [productId]);
	if (!product) {
		return (
			<div>
				<Spinners />
			</div>
		);
	}

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				image: product.image,
				title: product.title,
				id: product.id,
				rating: product.rating,
				price: product.price,
			},
		});
	};
	return (
		<div className="container mx-auto px-5 py-10 bg-white">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div className="max-w-lg mx-auto mb-5">
					<img src={product.image} alt={product.title} className="w-full " />
				</div>
				<div className="pt-5 lg:p-24">
					<h1 className="text-3xl font-bold text-gray-800 mb-5">
						{product.title}
					</h1>
					<p className="text-lg text-gray-600 mb-5">{product.description}</p>

					<div className="flex justify-center items-center mb-2">
						<Rating value={product.rating.rate} precision={0.1} readOnly />
						<small className="ml-2">({product.rating.count})</small>
					</div>
					<div className="text-lg font-bold mb-4">
						<CurrencyFormat amount={product.price} />
					</div>
					<button
						onClick={addToCart}
						className="bg-orange-500 text-white py-2 px-2 lg:px-10  rounded-md lg:rounded-full text-sm bottom-4 transform -translate-x-1 hover:bg-orange-400"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
