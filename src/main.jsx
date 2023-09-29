import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import SignIn from "./Page/SignIn.jsx";
import Admin from "./Page/Admin";
import ProtectedRoute from "./Routes/ProtectedRoute"
import Add from "./Page/Add";
import Dashboard from "./Page/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/signIn" element={<SignIn />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/add" element={<Add />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
