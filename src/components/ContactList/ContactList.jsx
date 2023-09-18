import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";
import { nanoid } from "nanoid";

export const ContactList = ({ contacts, onDelete }) => {
	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	return (
		<List>
			{contacts.map((contact) => (
				<Item key={nanoid()}>
					{contact.name} ({contact.number})
					<IconButton aria-label='delete' size='medium' onClick={() => onDelete(contact.id)}>
						<DeleteIcon color='warning' />
					</IconButton>
				</Item>
			))}
		</List>
	);
};
