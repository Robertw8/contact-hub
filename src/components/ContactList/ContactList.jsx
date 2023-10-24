import React, { useEffect, useId } from "react";
import { List, Item } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/operations";
import { selectContacts, selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filter/filterSlice";
import { HashLoader } from "react-spinners";

export const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts).contacts;
	// const id = useId();
	const filter = useSelector(selectFilter);
	const isLoading = useSelector(selectIsLoading);

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
			{filteredContacts ? (
				isLoading ? (
					<HashLoader />
				) : (
					filteredContacts.map((contact) => (
						<Item key={contact.id}>
							{contact.name} ({contact.number})
							<button type='button' onClick={() => handleDeleteClick(contact.id)}>
								Delete
							</button>
						</Item>
					))
				)
			) : null}
		</List>
	);
};
