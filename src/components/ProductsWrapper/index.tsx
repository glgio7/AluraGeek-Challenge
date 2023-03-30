import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import * as S from "./styles";

interface IProduct {
	title?: string;
	name: string;
	price: string;
	href: string;
	image_path: string;
}

type ProductsWrapperProps = {
	title?: string;
	productList: IProduct[];
};

const ProductsWrapper = ({ title, productList }: ProductsWrapperProps) => {
	const address = title?.toLowerCase().replace(" ", "+");

	console.log(address);

	return (
		<S.Wrapper>
			<h2 className="wrapper__header">
				<span>{title}</span>
				<Link to={`category/${address}`}>Ver mais →</Link>
			</h2>
			{productList &&
				productList.map((item, index) => {
					if (item.price)
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
