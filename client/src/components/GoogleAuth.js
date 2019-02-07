import React from "react";
import google_secret from "../resource/googleOauth.json";

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId: google_secret.google,
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>I dont now if we are sigend in</div>;
		} else if (this.state.isSignedIn) {
			return <div>I am signed in!</div>;
		} else {
			return <div>I am not signed in</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
