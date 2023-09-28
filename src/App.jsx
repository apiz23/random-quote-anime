import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";

export default function App() {
	const [data, setData] = useState([]);
	const [currentQuote, setCurrentQuote] = useState(null);
	const [loading, setLoading] = useState(true);

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
			{loading ? ( // If loading is true, display the Loading component
				<Loading />
			) : currentQuote ? (
				<div key={currentQuote.quote}>
					<img
						className="rounded-lg shadow-black shadow-lg mt-16 h-24 md:h-40 mx-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 z-10"
						src={`${currentQuote.pfp}`}
						alt="Medium avatar"
					/>
					<div className="max-w-screen-md p-6 md:p-10 pb-12 mx-3 md:mx-auto mt-36 md:mt-52 bg-slate-800 mb-5 shadow-xl rounded-md dark:bg-gray-800 dark:border-gray-700">
						<h2 className="text-center text-white text-xl mt-10 font-medium font-inter">
							{"< "}
							{currentQuote.quote}
							{" />"}
						</h2>
						<h6 className="mt-4 mb-5 text-center text-slate-500 font-lobster">
							{currentQuote.jpn}
						</h6>
						<p className="me-2 float-left text-white font-serif">
							{currentQuote.author}
						</p>
						<p className="mb-3 float-right text-white font-serif">
							{currentQuote.anime}
						</p>
					</div>
					<Footer />
					<div className="text-center">
						<button
							onClick={getRandomQuote}
							type="button"
							className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Next Quotes
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}
