import React, { useEffect } from "react";
import { List, AddButton, AddItem } from "./ContactList.styled";
import { ContactItem } from "../ContactItem/ContactItem";
import { Loader } from "../Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/operations";
import { selectFilter } from "../../redux/filter/filterSlice";
import { useContacts } from "../../hooks/useContacts";

export const ContactList = ({ onAddClick }) => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      <List>
        {isLoading ? (
          <Loader />
        ) : filteredContacts.length ? (
          filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No contacts found.</p>
        )}
        <AddItem>
          <AddButton type="primary" onClick={onAddClick} htmlType="button">
            Add +
          </AddButton>
        </AddItem>
      </List>
    </>
  );
};
