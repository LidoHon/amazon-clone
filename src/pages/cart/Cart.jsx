import React, { useContext } from 'react';
import { DataContext } from '../../components/dataProvider/dataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utils/ActionType';
import { BsPlus, BsDash } from 'react-icons/bs';

const Cart = () => {
	const {
		state: { basket, user },
		dispatch,
	} = useContext(DataContext);

	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

	const increment = (item) => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item,
		});
	};

	const decrement = (id) => {
		dispatch({
			type: Type.REMOVE_FROM_BASKET,
			id,
		});
	};

	return (
		<section className="bg-white ">
			<div>
				<h2 className="font-bold text-xl ml-5 pb-2 pt-5">
					Hello, {user ? user.email?.split('@')[0] : 'Guest'}
				</h2>
				<h2 className="text-xl ml-5">Your Shopping Basket</h2>
				<hr className="pb-10 mt-5 text-black" />
				<div className="flex flex-wrap gap-5 pl-10">
					{basket?.length === 0 ? (
						<div className="flex flex-col items-center justify-center text-center w-full">
							<p className="font-semibold text-2xl pb-5">
								No items in your cart yet,
							</p>
							<Link
								className="p-2 bg-orange-400 rounded-md hover:bg-orange-800 mb-5"
								to="/"
							>
								Let's go add some 😉
							</Link>
						</div>
					) : (
						basket?.map((item) => (
							<div key={item.id}>
								<ProductCard
									key={item.id}
									product={item}
									renderDesc={true}
									flex={true}
									renderAdd={false}
								/>
								<div>
									<button
										className="border-1 p-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:text-orange-500"
										onClick={() => decrement(item.id)}
									>
										<BsDash />
									</button>{' '}
									<span className="px-2">{item.amount}</span>
									<button
										className="border-1 p-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:text-orange-500"
										onClick={() => increment(item)}
									>
										<BsPlus />
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</div>

			{basket?.length !== 0 && (
				<div className=" absolute top-32 lg:top-24 right-5 lg:right-20 mt-5 p-5  border-2 bg-orange-400 bg-opacity-40 rounded-lg items-center">
					<div className="flex flex-row gap-4">
						<p className="pt-3">Subtotal: ({basket?.length} items)</p>
						<CurrencyFormat amount={total} />
					</div>
					<div>
						<input type="checkbox" className="p-2 mb-3" />
						<small> This order contains a gift</small>
					</div>
					<Link
						to="/payments"
						className="mt-3 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-400"
					>
						Continue to Payment
					</Link>
				</div>
			)}
		</section>
	);
};

export default Cart;
