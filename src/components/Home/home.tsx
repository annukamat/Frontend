import * as React from "react";
import { Component } from "react";
import TopPattern from "../../Assets/Group 64.png";
import Pattern from "../../Assets/Pattern.png";
import Group from "../../Assets/Group 856.png";
import "./home.css";

class Home extends React.Component {
	render() {
		return (
			<>
				<section id="header" className="d-flex align-items-center">
					<img className="top-pattern" src={TopPattern} alt="mobile-gif" />

					<div className="container-fluid ">
						<div className="row">
							<div
								className="col-10 mx-auto rec"
								style={{
									backgroundImage: `url(${Pattern})`,
									backgroundRepeat: "no-repeat",
									backgroundPositionX: "100%",
									backgroundSize: "61%",
								}}
							>
								<div className="row">
									<div className="col-md-5 col-lg-5 m-auto d-flex justify-content-center flex-column left-grp">
										<h1>
											Not Your Typical
											<br /> Investing App
										</h1>
										<h3 className="mt-3">Invest with Intention</h3>
										<p className="">
											Alinea makes responsible investing fun,
											<br /> easy, and social.
										</p>
										<div>
											<form>
												<div className="d-flex align-items-center">
													<input
														className="btn-start"
														type="submit"
														id="submit"
														value="Start Your Journey"
													></input>
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6 col-lg-6 header-img rt-grp">
										<img
											className="img-fluid mobile-gif"
											src={Group}
											alt="mobile-gif"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
				<h1>hi</h1>
			</>
		);
	}
}

export default Home;
