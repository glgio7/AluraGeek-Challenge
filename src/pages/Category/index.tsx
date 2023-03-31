import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IProductsLists } from "../";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import Products from "../../db.json";

import * as S from "./styles";

const productsLists: IProductsLists = Products;

const Category = () => {
	const { address } = useParams();
	const list = address ? address?.replace("+", "_") : "";

	return (
		<S.Wrapper>
			<h2 className="wrapper__header">
				<span>{productsLists && productsLists[list][0].title}</span>
				<Link to={"/addproduct"}>
					<Button buttonText="Adicionar Produto" />
				</Link>
			</h2>
			{productsLists[list] &&
				productsLists[list].map((item, index) => {
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

export default Category;
