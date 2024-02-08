import axios from 'axios';
import { operationWrapper } from '../../utils';
import { createAction } from '@reduxjs/toolkit';

const getContacts = operationWrapper('contacts/getContacts', async () => {
  const response = await axios.get('contacts');

  return response.data;
});

interface AddContactArgs {
  name: string;
  number: string;
}

const addContact = operationWrapper(
  'contacts/addContact',
  async ({ name, number }: AddContactArgs) => {
    const response = await axios.post('contacts', { name, number });

    return response.data;
  }
);

const deleteContact = operationWrapper(
  'contacts/deleteContact',
  async (contactId: string) => {
    const response = await axios.delete(`contacts/${contactId}`);

    return response.data;
  }
);

interface UpdateContactArgs {
  contactId: string;
  name: string;
  number: string;
}

const updateContact = operationWrapper(
  'contacts/updateContact',
  async ({ contactId, name, number }: UpdateContactArgs) => {
    const response = await axios.patch(`contacts/${contactId}`, {
      name,
      number,
    });

    return response.data;
  }
);

const setFilter = createAction<string>('contacts/setFilter');

export { getContacts, addContact, deleteContact, updateContact, setFilter };
