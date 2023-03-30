import * as S from "./styles";
import logoVector from "../../assets/logo-vector.svg";
import logoText from "../../assets/logo-text.svg";

const Footer = () => {
	return (
		<S.FooterContainer>
			<div className="container">
				<div className="footer__content">
					<div className="logo-container">
						<img
							src={logoVector}
							alt="Vetor do logo"
							className="logo-container__image"
						/>
						<img
							src={logoText}
							alt="Texto do logo"
							className="logo-container__text"
						/>
					</div>
				</div>
				<ul className="footer__list">
					<li>
						<a href="">Quem somos</a>
					</li>
					<li>
						<a href="">Política de privacidade</a>
					</li>
					<li>
						<a href="">Programa fidelidade</a>
					</li>
					<li>
						<a href="">Nossas lojas</a>
					</li>
					<li>
						<a href="">Quero ser franqueado</a>
					</li>
					<li>
						<a href="">Anuncie aqui</a>
					</li>
				</ul>
				<form>
					<h2>Fale conosco</h2>
					<label htmlFor="name">Nome</label>
					<input id="name" name="name" type={"text"} required />
					<textarea placeholder="Escreva a sua mensagem" />
					<input type={"submit"} value={"Enviar Mensagem"} />
				</form>
			</div>
			<div className="dev-container">
				<p>
					Desenvolvido por Giovane Azevedo
					<br />
					2023
				</p>
			</div>
		</S.FooterContainer>
	);
};

export default Footer;
