import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCard = ({ data }) => {
	console.log(data);

	return (
		<div className="bg-white border rounded-lg shadow-md flex flex-col items-center group relative mb-5">
			<Link to={`/category/${data.name}`} className="block">
				<h3 className="text-xl font-bold mt-2 mb-2">{data.title}</h3>
				<div className="flex justify-center items-center h-40 rounded-t-md overflow-hidden">
					<img
						src={data.imgLink}
						alt={data.title}
						className="h-full auto object-cover pt-3"
						style={{ maxHeight: '100%', maxWidth: '100%' }}
					/>
				</div>

				<p className="text-xs text-left mb-2">{data.description}</p>
			</Link>
			<Link
				to={`/category/${data.name}`}
				className="text-customBlue block text-left text-sm hover:text-red-800"
			>
				Shop Now
			</Link>
		</div>
	);
};

export default CatagoryCard;
