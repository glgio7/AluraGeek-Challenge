import { Link } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./styles";

const Login = () => {
	return (
		<S.LoginContainer>
			<h3>Iniciar sessão</h3>
			<input type={"email"} placeholder="Insira seu email" />
			<input type={"password"} placeholder="Insira sua senha" />
			<Button buttonText="Entrar" className="submit-button"></Button>
			<h6>
				<span>Ainda não possui uma conta?</span>
				<Link to={""}>Crie sua conta aqui.</Link>
			</h6>
		</S.LoginContainer>
	);
};

export default Login;
