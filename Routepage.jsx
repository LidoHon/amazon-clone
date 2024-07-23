import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	redirect,
} from 'react-router-dom';
import HomePage from './src/pages/Home/HomePage';
import Payment from './src/pages/payment/Payment';
import Orders from './src/pages/Orders/Orders';
import Cart from './src/pages/cart/Cart';
import Mainlayout from './src/components/layouts/Mainlayout';
import CategoryDetails from './src/pages/CatagoryDetail/CatagoryDetails';
import NoProductsPage from './src/pages/ProductDetail/NoProductsPage';
import ProductDetail from './src/pages/ProductDetail/ProductDetail';
import NotFoundPage from './src/pages/NotFound';
import Auth from './src/pages/Auth/Auth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRouts from './src/components/ProtectedRouts';
const stripePromise = loadStripe(
	'pk_test_51PeXyHRtAnm9mGyXq2n258aO1mEVqyTYS3X77Ura8SJI0doYvT51v5nrPiPI7JYM7wplF3QTt4OQEYVtfAH41uOc00hw0N3gSk'
);
const Routepage = () => {
	// const options = {
	// 	// passing the client secret obtained from the server
	// 	clientSecret: '{{CLIENT_SECRET}}',
	// };
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Mainlayout />}>
						<Route path="/" element={<HomePage />} />

						<Route
							path="/orders"
							element={
								<ProtectedRouts
									msg={'you must log in to use this service'}
									redirect={'/orders'}
								>
									<Orders />
								</ProtectedRouts>
							}
						/>
						<Route
							path="/category/:categoryName"
							element={<CategoryDetails />}
						/>
						<Route path="/products/:productId" element={<ProductDetail />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/no-products" element={<NoProductsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
					<Route path="/auth" element={<Auth />} />
					<Route
						path="/payments"
						element={
							<ProtectedRouts
								msg={'you must log in to use this service'}
								redirect={'/payments'}
							>
								<Elements stripe={stripePromise}>
									<Payment />
								</Elements>
							</ProtectedRouts>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default Routepage;
