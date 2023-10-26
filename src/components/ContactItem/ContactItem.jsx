import React from "react";
import { Item, DeleteButton, DeleteIcon } from "./ContactItem.styled";
import { Card, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactItem = ({ contact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <Item
      actions={[
        <Popconfirm
          key="delete"
          title="Delete contact"
          description="Are you sure to delete this contact?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => dispatch(deleteContact(contact.id))}
        >
          <DeleteButton
            type="dashed"
            htmlType="button"
            aria-label="delete contact"
            loading={isLoading}
          >
            <DeleteIcon />
          </DeleteButton>
          ,
        </Popconfirm>,
      ]}
    >
      <Card.Meta title={contact.name} description={contact.number} />
    </Item>
  );
};
