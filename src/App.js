import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

function App(props) {
	const [isAuthenticated, userHasAuthenticated] = useState(false);
	const [isAuthenticating, setIsAuthenticating] = useState(true);

	useEffect(() => {
		onLoad();
		Auth.currentAuthenticatedUser().then((session) => {
			console.log(session);
			console.log(session.signInUserSession.accessToken.payload['cognito:groups'][0] === 'seller')
		});
	}, []);

	async function onLoad() {
		try {
			await Auth.currentSession();
			userHasAuthenticated(true);
		} catch (e) {
			if (e !== "No current user") {
				alert(e);
			}
		}

		setIsAuthenticating(false);
	}

	async function handleLogout() {
		await Auth.signOut();
		userHasAuthenticated(false);
		props.history.push("/login");
	}

	return (
		!isAuthenticating && (
			<div className="App container">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Scratch</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							{isAuthenticated ? (
								<>
									<NavItem onClick={handleLogout}>Logout</NavItem>
									<LinkContainer to="/billing">
										<NavItem>Pay</NavItem>
									</LinkContainer>
									<LinkContainer to="/settings">
										<NavItem>Settings</NavItem>
									</LinkContainer>
								</>
							) : (
								<>
									<LinkContainer to="/signup">
										<NavItem>Signup</NavItem>
									</LinkContainer>
									<LinkContainer to="/login">
										<NavItem>Login</NavItem>
									</LinkContainer>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
			</div>
		)
	);
}

export default withRouter(App);
