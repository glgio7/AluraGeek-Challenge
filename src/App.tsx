import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
