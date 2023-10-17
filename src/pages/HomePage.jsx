import React from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/auth/authSlice";

const HomePage = () => {
	const TOKEN = useSelector(selectToken);

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
