import * as S from "./styles";

type ButtonProps = {
	buttonText: string;
	className?: string;
};

const Button = ({ buttonText, className }: ButtonProps) => {
	return (
		<S.ButtonContainer className={className}>{buttonText}</S.ButtonContainer>
	);
};

export default Button;
