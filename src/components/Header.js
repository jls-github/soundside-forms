import React from "react";
import styled from "styled-components";
import Logo from "../images/soundside-logo-white.png";

const HeaderDiv = styled.header`
  background: #3a5174;
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  box-shadow: 1px 1px 5px black;
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
