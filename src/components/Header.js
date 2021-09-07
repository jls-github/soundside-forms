import React from "react";
import styled from "styled-components";
import Logo from "../images/soundside-logo.png";

const HeaderDiv = styled.header`
  background: green;
  height: 2rem;
  padding: 0.5rem;
`;

const Img = styled.img`
  max-height: 90%;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Img src={Logo} alt="Soundside Church" />
    </HeaderDiv>
  );
}
