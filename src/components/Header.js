import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  background: green;
  height: 2rem;
  display: flex;
  place-content: center;
  place-items: center;
`;
export default function Header() {
  return (
    <HeaderDiv>
      <div>Soundside Forms</div>
    </HeaderDiv>
  );
}
