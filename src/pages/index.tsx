import Hero from "../components/Hero";
import ProductsWrapper from "../components/ProductsWrapper";
import Products from "../db.json";

export interface IProduct {
	title?: string;
	name: string;
	price: string;
	href: string;
	image_path: string;
}

export interface IProductsLists {
	[key: string]: IProduct[];
}

const productsLists: IProductsLists = Products;

const Home = () => {
	return (
		<>
			<Hero />
			{Object.values(productsLists).map((item, index) => {
				return (
					<ProductsWrapper
						key={index}
						title={item[0].title}
						productList={item}
					/>
				);
			})}
		</>
	);
};

export default Home;
