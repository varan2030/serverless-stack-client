import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";

export default function Routes({ appProps }) {
	return (
		<Switch>
			<AppliedRoute path="/" exact component={Home} appProps={appProps} />
			<AppliedRoute path="/login" exact component={Login} appProps={appProps} />
			<AppliedRoute
				path="/login/reset"
				exact
				component={ResetPassword}
				props={appProps}
			/>
			<AppliedRoute
				path="/settings"
				exact
				component={Settings}
				props={appProps}
			/>
			<AppliedRoute
				path="/settings/password"
				exact
				component={ChangePassword}
				props={appProps}
			/>
			<AppliedRoute 
				path="/settings/email"
				exact
				component={ChangeEmail}
				props={appProps}
			/>
			<AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
			<AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
			{/* Finally, catch all unmatched routes */}
			<Route component={NotFound} />
		</Switch>
	);
}
