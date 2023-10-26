import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Wrapper } from "./ContactWrapper.styled";

export const ContactWrapper = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
