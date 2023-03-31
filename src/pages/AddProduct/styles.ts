import styled from "styled-components";

export const AddContainer = styled.div`
	padding: 64px;

	display: flex;
	flex-direction: column;
	align-items: center;

	h4 {
		font-weight: 700;
		font-size: 32px;

		color: #464646;
	}
	form {
		display: flex;
		flex-direction: column;

		width: 559px;
	}

	label {
		color: #666;
		background-color: #fff;
		width: 100%;

		font-size: 14px;

		padding: 0 12px;
		padding-bottom: 4px;
		padding-top: 8px;
		margin-top: 16px;

		display: block;
	}

	input[type="text"],
	select {
		height: 40px;
		width: 100%;

		background-color: #fff;

		font-size: 16px;

		padding: 0 12px;
		padding-bottom: 8px;
		padding-top: 4px;
	}

	select {
		margin-top: 16px;
		color: #666;
	}

	.add-button {
		margin-top: 16px;
		width: 100%;
	}

	@media screen and (max-width: 1024px) {
		padding: 32px;

		form {
			width: 704px;
		}

		h4 {
			font-size: 22px;
		}
	}

	@media screen and (max-width: 768px) {
		form {
			width: 328px;
		}

		h4 {
			margin-top: 40px;
		}
	}
`;
