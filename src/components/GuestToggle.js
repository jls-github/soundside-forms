import React from "react";
import styled from "styled-components";

export default function GuestToggle({ isGuest, setIsGuest }) {
  const GuestToggleHeader = styled.h3`
    text-align: center;
  `;

  const ToggleInputs = styled.div`
    text-align: center;
  `

  const GuestToggleContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
  `

  return (
    <GuestToggleContainer>
      <GuestToggleHeader>Are you a guest with us today?</GuestToggleHeader>
      <ToggleInputs>
        <input
          checked={isGuest === true}
          onClick={() => setIsGuest(true)}
          type="radio"
          id={true}
          name="is-guest"
          value="Guest"
        />
        <label for="is-guest">Guest</label>
        <input
          checked={isGuest === false}
          onClick={() => setIsGuest(false)}
          type="radio"
          id={false}
          name="is-guest"
          value="Member"
        />
        <label for="is-guest">Member</label>
      </ToggleInputs>
    </GuestToggleContainer>
  );
}
