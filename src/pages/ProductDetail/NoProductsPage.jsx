import React from 'react';

const NoProductsPage = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center py-20">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-20 w-20 text-gray-500 mb-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M9 7h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
				<path d="M6 9V5a1 1 0 011-1h10a1 1 0 011 1v4" />
			</svg>
			<h2 className="text-2xl font-bold text-gray-700 mb-2">
				No Products Available
			</h2>
			<p className="text-gray-500">
				Products will be available soon. Stay tuned!
			</p>
		</div>
	);
};

export default NoProductsPage;
