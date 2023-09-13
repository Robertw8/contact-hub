import React, { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";
import { ContactsWrapper, Title } from "./App.styled";

import Notiflix from "notiflix";
import { nanoid } from "nanoid";

export class App extends Component {
	state = {
		contacts: [],
		filter: "",
	};

	componentDidMount() {
		const savedContacts = localStorage.getItem("contacts");
		this.setState({ contacts: JSON.parse(savedContacts) });
	}

	handleSubmit = (newContact) => {
		const isDuplicate = this.state.contacts.find(
			(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase() || contact.number === newContact.number,
		);

		if (isDuplicate) {
			Notiflix.Notify.info("This contact already exists ");
			return;
		}

		this.setState((prev) => ({
			contacts: [...prev.contacts, newContact],
		}));
		localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
	};

	handleDelete = (id) => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	};

	handleFilterChange = (e) => {
		const filter = e.target.value;
		this.setState({ filter });
	};

	render() {
		const { contacts, filter } = this.state;
		const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

		return (
			<div className='container'>
				<Global styles={globalStyles} />
				<Title>Phonebook</Title>
				<ContactForm onSubmit={this.handleSubmit} />
				<ContactsWrapper>
					<Title>Contacts</Title>
					<Filter filter={filter} onChange={this.handleFilterChange} />
					<ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
				</ContactsWrapper>
			</div>
		);
	}
}
