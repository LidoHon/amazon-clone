import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';
import { auth } from '../../Utils/Firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { DataContext } from '../../components/dataProvider/dataProvider';
import { Type } from '../../Utils/ActionType';
import Spinner from '../../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		rePassword: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { state, dispatch } = useContext(DataContext);
	const { user } = state;

	const navigate = useNavigate();
	const navStateData = useLocation();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isLogin) {
			handleSignIn();
		} else {
			handleSignUp();
		}
	};

	const handleSignIn = () => {
		const { email, password } = form;
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('Signed in:', user);
				dispatch({
					type: Type.SET_USER,
					user: userCredential.user,
				});
				navigate(navStateData?.state?.redirect || '/');
			})
			.catch((error) => {
				setError(error.message);
				toast.error(error.message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleSignUp = () => {
		const { email, password, rePassword } = form;
		setLoading(true);

		if (password !== rePassword) {
			setError('Passwords do not match');
			toast.error('Passwords do not match', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setLoading(false);
			return;
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('Signed up:', user);
				dispatch({
					type: Type.SET_USER,
					user: userCredential.user,
				});
				navigate(navStateData?.state?.redirect || '/');
			})
			.catch((error) => {
				setError(error.message);
				toast.error(error.message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const toggleForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<div className="flex justify-center items-center flex-grow">
				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
					<Link to="/" className="flex justify-center mb-6">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
							alt="Amazon Logo"
							className="w-24"
						/>
					</Link>
					{loading && (
						<div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-40 z-50">
							<Spinner />
						</div>
					)}
					{isLogin ? (
						<>
							<h2 className="text-2xl font-semibold text-center mb-6">
								Sign in
							</h2>
							{navStateData?.state?.msg && (
								<small className="text-sm text-center text-red-800">
									{navStateData.state.msg}
								</small>
							)}
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="email"
									>
										Email or mobile phone number
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={form.email}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="password"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={form.password}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Sign in
								</button>
								{error && <small className="pt-2 text-red-600">{error}</small>}
							</form>
							<p className="text-xs text-gray-600 mt-4">
								By continuing, you agree to Amazon's{' '}
								<Link to="#" className="text-blue-600">
									Conditions of Use
								</Link>{' '}
								and{' '}
								<Link to="#" className="text-blue-600">
									Privacy Notice
								</Link>
								.
							</p>
							<p className="text-xs text-gray-600 mt-4">
								<Link to="#" className="text-blue-600">
									Forgot your password?
								</Link>
							</p>
							<p className="text-xs text-gray-600 mt-4">
								New to Amazon?{' '}
								<button
									onClick={toggleForm}
									className="text-blue-600 underline"
								>
									Create your Amazon account
								</button>
							</p>
						</>
					) : (
						<>
							<h2 className="text-2xl font-semibold text-center mb-6">
								Create account
							</h2>
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="name"
									>
										Your name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										value={form.name}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="email"
									>
										Mobile number or email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={form.email}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="password"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={form.password}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
									<p className="text-xs text-gray-600 mt-1 flex flex-row gap-1 ">
										<RiErrorWarningFill />
										Passwords must be at least 6 characters.
									</p>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="rePassword"
									>
										Re-enter password
									</label>
									<input
										type="password"
										name="rePassword"
										id="rePassword"
										value={form.rePassword}
										onChange={handleChange}
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Continue
								</button>
								{error && <small className="pt-2 text-red-600">{error}</small>}
							</form>
							<p className="text-xs text-gray-600 mt-4">
								By creating an account, you agree to Amazon's{' '}
								<Link to="#" className="text-blue-600">
									Conditions of Use
								</Link>{' '}
								&{' '}
								<Link to="#" className="text-blue-600">
									Sale
								</Link>
								. Please see our{' '}
								<Link to="#" className="text-blue-600">
									Privacy Notice
								</Link>
								, our{' '}
								<Link to="#" className="text-blue-600">
									Cookies Notice
								</Link>{' '}
								and our{' '}
								<Link to="#" className="text-blue-600">
									Interest-Based Ads Notice
								</Link>
								.
							</p>
							<p className="text-xs text-gray-600 mt-4">
								Buying for work?{' '}
								<Link to="#" className="text-blue-600">
									Create a free business account
								</Link>
							</p>
							<p className="text-xs text-gray-600 mt-4">
								Already have an account?{' '}
								<button
									onClick={toggleForm}
									className="text-blue-600 underline"
								>
									Sign in
								</button>
							</p>
						</>
					)}
				</div>
			</div>
			<div className="border-t-2 shadow-sm items-center">
				<div className="flex flex-row justify-center">
					<ul className="flex space-x-4 text-xs text-gray-600">
						<li>
							<Link to="#" className="hover:text-blue-600">
								Conditions of Use
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-600">
								Privacy Notice
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-600">
								Help
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-600">
								Cookies Notice
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-600">
								Interest-Based Ads Notice
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-center text-xs text-gray-600 mt-4">
					<p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
				</div>
			</div>
		</div>
	);
};

export default Auth;
