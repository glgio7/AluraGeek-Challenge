import styled from "styled-components";

export const LoginContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 92px;

	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		color: #333;

		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
	}

	input {
		margin-top: 24px;

		padding: 0 12px;

		width: 423px;
		height: 63px;

		font-size: 16px;
	}

	.submit-button {
		margin-top: 24px;
		margin-bottom: 91px;

		width: 423px;
		height: 62px;
	}

	@media screen and (max-width: 1024px) {
		padding-top: 97px;

		display: flex;
		flex-direction: column;
		align-items: center;

		h3 {
			font-size: 16px;
			line-height: 19px;
		}

		input {
			margin-top: 16px;

			width: 275px;
			height: 41px;
		}

		.submit-button {
			margin-top: 16px;
			margin-bottom: 76px;

			width: 109px;
		}
	}
`;
