import React from "react";
import styled from "styled-components";

const GuestToggleHeader = styled.h4`
  text-align: center;
`;

const ToggleInputs = styled.div`
  text-align: center;
`;

const GuestToggleContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default function GuestToggle({ isGuest, setIsGuest }) {
  function handleChange(e) {
    setIsGuest(e.target.value);
  }

  return (
    <GuestToggleContainer>
      <GuestToggleHeader>Thank you for joining us today!</GuestToggleHeader>
      <ToggleInputs>
        <select value={isGuest} onChange={handleChange}>
          <option value="Please select an option">
            Please select an option
          </option>
          <option value={"guest"}>Guest</option>
          <option value={"member"}>Regular Attender</option>
        </select>
      </ToggleInputs>
    </GuestToggleContainer>
  );
}
