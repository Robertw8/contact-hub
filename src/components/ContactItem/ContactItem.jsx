import React from "react";
import { Item } from "./ContactItem.styled";
import { Button, Card, Popconfirm } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useContacts } from "../../hooks/useContacts";

export const ContactItem = ({ contact }) => {
  const { isLoading } = useContacts();
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
          <Button
            type="dashed"
            htmlType="button"
            aria-label="delete contact"
            loading={isLoading}
          >
            <DeleteTwoTone />
          </Button>
        </Popconfirm>,
      ]}
    >
      <Card.Meta title={contact.name} description={contact.number} />
    </Item>
  );
};
