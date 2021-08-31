import React from "react";
import styled from "styled-components";

export default function Header() {
  const Header = styled.header`
    background: green;
    height: 2rem;
    display: flex;
    place-content: center;
    place-items: center;
  `;

  return (
    <Header>
      <div>Soundside Forms</div>
    </Header>
  );
}
