import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";

import { nanoid } from "@reduxjs/toolkit";

export const ContactList = () => {
	// const { contacts, isLoading } = useSelector(selectContacts);
	// const filter = useSelector(getFilter);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getContacts());
	// }, [dispatch]);

	// const handleDeleteClick = (id) => {
	// 	dispatch(deleteContact(id));
	// };
	const contacts = [{ id: nanoid(), name: "pablo", phone: "2323" }];

	// const filteredContacts = contacts.filter(
	// 	(contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.phone.toString().includes(filter),
	// );

	// if (isLoading) return <StyledLoader color='#36d7b7' />;

	return (
		<List>
			{contacts.map((contact) => (
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
