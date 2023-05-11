import * as S from "./styles";
import logo from "../../assets/logo-vector.svg";
import text from "../../assets/logo-text.svg";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<S.HeaderContainer>
			<Link to={"/"}>
				<h1 className="logo-container">
					<img
						src={logo}
						alt="AluraGeek Logo"
						className="logo-container__image"
					/>
					<img
						src={text}
						alt="AluraGeek Logo"
						className="logo-container__text"
					/>
				</h1>
			</Link>

			<div className="search-bar">
				<input placeholder="O que deseja encontrar?" />
				<img src={searchIcon} alt="AluraGeek Logo" className="search-icon" />
			</div>
			<Link to={"/login"} className="login-btn">
				Login
			</Link>
		</S.HeaderContainer>
	);
};

export default Header;
