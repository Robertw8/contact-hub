import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/contactsSlice";
import { getFilter } from "../../redux/filter/filterSlice";

export const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
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
