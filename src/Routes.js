import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Billing from "./containers/Billing";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
	return (
		<Switch>
			<AuthenticatedRoute path="/" exact component={Home} appProps={appProps} />
			<UnauthenticatedRoute
				path="/login"
				exact
				component={Login}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/login/reset"
				exact
				component={ResetPassword}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/settings"
				exact
				component={Settings}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/settings/password"
				exact
				component={ChangePassword}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/settings/email"
				exact
				component={ChangeEmail}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/billing"
				exact
				component={Billing}
				appProps={appProps}
			/>
			<UnauthenticatedRoute
				path="/signup"
				exact
				component={Signup}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/notes/new"
				exact
				component={NewNote}
				appProps={appProps}
			/>
			<AuthenticatedRoute
				path="/notes/:id"
				exact
				component={Notes}
				appProps={appProps}
			/>

			{/* Finally, catch all unmatched routes */}
			<Route component={NotFound} />
		</Switch>
	);
}
