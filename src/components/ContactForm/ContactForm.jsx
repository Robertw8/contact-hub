import React, { useState } from "react";
import {
  StyledFormItem,
  StyledInput,
  StyledSubmitButton,
} from "../LoginForm/LoginForm.styled";
import { StyledContactForm } from "./ContactForm.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [errors, setErrors] = useState({});

  const handleSubmit = async ({ name, number }) => {
    try {
      // await schema.validate({ name, phone }, { abortEarly: false });
      // const isDuplicate = contacts.find(
      // 	(contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone.toLowerCase(),
      // );
      // if (isDuplicate) {
      // 	Notiflix.Notify.info("This contact already exists");
      // 	return;
      // }
      // setName("");
      // setPhone("");
      // setErrors({});

      await dispatch(addContact({ name, number }));
    } catch (error) {
      // const validationErrors = {};
      // error.inner.forEach((e) => {
      // 	validationErrors[e.path] = e.message;
      // });
      // setErrors(validationErrors);
      console.warn(error);
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
            // error={!!errors.name}
            // helperText={errors.name}
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledFormItem
          name="number"
          rules={[{ required: true, message: "Please enter phone number!" }]}
        >
          <StyledInput
            placeholder="Enter phone number..."
            // error={!!errors.phone}
            // helperText={errors.phone}
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
    </>
  );
};
