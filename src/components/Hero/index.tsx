import background from "../../assets/banner-image.png";
import Button from "../Button";
import * as S from "./styles";

const Hero = () => {
	return (
		<S.HeroContainer background={background}>
			<div className="text-container">
				<h2>Dezembro Promocional</h2>
				<h3>Produtos selecionados com 33% de desconto</h3>
				<Button buttonText="Ver consoles" />
			</div>
		</S.HeroContainer>
	);
};
export default Hero;
