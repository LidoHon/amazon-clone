import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const override = {
	display: 'block',
	margin: '100px auto',
};
const Spinners = (loading) => {
	return (
		<ClipLoader
			color="#2e7d32"
			loading={loading}
			cssOverride={override}
			size={50}
		/>
	);
};

export default Spinners;
