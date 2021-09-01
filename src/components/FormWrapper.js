import React from "react";
import styled from "styled-components";

const FormWrapperDiv = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default function FormWrapper({ children }) {
  return <FormWrapperDiv>{children}</FormWrapperDiv>;
}
