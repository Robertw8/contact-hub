import React from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";

const HomePage = () => {
	return (
		<div className='container'>
			<ContactForm />
			<div>
				<div>Contacts</div>
				<Filter />
				<ContactList />
			</div>
		</div>
	);
};

export default HomePage;
