import { useState } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
import Dashboard from "./Dashboard";

export default function Admin() {
	const [sidebar, setSidebar] = useState(false);
	const [activeComponent, setActiveComponent] = useState(<Dashboard />);

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	const closeSidebar = () => {
		setSidebar(false);
	};

	const showDashboard = () => {
		setActiveComponent(<Dashboard />);
	};

	const showAddComponent = () => {
		setActiveComponent(<Add />);
	};

	return (
		<>
			<button
				data-drawer-target="default-sidebar"
				data-drawer-toggle="default-sidebar"
				aria-controls="default-sidebar"
				type="button"
				onClick={toggleSidebar}
				class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="default-sidebar"
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
					sidebar ? "translate-x-0" : "-translate-x-full"
				} sm:translate-x-0`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
					<div className="flex justify-between p-3">
						<p className="font-medium text-xl">Sidebar</p>
						{sidebar && (
							<button
								onClick={closeSidebar}
								className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
									></path>
								</svg>
							</button>
						)}
					</div>

					<ul className="space-y-2 font-medium">
						<li>
							<button
								onClick={showDashboard}
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
								<span className="ml-3">Dashboard</span>
							</button>
						</li>
						<li>
							<button
								onClick={showAddComponent}
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
										d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span className="ml-3">Add</span>
							</button>
						</li>
						<li>
							<Link
								to="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
										d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
									/>
								</svg>

								<span className="ml-3">Exit</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>

			<div class="p-4 sm:ml-64">
				{activeComponent}
			</div>
		</>
	);
}
