import React, { useState } from "react";
// import { StyledContactForm } from "./ContactForm.styled";
import {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledSubmitButton,
} from "../LoginForm/LoginForm.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useToken } from "../../hooks/useToken";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // const [contactData, setContactData] = useState({ name: "", phone: "" });

  const [errors, setErrors] = useState({});

  // const TOKEN = useToken();

  // const [contact] = addContact();

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
      console.log(isLoading);

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
      <StyledForm name="basic" onFinish={handleSubmit}>
        <StyledFormItem
          name="name"
          rules={[{ required: true, message: "Please enter email!" }]}
        >
          <StyledInput
            placeholder="Enter name..."
            // value={contactData.name}
            // onChange={({ target }) => setContactData({  name: target.value })}
            // error={!!errors.name}
            // helperText={errors.name}
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledFormItem name="number">
          <StyledInput
            placeholder="Enter phone number..."
            // value={contactData.phone}
            // onChange={({ target }) => setContactData({ ...contactData, phone: target.value })}
            // error={!!errors.phone}
            // helperText={errors.phone}
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledSubmitButton type="dashed" htmlType="submit" loading={isLoading}>
          Add contact
        </StyledSubmitButton>
      </StyledForm>
    </>
  );
};
