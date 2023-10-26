import React from "react";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Wrapper } from "./ContactWrapper.styled";

export const ContactWrapper = () => {
  return (
    <Wrapper>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
