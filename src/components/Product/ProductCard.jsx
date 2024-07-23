// ProductCard.jsx
import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../currencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/dataProvider';
import { Type } from '../../Utils/ActionType';

const truncateTitle = (title, maxLength) => {
	if (title.length <= maxLength) return title;
	return title.substring(0, maxLength) + '...';
};

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
	const { image, title, id, rating, price } = product;

	const { state, dispatch } = useContext(DataContext);
	// console.log(state);

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				image,
				title,
				id,
				rating,
				price,
			},
		});
	};

	return (
		<div className="bg-white p-4 border rounded-lg shadow-md flex flex-col items-center group relative mb-5">
			<Link to={`/products/${id}`} className="flex justify-center w-full mb-4">
				<img src={image} alt={title} className="h-40 object-cover" />
			</Link>
			<div className="w-full text-center">
				<h3 className="text-sm mb-2">{truncateTitle(title, 20)}</h3>
				<div className="flex justify-center items-center mb-2">
					<Rating value={rating.rate} precision={0.1} readOnly />
					<small className="ml-2">({rating.count})</small>
				</div>
				<div className="text-lg font-bold mb-4">
					<CurrencyFormat amount={price} />
				</div>
				{renderAdd && (
					<button
						onClick={addToCart}
						className="bg-orange-500 text-white py-2 px-2 lg:px-10 rounded-md lg:rounded-full hidden group-hover:block text-sm absolute bottom-4 left-1/2 transform -translate-x-1/2"
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
