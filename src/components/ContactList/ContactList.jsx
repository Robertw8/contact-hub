import React, { useEffect, useState } from "react";
import {
  List,
  Item,
  DeleteButton,
  DeleteIcon,
  AddButton,
  AddItem,
} from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filter/filterSlice";
import { Card, Button, Skeleton } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ContactModal } from "../ContactModal/ContactModal";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <Item
            key={contact.id}
            actions={[
              <DeleteButton
                key="delete"
                type="dashed"
                onClick={() => handleDeleteClick(contact.id)}
                htmlType="button"
                aria-label="delete contact"
                loading={isLoading}
              >
                <DeleteIcon />
              </DeleteButton>,
              <Button
                key="edit"
                type="dashed"
                htmlType="button"
                aria-label="edit contact"
                loading={isLoading}
              >
                <EditOutlined />
              </Button>,
            ]}
          >
            <Card.Meta title={contact.name} description={contact.number} />
          </Item>
        ))}
        <AddItem>
          <AddButton type="primary" onClick={() => setIsModalOpen(true)}>
            Add +
          </AddButton>
        </AddItem>
      </List>
      <ContactModal isOpen={isModalOpen} />
    </>
  );
};
