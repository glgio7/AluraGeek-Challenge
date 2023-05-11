import * as S from "./styles";

type ProductCardProps = {
	imagePath: string;
	name: string;
	price: string;
	key: number;
};

const ProductCard = ({ imagePath, name, price }: ProductCardProps) => {
	return (
		<S.ProductContainer>
			<img src={imagePath} alt="" />
			<span className="product__name">{name}</span>
			<span className="product__price">{price}</span>
			<a href="/" className="product__about">
				Ver produto
			</a>
		</S.ProductContainer>
	);
};

export default ProductCard;
