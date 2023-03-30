import Hero from "../components/Hero";
import ProductsWrapper from "../components/ProductsWrapper";

interface IProduct {
	title?: string;
	name: string;
	price: string;
	href: string;
	image_path: string;
}

interface IProductsLists {
	[key: string]: IProduct[];
}

const productsLists: IProductsLists = {
	star_wars: [
		{ title: "Star Wars", name: "", price: "", href: "", image_path: "" },
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw1.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw2.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw3.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw4.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw5.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/sw6.jpg",
		},
	],
	consoles: [
		{ title: "Consoles", name: "", price: "", href: "", image_path: "" },
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons1.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons2.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons3.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons4.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons5.jpg",
		},
		{
			name: `Produto ${Math.round(Math.random() * 100)}`,
			price: `R$ ${Math.round(Math.random() * 100)}`,
			href: "/",
			image_path: "/img/cons6.jpg",
		},
	],
};

const Home = () => {
	return (
		<>
			<Hero />
			{Object.values(productsLists).map((item, index) => {
				return (
					<ProductsWrapper
						key={index}
						title={item[0].title || ""}
						productList={item}
					/>
				);
			})}
		</>
	);
};

export default Home;
