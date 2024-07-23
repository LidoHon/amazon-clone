import React, { useContext, useEffect } from 'react';
import Routepage from '../Routepage';
import { DataContext } from './components/dataProvider/dataProvider';
import { Type } from './Utils/ActionType.js';
import { auth } from './Utils/Firebase.js';
const App = () => {
	const { user, dispatch } = useContext(DataContext);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser);
				dispatch({
					type: Type.SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: Type.SET_USER,
					user: null,
				});
			}
		});
	}, []);
	return (
		<>
			<Routepage />
		</>
	);
};

export default App;
