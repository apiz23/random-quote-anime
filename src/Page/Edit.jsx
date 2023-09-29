import React, { useState } from "react";
import axios from "axios";

export default function Edit({ quote, onClose }) {
	const [editedQuote, setEditedQuote] = useState(quote);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedQuote({ ...editedQuote, [name]: value });
	};

	const handleSave = async () => {
		try {
			await axios.put(
				`https://anime-quotes-1mxl.onrender.com/quotes/${editedQuote.id}`,
				editedQuote
			);
			onClose();
		} catch (error) {
			// Handle any errors here
			console.error("Error updating quote:", error);
		}
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<>
			<p className="text-5xl font-medium my-5 text-slate-100 text-center tracking-wider">
				Edit Quote
			</p>
			<div className="p-4">
				<div className="h-screen rounded-lg">
					<div className="w-full max-h-full">
						<div className="max-w-2xl p-6 mx-auto bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<form>
								<div class="grid mb-6 justify-center">
									<div>
										<div
											id="tooltip-jese"
											role="tooltip"
											class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
										>
											Jese Leos
											<div class="tooltip-arrow" data-popper-arrow></div>
										</div>
										<img
											data-tooltip-target="tooltip-jese"
											class="w-32 h-32 rounded"
											src={`${quote.pfp}`}
											alt="Medium avatar"
										/>
									</div>
								</div>
								<div class="grid mb-6 gap-2 md:grid-cols-3">
									<div>
										<label
											for="id"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Id
										</label>
										<input
											disabled={true}
											readOnly={true}
											type="text"
											id="id"
											value={editedQuote.id}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="id"
											onChange={handleInputChange}
										/>
									</div>
									<div>
										<label
											for="author"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Character Name
										</label>
										<input
											type="text"
											id="author"
											value={editedQuote.author}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="author"
											onChange={handleInputChange}
										/>
									</div>
									<div>
										<label
											for="anime"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Anime
										</label>
										<input
											type="text"
											id="anime"
											value={editedQuote.anime}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="anime"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="grid mb-6">
									<div>
										<label
											for="quote"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Quote
										</label>
										<input
											type="text"
											id="quote"
											value={editedQuote.quote}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="quote"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="grid mb-6">
									<div>
										<label
											for="jpn"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Japanese Translation
										</label>
										<input
											type="text"
											id="jpn"
											value={editedQuote.jpn}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="jpn"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="grid mb-6">
									<div>
										<label
											for="pfp"
											class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Url
										</label>
										<input
											type="text"
											id="pfp"
											value={editedQuote.pfp}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											name="pfp"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="grid mb-6">
									<div class="inline-flex rounded-md justify-end" role="group">
										<button
											onClick={handleSave}
											type="button"
											class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
										>
											Save
										</button>
										<button
											onClick={handleClose}
											type="button"
											class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
										>
											Close
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
