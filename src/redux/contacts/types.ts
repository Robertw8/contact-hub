interface Contact {
  id: string;
  name: string;
  number: string;
}

interface ContactsInitialState {
  contacts: Contact[];
  isLoading: boolean;
  error: string;
  filter: string;
}

export type { Contact, ContactsInitialState };
