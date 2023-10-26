import React from "react";
import {
  StyledFormItem,
  StyledInput,
  StyledSubmitButton,
} from "../LoginForm/LoginForm.styled";
import { StyledContactForm } from "./ContactForm.styled";
import { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { successToast, errorToast } from "../../utils/toast";
import { useContacts } from "../../hooks/useContacts";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();

  const handleSubmit = async ({ name, number }) => {
    try {
      const isDuplicate = contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number.toLowerCase()
      );
      if (isDuplicate) {
        errorToast("This contact already exists");
        return;
      }

      await dispatch(addContact({ name, number }));
      successToast("Contact added!");
    } catch (error) {
      errorToast(
        "Field 'name' must only include letters and field 'phone' only numbers"
      );
    }
  };

  return (
    <>
      <StyledContactForm name="basic" onFinish={handleSubmit}>
        <StyledFormItem
          name="name"
          rules={[{ required: true, message: "Please enter name!" }]}
        >
          <StyledInput
            placeholder="Enter name..."
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledFormItem
          name="number"
          rules={[{ required: true, message: "Please enter phone number!" }]}
        >
          <StyledInput
            placeholder="Enter phone number..."
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledSubmitButton
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Add contact
        </StyledSubmitButton>
      </StyledContactForm>
      <Toaster />
    </>
  );
};
