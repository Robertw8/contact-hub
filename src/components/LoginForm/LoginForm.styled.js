import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const StyledForm = styled(Form)`
  padding: 20% 0;
  max-width: 40%;
  margin: 0 auto;
`;

const StyledFormItem = styled(Form.Item)`
  label {
    font-family: "Roboto", sans-serif;
    color: #fff !important;

    &::before {
      color: #09bc8a !important;
    }
  }
`;

const StyledInput = styled(Input)`
  font-family: "Roboto", sans-serif;
  color: #22223b;
  font-size: 18px;
`;

const StyledPasswordInput = styled(Input.Password)`
  font-family: "Roboto", sans-serif;
  color: #22223b;
  font-size: 18px;
`;

const StyledSubmitButton = styled(Button)`
  display: block;
  margin-left: auto;
  width: 150px;
  height: 40px;

  font-size: 18px;
`;

const FormText = styled.div`
  color: #fff;
  margin-top: -20px;
`;

const FormLink = styled(Link)`
  color: #09bc8a;
  margin-left: 5px;
`;

export {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledPasswordInput,
  StyledSubmitButton,
  FormText,
  FormLink,
};
