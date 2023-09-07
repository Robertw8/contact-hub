import React, { Component } from "react";
import { Global } from "@emotion/react";
import { ContactList } from "../ContactList/ContactList";
import { ContactForm } from "../ContactForm/ContactForm";

import { globalStyles } from "../../styles/globalStyles";

export class App extends Component {
	state = {
		contacts: [],
		name: "",
	};

	render() {
		return (
			<>
				<Global styles={globalStyles} />
				<ContactForm />
				<ContactList />
			</>
		);
	}
}
