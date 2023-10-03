import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/contactsSlice";
import { getFilter } from "../../redux/filter/filterSlice";

export const ContactList = () => {
	const persistContacts = Object.values(useSelector(getContacts));
	const contacts = persistContacts.slice(0, persistContacts.length - 1);
	const persistFilter = Object.values(useSelector(getFilter));
	const filter = persistFilter.slice(0, persistFilter.length - 1).join("");
	const dispatch = useDispatch();

	const handleDeleteClick = (id) => {
		dispatch(deleteContact(id));
	};

	const filteredContacts = contacts.filter(
		(contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.phone.toString().includes(filter),
	);

	return (
		<List>
			{filteredContacts.map((contact) => (
				<Item key={contact.id}>
					{contact.name} ({contact.phone})
					<IconButton aria-label='delete' size='medium' onClick={() => handleDeleteClick(contact.id)}>
						<DeleteIcon color='warning' />
					</IconButton>
				</Item>
			))}
		</List>
	);
};
