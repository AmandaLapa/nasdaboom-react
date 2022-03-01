import React from "react";
import "./Header.scss";

import {Link} from "react-router-dom";
import Logo from "../../Assets/logo.png";

const Header = () => {
	return (
		<>
			<header>
				<div className="container">
					<Link to="./">
						<img src={Logo} alt="Logo" />
					</Link>

					<div className="actions">
						<div className="linguagem"></div>

						<a href="#" className="btn">Login</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
