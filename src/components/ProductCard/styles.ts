import styled from "styled-components";

export const ProductContainer = styled.li`
	display: flex;
	flex-direction: column;
	width: 15%;
	margin: 16px 0;

	img {
		aspect-ratio: 1;
	}

	.product__name,
	.product__price,
	.product__about {
		margin-top: 8px;
		font-family: "Montserrat", sans-serif;
	}

	.product__name {
		color: #464646;

		font-size: 14px;
		font-weight: 500;
	}

	.product__price {
		color: #464646;

		font-weight: 700;
		font-size: 16px;
	}

	.product__about {
		color: #2a7ae4;

		font-weight: 700;
		font-size: 16px;

		color: #2a7ae4;

		transition: all 250ms;

		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 1024px) {
		width: 20%;
	}
	@media screen and (max-width: 768px) {
		width: 45%;
	}
`;
