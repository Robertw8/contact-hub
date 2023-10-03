import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";
import { ContactsWrapper, Title } from "./App.styled";

export const App = () => {
	return (
		<div className='container'>
			<Global styles={globalStyles} />
			<Title>Phonebook</Title>
			<ContactForm />
			<ContactsWrapper>
				<Title>Contacts</Title>
				<Filter />
				<ContactList />
			</ContactsWrapper>
		</div>
	);
};
