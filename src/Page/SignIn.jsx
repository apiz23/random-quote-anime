import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
	const [data, setData] = useState([]);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		axios
			.get("https://anime-quotes-1mxl.onrender.com/admin")
			.then((response) => {
				setData(response.data);
				setUsername(response.data[0].username);
				setPassword(response.data[0].password);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
		validateForm(e.target.value, password);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		validateForm(username, e.target.value);
	};

	const validateForm = (inputUsername, inputPassword) => {
		const isValid =
			inputUsername === data[0].username && inputPassword === data[0].password;
		setIsButtonDisabled(!isValid);
		setErrorMessage(isValid ? "" : "Invalid username or password.");

		if(isValid){
			sessionStorage.setItem('loggedIn','true');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="h-screen mx-auto px-4 sm:px-6 lg:px-0 max-w-sm flex items-center justify-center">
				<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
							Admin
						</h5>
						{errorMessage && (
							<div className="text-red-600 font-medium text-sm">{errorMessage}</div>
						)}
						<div>
							<label
								htmlFor="username"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								type="text"
								name="username"
								id="username"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Username"
								onChange={handleUsernameChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								onChange={handlePasswordChange}
								required
							/>
						</div>
						<button
							type="submit"
							className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
								isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
							}`}
							disabled={isButtonDisabled}
						>
							<Link to="/admin">Login to your account</Link>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
