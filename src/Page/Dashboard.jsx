import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./Edit";

export default function Dashboard() {
	const [data, setData] = useState([]);
	const [selectedQuote, setSelectedQuote] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://anime-quotes-1mxl.onrender.com/quotes"
			);
			setData(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDeleteClick = async (id) => {
		try {
			await axios.delete(`https://anime-quotes-1mxl.onrender.com/quotes/${id}`);
			fetchData();
		} catch (error) {
			console.error("Error deleting quote:", error);
		}
	};

	const [showTable, setShowTable] = useState(true);

	const handleEditClick = (quote) => {
		setSelectedQuote(quote);
		setShowTable(false);
	};

	return (
		<>
			{showTable && (
				<>
					<p className="text-5xl font-medium my-5 text-slate-800 text-center tracking-wider">
						Data
					</p>
					<div class="p-4">
						<div className="flex items-center justify-center h-screen overflow-x-auto rounded-lg">
							<div className="w-full max-h-full">
								<table className="md:text-normal text-xs min-w-full md:text-sm text-left text-gray-500 dark:text-gray-400">
									<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th scope="col" class="px-6">
												No
											</th>
											<th scope="col" class="px-6 py-3 w-1/4">
												Quote
											</th>
											<th scope="col" class="px-3 py-3 w-1/4">
												Character
											</th>
											<th scope="col" class="px-3 py-3 w-1/4">
												Anime Name
											</th>
											<th scope="col" class="px-6 py-3 w-1/4">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{data.map((quote, index) => (
											<tr
												key={index}
												className="bg-slate-800 font-inter text-white border-b dark:bg-gray-900 dark:border-gray-700"
											>
												<th
													scope="row"
													className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
												>
													{index + 1}
												</th>
												<td className="px-6 py-4">{quote.quote}</td>
												<td className="px-3 py-4">{quote.author}</td>
												<td className="px-3 py-4">{quote.anime}</td>
												<td class="px-6 py-4">
													<button
														onClick={() => handleEditClick(quote)}
														className="font-medium me-5 text-emerald-400 hover:underline"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															class="w-6 h-6"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
															/>
														</svg>
													</button>
													<button
														onClick={() => handleDeleteClick(quote.id)}
														className="font-medium me-5 text-red-600 hover:underline"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															class="w-6 h-6"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
															/>
														</svg>
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</>
			)}
			{selectedQuote && (
				<Edit
					quote={selectedQuote}
					onClose={() => {
						setShowTable(true);
						setSelectedQuote(null);
						fetchData();
					}}
				/>
			)}
		</>
	);
}
