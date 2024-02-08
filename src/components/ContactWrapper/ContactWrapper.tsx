import { useState } from 'react';

import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Wrapper } from './ContactWrapper.styled';
import { ContactDrawer } from '../ContactDrawer';

const ContactWrapper: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <Filter />
      <ContactList onAddClick={() => setDrawerOpen(true)} />
      <ContactDrawer
        title="Add new contacts"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </Wrapper>
  );
};

export default ContactWrapper;
