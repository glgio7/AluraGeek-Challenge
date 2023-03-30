import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Category from "../pages/Category";
import Login from "../pages/Login";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/category/:address" element={<Category />} />
		</Routes>
	);
};

export default AppRoutes;
