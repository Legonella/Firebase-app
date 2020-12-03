import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";


export default class App extends Component {
  componentDidMount() {
    const DB = firebase.database;
    console.log(DB);
    }
	render() {
		return (
			<div>
				<div className="login_block">
          <input type="text" placeholder= 'email' />
					<input type="password" placeholder = 'password' />
					<input type="submit" />
				</div>
			</div>
		);
	}
}
