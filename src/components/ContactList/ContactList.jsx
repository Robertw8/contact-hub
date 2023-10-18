import React, { useEffect, useId } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";
import { useDispatch } from "react-redux";
import { useGetContactsQuery } from "../../redux/contacts/operations";
import { useToken } from "../../hooks/useToken";

export const ContactList = () => {
	const TOKEN = useToken();

	const dispatch = useDispatch();
	const contacts = useGetContactsQuery(TOKEN).data;

	useEffect(() => {}, []);

	return (
		<List>
			{contacts &&
				contacts.map((contact) => (
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
