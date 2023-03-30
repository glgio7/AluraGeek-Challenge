import Hero from "../components/Hero";
import ProductsWrapper from "../components/ProductsWrapper";

const Home = () => {
	return (
		<>
			<Hero />
			<ProductsWrapper title="star_wars" />
			<ProductsWrapper title="consoles" />
			<ProductsWrapper title="star_wars" />
			<ProductsWrapper title="consoles" />
		</>
	);
};

export default Home;
