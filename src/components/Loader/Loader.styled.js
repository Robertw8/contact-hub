import styled from "@emotion/styled";
import { Spin } from "antd";

export const StyledLoader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
