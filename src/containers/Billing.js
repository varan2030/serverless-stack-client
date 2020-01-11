import React, { useState } from "react";
import { API } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Billing.css";

export default function Billing(props) {
	console.log(props);
	const [isLoading, setIsLoading] = useState(false);

	function billUser(details) {
		return API.post("notes", "/billing", {
			body: details
		});
	}

	async function handleFormSubmit(storage, { token, error }) {
		if (error) {
			alert(error);
			return;
		}

		setIsLoading(true);

		try {
			await billUser({
				storage,
				source: token.id
			});

			alert("Your card has been charged successfully!");
			props.history.push("/");
		} catch (e) {
			alert(e);
			setIsLoading(false);
		}
	}

	return (
		<div className="Billings">
			<StripeProvider apiKey={config.STRIPE_KEY}>
				<Elements>
					<BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
				</Elements>
			</StripeProvider>
		</div>
	);
}
