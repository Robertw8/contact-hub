import React, { useEffect, useId } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { selectFilter } from "../../redux/filter/filterSlice";

export const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts).contacts;
	const id = useId();
	const filter = useSelector(selectFilter);

	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);

	const handleDeleteClick = (contactId) => {
		dispatch(deleteContact(contactId));
	};

	const filteredContacts = contacts.filter(
		(contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter),
	);

	return (
		<List>
			{filteredContacts &&
				filteredContacts.map((contact) => (
					<Item key={id}>
						{contact.name} ({contact.number})
						<IconButton aria-label='delete' size='medium' onClick={() => handleDeleteClick(contact.id)}>
							<DeleteIcon color='warning' />
						</IconButton>
					</Item>
				))}
		</List>
	);
};
