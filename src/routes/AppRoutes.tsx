import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/Login";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AppRoutes;
