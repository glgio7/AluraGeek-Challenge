import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;

	height: 470px;
	width: 100%;

	background-color: #eaf2fd;

	.container {
		height: 100%;
		width: 100%;
		display: flex;

		padding: 64px;
	}
	.footer__content,
	.footer__list {
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

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

	form {
		height: 100%;
		width: 50%;
	}

	form h2 {
		font-size: 16px;
	}

	label {
		color: #666;
		background-color: #fff;
		width: 100%;

		font-size: 14px;

		padding: 0 12px;
		padding-bottom: 4px;
		padding-top: 8px;
		margin-top: 8px;

		display: block;
	}

	input[type="text"] {
		height: 40px;
		width: 100%;

		background-color: #fff;

		font-size: 16px;

		padding: 0 12px;
		padding-bottom: 8px;
		padding-top: 4px;
	}

	textarea {
		padding: 16px 12px;
		margin-top: 16px;

		resize: none;

		height: 82px;
		width: 100%;

		font-size: 16px;

		background-color: #fff;

		&::placeholder {
			color: #666;
		}
	}

	input[type="submit"] {
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;

		padding: 16px;
		margin-top: 16px;

		font-size: 16px;

		width: 165px;
		height: 51px;

		background: #2a7ae4;
		color: #fff;
	}

	.dev-container {
		height: 102px;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: #fff;
	}

	.dev-container p {
		padding: 32px;
		text-align: center;
	}

	@media screen and (max-width: 1024px) {
		.container {
			flex-direction: column;
			flex-wrap: wrap;

			padding: 32px;
		}

		.footer__content {
			height: auto;
			width: 50%;
			height: auto;
		}

		.footer__list {
			margin-top: 16px;
			height: 234px;
		}
	}

	@media screen and (max-width: 768px) {
		height: auto;

		.container {
			flex-direction: column;
			align-items: center;
			flex-wrap: nowrap;

			padding: 16px;
		}
		.footer__content,
		.footer__list,
		form {
			width: 100%;
		}

		.logo-container {
			justify-content: center;
		}
		.footer__list {
			align-items: center;
		}

		.footer__list li {
			margin-bottom: 16px;
		}

		h2 {
			margin-top: 16px;
		}
	}
`;
