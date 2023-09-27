import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "./Components/Loading";

export default function App() {
	const [data, setData] = useState([]);
	const [currentQuote, setCurrentQuote] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios
			.get("https://anime-quotes-1mxl.onrender.com/quotes")
			.then((response) => {
				setData(response.data);
				setCurrentQuote(response.data[Math.floor(Math.random() * 10) + 1]);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const getRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * data.length);
		setCurrentQuote(data[randomIndex]);
	};

	return (
		<>
			{loading && <Loading />}
			{!loading && ( // Render only if loading is false
				<div className="h-screen p-3 bg-slate-700 flex items-center justify-center">
					<div className="mx-auto">
						<h1 className="animate-text bg-gradient-to-r from-slate-300 via-indigo-400 to-slate-300 bg-clip-text text-transparent mb-4 font-pt text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
							Anime Quotes
						</h1>
						<div className="my-10 mx-5 md:my-15 md:max-w-2xl justify-center min-h-[200px] min-w-[350px]">
							{currentQuote && (
								<div key={currentQuote.quote} className="mt-28">
									<img
										class="rounded-lg shadow-black shadow-lg h-20 md:h-28 mx-auto"
										src={`${currentQuote.pfp}`}
										alt="Medium avatar"
										style={{
											position: "absolute",
											top: "110px", // Adjust this value to control how much the image overflows
											left: "50%",
											right: "50%",
											transform: "translateX(-50%)",
											zIndex: "1",
										}}
									/>
									<div className="grid grid-cols-1 p-5 m-5 bg-gray-300 border border-gray-200 rounded-lg shadow-xl dark:border-gray-700 text-sm md:text-xl dark:bg-gray-800 min-h-max w-[400px] md:w-[600px]">
										<h2 className="text-center text-xl mt-10 font-medium font-inter">
											{"< "}
											{currentQuote.quote}
											{" />"}
										</h2>
										<h6 className="mt-4 text-center text-slate-500 font-lobster">
											{currentQuote.jpn}
										</h6>
										<div className="container text-center">
											<span className="my-4 text-lg float-left text-gray-700 inline-block font-serif">
												{currentQuote.author} <br />
											</span>
											<span className="ms-3 my-4 text-lg float-right inline-block font-medium text-black">
												{" "}
												{currentQuote.anime}
											</span>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="flex justify-center items-center">
							<button
								onClick={getRandomQuote}
								type="button"
								className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Next Quotes
							</button>
						</div>

						<footer className="container text-center">
							<div className="inline-block justify-center p-3">
								<a href="https://github.com/apiz23" target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										height="35"
										viewBox="0 0 24 24"
									>
										<path
											d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
											opacity=".3"
										></path>
										<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
									</svg>
								</a>
							</div>
							<div className="inline-block justify-center p-3">
								<a href="https://www.linkedin.com/in/muh-hafizuddin" target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										height="35"
										viewBox="0 0 50 50"
									>
										<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
									</svg>
								</a>
							</div>
						</footer>
					</div>
				</div>
			)}
		</>
	);
}
