import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Drawer } from "antd";

export const ContactDrawer = ({ isOpen, title, onClose }) => {
  return (
    <Drawer title={title} width={300} onClose={onClose} open={isOpen}>
      <ContactForm />
    </Drawer>
  );
};
