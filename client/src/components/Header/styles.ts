import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: relative;

	display: flex;
	align-items: center;

	padding: 0 150px;

	height: 115px;
	width: 100%;

	background-color: #fff;

	.logo-container {
		display: flex;
		align-items: center;
	}

	.logo-container__text {
		width: 126px;
		margin-left: 5px;
	}

	.logo-container__image {
		width: 50px;
	}

	.search-bar {
		display: flex;
		align-items: center;
		background-color: #f5f5f5;
		padding: 8px 16px;
		margin-left: 16px;

		width: 44%;

		border-radius: 20px;
	}

	.search-bar input {
		width: 100%;
		background-color: transparent;
	}

	.search-icon {
		cursor: pointer;

		margin-left: 16px;

		width: 18px;
	}

	.login-btn {
		display: flex;
		align-items: center;
		justify-content: center;

		border: 1px solid #2a7ae4;

		color: #2a7ae4;
		background-color: #fff;

		font-size: 16px;

		width: 182px;
		height: 51px;

		position: absolute;
		right: 150px;
	}

	@media screen and (max-width: 1024px) {
		padding: 0 32px;
		height: 72px;

		.logo-container__image {
			width: 28px;
		}

		.logo-container__text {
			width: 72px;
			margin-left: 3px;
		}

		.login-btn {
			width: 166px;
			height: 40px;

			font-size: 14px;

			right: 32px;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 0 16px;
		height: 72px;
		justify-content: space-between;

		.login-btn {
			position: static;
			order: 1;
			width: 133px;
			height: 40px;
		}

		.search-bar {
			padding: 0;
			background-color: transparent;
		}

		.search-bar {
			position: absolute;
			bottom: -56px;

			height: 40px;
			width: calc(100% - 32px);

			margin-left: 0;

			padding: 0 16px;
			order: 2;

			background-color: #fff;
		}
		.search-icon {
			margin-left: 0;

			width: 24px;
		}
	}
`;
