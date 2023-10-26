import React from "react";
import { Item, DeleteButton, DeleteIcon } from "./ContactItem.styled";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactItem = ({ contact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <Item
      actions={[
        <DeleteButton
          key="delete"
          type="dashed"
          onClick={() => dispatch(deleteContact(contact.id))}
          htmlType="button"
          aria-label="delete contact"
          loading={isLoading}
        >
          <DeleteIcon />
        </DeleteButton>,
      ]}
    >
      <Card.Meta title={contact.name} description={contact.number} />
    </Item>
  );
};
