import React from 'react';
import numeral from 'numeral';
const CurrencyFormat = ({ amount }) => {
	const formatedAmount = numeral(amount).format('$0,0.00');
	return <div className="mt-3 pb-4">{formatedAmount}</div>;
};

export default CurrencyFormat;
