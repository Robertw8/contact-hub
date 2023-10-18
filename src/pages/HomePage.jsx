import React from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { useToken } from "../hooks/useToken";

const HomePage = () => {
	const TOKEN = useToken();

	return TOKEN ? (
		<div className='container'>
			<ContactForm />
			<div>
				<div>Contacts</div>
				<Filter />
				<ContactList />
			</div>
		</div>
	) : (
		<div>WELCOME PAGE</div>
	);
};

export default HomePage;
