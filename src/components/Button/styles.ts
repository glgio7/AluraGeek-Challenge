import styled from "styled-components";

export const ButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 16px;

	font-size: 16px;

	width: 130px;
	height: 51px;

	background: #2a7ae4;
	color: #fff;

	transition: all 300ms;

	&:hover {
		opacity: 0.8;
	}

	@media screen and (max-width: 1024px) {
		font-size: 14px;

		width: 120px;
		height: 40px;
	}
	@media screen and (max-width: 768px) {
	}
`;
