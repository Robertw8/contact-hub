import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

const UpdateFormWrapper = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition-duration: 150ms;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ isOpen }) => (isOpen ? 100 : -1)};
  overflow-y: auto;

  width: 100%;
  height: 100%;
  padding: 50px 20px 20px 20px;

  &::-webkit-scrollbar {
    max-width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 15px;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #09bc8a66;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #09bc8a;
  }
`;

const StyledUpdateForm = styled(Form)`
  max-width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const StyledFormItem = styled(FormItem)``;

const StyledInput = styled(Input)``;

const StyledSubmitButton = styled(Button)`
  align-self: flex-end;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10%;
  right: 5%;
`;

export {
  UpdateFormWrapper,
  StyledUpdateForm,
  StyledFormItem,
  StyledInput,
  StyledSubmitButton,
  CloseButton,
};
