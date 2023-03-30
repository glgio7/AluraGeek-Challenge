import ProductCard from "../ProductCard";
import * as S from "./styles";

type ProductsWrapperProps = {
	title: string;
};

interface IProduct {
	name: string;
	price: string;
	href: string;
	image_path: string;
}

interface IProductsList {
	[key: string]: IProduct[];
}

const productsList: IProductsList = {
	star_wars: [
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

const ProductsWrapper = ({ title }: ProductsWrapperProps) => {
	const listTitle: string = title === "star_wars" ? "Star Wars" : title;

	return (
		<S.Wrapper>
			<h2 className="wrapper__header">
				<span>{listTitle}</span>
				<a href="/">Ver mais →</a>
			</h2>
			{productsList[title].map((item, index) => {
				return (
					<ProductCard
						name={item.name}
						price={item.price}
						imagePath={item.image_path}
						key={index}
					/>
				);
			})}
		</S.Wrapper>
	);
};

export default ProductsWrapper;
