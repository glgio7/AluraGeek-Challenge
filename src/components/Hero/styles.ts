import styled from "styled-components";

export const HeroContainer = styled.div<{ background: string }>`
	height: 352px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	padding: 32px 150px;

	background-image: ${({ background }) => `url(${background})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	.text-container {
		width: 100%;
		height: 170px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.text-container h2 {
		font-size: 52px;
		line-height: 61px;

		color: #fff;
	}

	.text-container h3 {
		font-size: 22px;
		font-weight: normal;
		line-height: 26px;

		color: #fff;
	}

	.text-container button {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 16px;

		font-size: 16px;

		width: 130px;
		height: 51px;

		background: #2a7ae4;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		padding: 32px;

		.text-container {
			height: 160px;
		}

		.text-container button {
			font-size: 14px;

			width: 120px;
			height: 40px;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 16px;
		height: 192px;

		.text-container {
			height: 98px;
		}

		.text-container h2 {
			font-size: 22px;
			line-height: 26px;
		}

		.text-container h3 {
			font-size: 14px;
			line-height: 16px;
		}
	}
`;
