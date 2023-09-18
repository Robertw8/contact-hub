import React, { useState, useEffect } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";
import { ContactsWrapper, Title } from "./App.styled";

import Notiflix from "notiflix";

export const App = () => {
	const [contacts, setContacts] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		const savedContacts = localStorage.getItem("contacts");
		setContacts(savedContacts ? JSON.parse(savedContacts) : []);
	}, []);

	const handleSubmit = (newContact) => {
		const isDuplicate = contacts.find(
			(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase() || contact.number === newContact.number,
		);

		if (isDuplicate) {
			Notiflix.Notify.info("This contact already exists ");
			return;
		}

		setContacts((prevContacts) => [...prevContacts, newContact]);
		localStorage.setItem("contacts", JSON.stringify(contacts));
	};

	const handleDelete = (id) => {
		setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
	};

	const handleFilterChange = (e) => {
		const filter = e.target.value;
		setFilter(filter);
	};

	const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

	return (
		<div className='container'>
			<Global styles={globalStyles} />
			<Title>Phonebook</Title>
			<ContactForm onSubmit={handleSubmit} />
			<ContactsWrapper>
				<Title>Contacts</Title>
				<Filter filter={filter} onChange={handleFilterChange} />
				<ContactList contacts={filteredContacts} onDelete={handleDelete} />
			</ContactsWrapper>
		</div>
	);
};
