import React, { useContext, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { DataContext } from '../../components/dataProvider/dataProvider';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/Product/ProductCard';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';
import { axiosInstance } from '../../api/axios';
import Spinner from '../../components/Spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utils/ActionType';

const Payment = () => {
	const stripe = useStripe();
	const elements = useElements();
	const {
		state: { basket, user },
		dispatch,
	} = useContext(DataContext);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const total = basket.reduce(
		(amount, item) => item.price * item.amount + amount,
		0
	);
	const navigate = useNavigate();

	const handleChange = (e) => {
		e?.error?.message ? setError(e?.error?.message) : setError('');
	};

	const handlePayment = async (e) => {
		e.preventDefault();
		setProcessing(true);
		try {
			// Contact backend to get the client secret
			const response = await axiosInstance({
				method: 'POST',
				url: `/payments/create?total=${total * 100}`,
			});
			const clientSecret = response.data?.clientSecret;

			// Client side confirmation
			const { error, paymentIntent } = await stripe.confirmCardPayment(
				clientSecret,
				{
					payment_method: {
						card: elements.getElement(CardElement),
					},
				}
			);

			if (error) {
				setError(error.message);
				toast.error(`Payment failed: ${error.message}`);
			} else if (paymentIntent.status === 'succeeded') {
				toast.success('Payment successful!');
			}

			// order fire store database
			await db
				.collection('users')
				.doc(user.uid)
				.collection('orders')
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

			// clear the basket
			dispatch({ type: Type.EMPTY_BASKET });

			navigate('/orders', { state: { msg: 'you have placed your orders' } });
		} catch (error) {
			// console.log(error);
			setError('An error occurred. Please try again.');
			toast.error('An error occurred. Please try again.');
		}
		setProcessing(false);
	};

	return (
		<div className="bg-white min-h-screen flex flex-col">
			<ToastContainer />
			{/* Header */}
			<div className="bg-slate-200 border-b-2 shadow-md p-4">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
					<Link className="cursor-pointer" to="/">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
							alt="Amazon Logo"
							className="w-24"
						/>
					</Link>
					<h1 className="text-2xl font-bold text-center">
						Checkout ({basket.length} item{basket.length !== 1 && 's'})
					</h1>
					<FaLock size={20} />
				</div>
			</div>
			<div className="max-w-screen-md mx-auto p-6">
				<div className="flex flex-col md:flex-row justify-between items-start">
					<h2 className="text-lg font-semibold mb-4">Delivery Address:</h2>
					<div className="flex flex-col">
						<p>
							<strong>Name</strong>: {user?.email?.split('@')[0]}
						</p>
						<p>
							<strong>Email</strong>: {user?.email}
						</p>
						<p>
							<strong>Phone Number</strong>: +25179212908
						</p>
					</div>
				</div>
				<hr />
			</div>
			<strong className="pl-10 text-xl">Review items and Delivery</strong>
			<div className="pt-10 pl-10 flex flex-wrap gap-4">
				{basket?.map((item) => (
					<div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
						<ProductCard product={item} />
					</div>
				))}
			</div>
			<hr />
			{/* Centered Form */}
			<div className="flex-grow flex items-center justify-center p-6">
				<form
					onSubmit={handlePayment}
					className="relative w-full max-w-sm flex flex-col items-center bg-white border rounded shadow-md p-6"
				>
					<div className="w-full p-3 border border-gray-300 rounded mb-4">
						{error && <small className="text-red-600">{error}</small>}
						<CardElement onChange={handleChange} />
					</div>
					<div className="w-full flex flex-col items-center justify-between p-4 bg-white border rounded shadow-md">
						<span className="text-lg font-semibold mb-4">
							Total Order: <CurrencyFormat amount={total} />
						</span>
						<button
							type="submit"
							className="relative w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
							disabled={processing}
						>
							{processing ? (
								<div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-40 rounded">
									<Spinner />
								</div>
							) : (
								'Pay Now'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Payment;
