import React, { useEffect, useState } from "react";
import { List, AddButton, AddItem, StyledDrawer } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filter/filterSlice";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactItem } from "../ContactItem/ContactItem";
import { Loader } from "../Loader/Loader";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);

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
          <p>You have no contacts added yet. Add your first contact!</p>
        )}
        <AddItem>
          <AddButton
            type="primary"
            onClick={() => setAddDrawerOpen(true)}
            htmlType="button"
          >
            Add +
          </AddButton>
        </AddItem>
      </List>
      <StyledDrawer
        title="Add new contacts"
        width={300}
        onClose={() => setAddDrawerOpen(false)}
        open={addDrawerOpen}
      >
        <ContactForm />
      </StyledDrawer>
    </>
  );
};
