import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../Utils/Firebase';
import { DataContext } from '../../components/dataProvider/dataProvider';
import ProductCard from '../../components/Product/ProductCard';

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const {
		state: { user },
		dispatch,
	} = useContext(DataContext);

	useEffect(() => {
		if (user) {
			db.collection('users')
				.doc(user.uid)
				.collection('orders')
				.orderBy('created', 'desc')
				.onSnapshot((snapshot) => {
					console.log(snapshot);
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});

			// db.collection('users')
			// 	.doc(user.uid)
			// 	.collection('orders')
			// 	.orderBy('created', 'desc')
			// 	.onSnapshot((snapshot) => {
			// 		snapshot.forEach((doc) => {
			// 			console.log(doc.id, ' => ', doc.data());
			// 		});
			// 	});
		} else {
			setOrders([]);
		}
	}, []);

	return (
		<div className="bg-white p-6">
			<div className="p-5 border-2 bg-slate-300 shadow-md rounded-lg">
				<h1 className="text-center text-2xl font-bold bg-white shadow-lg p-3 border-b-4 border-orange-800 rounded-t-lg">
					Ordered Products
				</h1>
				{orders?.length == 0 && (
					<div className="text-xl font-bold text-center p-2">
						{' '}
						no orders avaliable
					</div>
				)}
			</div>

			<div className="mt-6 flex flex-col gap-6">
				{orders?.map((eachOrder, i) => (
					<div
						key={i}
						className="w-full p-4 bg-gray-100 border rounded-lg shadow-md"
					>
						<div className="border-b border-gray-300 pb-2 mb-4">
							<p className="text-lg font-semibold">Order ID: {eachOrder?.id}</p>
						</div>

						<div className="flex flex-wrap gap-4 ">
							{eachOrder?.data?.basket?.map((order, index) => (
								<ProductCard
									key={index}
									product={order}
									className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Orders;
