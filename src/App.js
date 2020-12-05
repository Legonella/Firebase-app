import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			hasAccount: false,
			name: "",
		};
	}
	componentDidMount() {
		const db = firebase.database;
		const name = db.ref("name");
		name.on("value", (elem) => {
			this.setState({ name: elem.val() });
		});
	}

	handleChange = ({ target: { value, id } }) => {
		this.setState({ [id]: value });
	};

	createAccount = () => {
		const { email, password } = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => console.log(error));

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ hasAccount: true });
			})
			.catch((error) => console.log(error));
	};

	render() {
		const { hasAccount } = this.state;
		return (
			<div>
				{hasAccount ? (
					<div>Hello</div>
				) : (
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
						<input type="submit" onClick={this.createAccount} />
					</div>
				)}
			</div>
		);
	}
}
