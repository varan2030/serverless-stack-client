import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";

export default function Routes({ appProps }) {
	return (
		<Switch>
			<AppliedRoute path="/" exact component={Home} appProps={appProps} />
			<AppliedRoute path="/login" exact component={Login} appProps={appProps} />
			<ResetPassword
				path="/login/reset"
				exact
				component={ResetPassword}
				props={appProps}
			/>
			<Settings
				path="/settings"
				exact
				component={Settings}
				props={appProps}
			/>
			<ChangePassword
				path="/settings/password"
				exact
				component={ChangePassword}
				props={appProps}
			/>
			{/* Finally, catch all unmatched routes */}
			<Route component={NotFound} />
		</Switch>
	);
}
