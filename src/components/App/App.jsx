import React, { useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";
import { ContactsWrapper, Title } from "./App.styled";

import Notiflix from "notiflix";

export const App = () => {
	const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) || []);
	const [filter, setFilter] = useState("");

	const submit = (newContact) => {
		const isDuplicate = contacts.find(
			(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase() || contact.number === newContact.number,
		);

		if (isDuplicate) {
			Notiflix.Notify.info("This contact already exists ");
			return;
		}

		setContacts((prevContacts) => [...prevContacts, newContact]);
	};

	const handleDelete = (id) => {
		setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
	};

	const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

	return (
		<div className='container'>
			<Global styles={globalStyles} />
			<Title>Phonebook</Title>
			<ContactForm onSubmit={submit} />
			<ContactsWrapper>
				<Title>Contacts</Title>
				<Filter filter={filter} onChange={(e) => setFilter(e.target.value)} />
				<ContactList contacts={filteredContacts} onDelete={handleDelete} />
			</ContactsWrapper>
		</div>
	);
};
