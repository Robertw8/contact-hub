import React, { useState } from "react";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Wrapper } from "./ContactWrapper.styled";
import { ContactDrawer } from "../ContactDrawer/ContactDrawer";

export const ContactWrapper = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <Filter />
      <ContactList onAddClick={() => setDrawerOpen(true)} />
      <ContactDrawer
        title="Add new contacts"
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </Wrapper>
  );
};
