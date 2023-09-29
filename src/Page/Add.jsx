import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Add() {
	const [quote, setQuote] = useState("");
	const [kanji, setKanji] = useState("");
	const [url, setUrl] = useState("");
	const [character, setCharacter] = useState("");
	const [anime, setAnime] = useState("");
	const [data, setData] = useState([]);
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		axios
			.get("https://anime-quotes-1mxl.onrender.com/quotes")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const highestId = Math.max(...data.map((q) => q.id), 0);
			const newId = highestId + 1;
			await axios.post("https://anime-quotes-1mxl.onrender.com/quotes", {
				id: newId,
				quote: quote,
				author: character,
				anime: anime,
				jpn: kanji,
				pfp: url,
			});
			setAlert(!alert);
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		} catch (error) {
			console.error("Error adding quote:", error);
		}
	};

	return (
		<>
			<p className="text-5xl font-medium my-5 text-slate-100 text-center tracking-wider">
				Add Anime Quotes JSON
			</p>
			<div className="p-4">
				<div className="h-screen rounded-lg">
					<div className="w-full max-h-full">
						<div className="max-w-2xl p-6 mx-auto bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<form onSubmit={handleSubmit}>
								<p className="mb-3 font-semibold text-xl text-gray-700 dark:text-gray-400">
									Add Quote
								</p>
								<hr className="h-px my-3 bg-gray-300 border-0 dark:bg-gray-700" />
								<div className="grid mb-6">
									<div>
										<label
											htmlFor="quote"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Quote
										</label>
										<input
											type="text"
											id="quote"
											value={quote}
											onChange={(e) => setQuote(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Give up on your dreams and die."
											required
										/>
									</div>
								</div>
								<div className="grid mb-6">
									<div>
										<label
											htmlFor="kanji"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Japan Kanji
										</label>
										<input
											type="text"
											id="kanji"
											value={kanji}
											onChange={(e) => setKanji(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="夢を諦めて死んでください。"
											required
										/>
									</div>
								</div>
								<div className="grid mb-6">
									<div>
										<label
											htmlFor="url"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Image Url [Pinterest PFP]
										</label>
										<input
											type="text"
											id="url"
											value={url}
											onChange={(e) => setUrl(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="https://i.pinimg.com/564x/ee/01/6d/ee016d36f216e7f73a3108d7302e3ddd.jpg"
											required
										/>
									</div>
								</div>
								<div className="grid md:grid-cols-2 gap-2 mb-6">
									<div>
										<label
											htmlFor="character"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Character Name
										</label>
										<input
											type="text"
											id="character"
											value={character}
											onChange={(e) => setCharacter(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Levi Ackerman"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="anime"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Anime
										</label>
										<input
											type="text"
											id="anime"
											value={anime}
											onChange={(e) => setAnime(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Attack On Titan"
											required
										/>
									</div>
								</div>
								{alert && (
									<div
										class="p-4 mb-4 text-sm flex text-green-800 rounded-lg bg-green-300 dark:bg-gray-800 dark:text-green-400"
										role="alert"
									>
										<span class="font-medium">Success alert!</span> Change a few things up
										and try submitting again.
										<div role="status">
											<svg
												aria-hidden="true"
												class="w-6 h-6 mx-2 text-white animate-spin dark:text-gray-600 fill-blue-600"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
											<span class="sr-only">Loading...</span>
										</div>
									</div>
								)}
								<button
									type="submit"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
