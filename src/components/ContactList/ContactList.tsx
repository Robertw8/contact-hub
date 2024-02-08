import { useEffect } from 'react';
import { useContacts } from '../../hooks';
import { useDispatch } from 'react-redux';

import { List, AddButton, AddItem } from './ContactList.styled';
import { ContactItem } from '../ContactItem';
import { Loader } from '../Loader';

import { getContacts } from '../../redux/contacts';
import type { AppDispatch } from '../../redux';

interface ContactListProps {
  onAddClick: () => void;
}

const ContactList: React.FC<ContactListProps> = ({ onAddClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { contacts, isLoading, filter } = useContacts();

  useEffect(() => {
    dispatch(getContacts({}));
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

export default ContactList;
