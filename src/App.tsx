import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</>
		);
	}
}

export default App;
