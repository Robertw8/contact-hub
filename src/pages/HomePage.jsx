import React from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { useAuth } from "../hooks/useAuth";
import { Welcome } from "../components/Welcome/Welcome";

const HomePage = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? (
		<div>
			<ContactForm />
			<div>
				<div>Contacts</div>
				<Filter />
				<ContactList />
			</div>
		</div>
	) : (
		<Welcome />
	);
};

export default HomePage;
