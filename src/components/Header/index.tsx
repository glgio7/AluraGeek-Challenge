import * as S from "./styles";
import logo from "../../assets/logo-vector.svg";
import text from "../../assets/logo-text.svg";
import searchIcon from "../../assets/search.svg";

const Header = () => {
	return (
		<S.HeaderContainer>
			<h1 className="logo-container">
				<img
					src={logo}
					alt="AluraGeek Logo"
					className="logo-container__image"
				/>
				<img src={text} alt="AluraGeek Logo" className="logo-container__text" />
			</h1>

			<div className="search-bar">
				<input placeholder="O que deseja encontrar?" />
				<img src={searchIcon} alt="AluraGeek Logo" className="search-icon" />
			</div>
			<button className="login-btn">Login</button>
		</S.HeaderContainer>
	);
};

export default Header;
