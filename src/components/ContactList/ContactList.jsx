import React, { useEffect, useId } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/operations";
import { useToken } from "../../hooks/useToken";
import { selectContacts } from "../../redux/contacts/contactsSlice";

export const ContactList = () => {
	const TOKEN = useToken().token;
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts).contacts;
	const id = useId();

	useEffect(() => {
		if (TOKEN) {
			dispatch(getContacts(TOKEN));
		}
	}, [dispatch, TOKEN]);

	const handleDeleteClick = (contactId) => {
		deleteContact(contactId);
	};

	return (
		<List>
			{contacts &&
				contacts.map((contact) => (
					<Item key={id}>
						{contact.name} ({contact.phone})
						<IconButton aria-label='delete' size='medium' onClick={() => handleDeleteClick(contact.id)}>
							<DeleteIcon color='warning' />
						</IconButton>
					</Item>
				))}
		</List>
	);
};
