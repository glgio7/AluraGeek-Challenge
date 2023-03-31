import * as S from "./styles";
import { Link } from "react-router-dom";
import { IProduct } from "../../pages/index";
import ProductCard from "../ProductCard";

type ProductsWrapperProps = {
	title?: string;
	productList: IProduct[];
};

const ProductsWrapper = ({ title, productList }: ProductsWrapperProps) => {
	const address = title?.toLowerCase().replace(" ", "+");

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
