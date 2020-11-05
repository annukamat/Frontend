import * as React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Assets/Group 43.png";
import AppleStore from "../../Assets/Group 874.png";
import FB from "../../Assets/FB.png";
import Linkedin from "../../Assets/Linkedin.png";
import Twitter from "../../Assets/Twitter.png";
import Insta from "../../Assets/Insta.png";
import logo1 from "../../Assets/Group 870.png";
import "./navbar.css";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const changeNavBg = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavBg);
	return (
		<>
			<div className="nav-bg">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<nav
								className={
									navbar
										? "navbar bg active col-10 mx-auto"
										: "navbar bg col-10"
								}
							>
								<NavLink exact className="navbar-brand ml-4" to="/">
									<strong>
										<img
											className="logo"
											src={logo}
											width="30"
											height="30"
											alt="logo"
											loading="lazy"
										></img>{" "}
									</strong>
								</NavLink>

								<ul className="navbar-nav ml-auto mr-4 d-flex">
									<Link to="facebook.com" className="pt-1 pr-2">
										<img className="logo-fb nav-icon" src={FB} alt="fb"></img>
									</Link>

									<Link to="linkedIn.com" className="pt-1 pr-2">
										<img
											className="logo-linkedin nav-icon"
											src={Linkedin}
											alt="linkedin"
										></img>
									</Link>
									<Link to="linkedIn.com" className="pt-1 pr-2">
										<img
											className="logo-twitter nav-icon"
											src={Twitter}
											alt="twitter"
										></img>
									</Link>
									<Link to="linkedIn.com" className="pt-1 pr-2">
										<img
											className="logo-insta nav-icon"
											src={Insta}
											alt="insta"
										></img>
									</Link>
									<Link to="linkedIn.com" className="pt-1 pr-1">
										<img
											className="logo-logo1 nav-icon"
											src={logo1}
											alt="logo1"
										></img>
									</Link>
									<Link to="/">
										<img
											src={AppleStore}
											className="apple-store ml-2"
											alt="apple-store"
										></img>
									</Link>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
