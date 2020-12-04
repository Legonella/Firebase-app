import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	componentDidMount() {
		const DB = firebase.database;
		console.log(DB);
	}

	handleChange = ({ target: { value, id } }) => {
		this.setState({ [id]: value });
	};

	render() {
		return (
			<div>
				<div className="login_block">
					<input
						type="text"
						id="email"
						placeholder="email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						id="password"
						placeholder="password"
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</div>
			</div>
		);
	}
}
