import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './dataProvider/dataProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRouts = ({ children, msg, redirect }) => {
	const navigate = useNavigate();
	const {
		state: { user },
	} = useContext(DataContext);

	useEffect(() => {
		if (!user) {
			navigate('/auth', {
				state: { msg, redirect },
			});
		}
	}, [user, navigate, msg, redirect]);

	return children;
};

export default ProtectedRouts;
