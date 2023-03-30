import styled from "styled-components";

export const Wrapper = styled.ul`
	width: 100%;
	padding: 0 150px;

	margin-top: 64px;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	.wrapper__header {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32px;
		width: 100%;
	}
	.wrapper__header span::first-letter {
		text-transform: uppercase;
	}

	.wrapper__header a {
		font-size: 16px;
		font-weight: 700;

		color: #2a7ae4;

		transition: all 250ms;

		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 1024px) {
		padding: 32px;
	}

	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;
