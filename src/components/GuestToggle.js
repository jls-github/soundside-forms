import React from "react";
import styled from "styled-components";

const GuestToggleHeader = styled.h4`
  text-align: center;
  margin-bottom: 0;
`;

const ToggleInputs = styled.div`
  text-align: center;
`;

const GuestToggleContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default function GuestToggle({ isGuest, setIsGuest }) {
  return (
    <GuestToggleContainer>
      <GuestToggleHeader>Are you a guest with us today?</GuestToggleHeader>
      <ToggleInputs>
        <input
          checked={isGuest === true}
          onChange={() => setIsGuest(true)}
          type="radio"
          id={true}
          name="is-guest"
          value="Guest"
        />
        <label onClick={() => setIsGuest(true)} htmlFor="is-guest">
          Guest
        </label>
        <br />
        <input
          checked={isGuest === false}
          onChange={() => setIsGuest(false)}
          type="radio"
          id={false}
          name="is-guest"
          value="Member"
        />
        <label onClick={() => setIsGuest(false)} htmlFor="is-guest">
          Regular Attender
        </label>
      </ToggleInputs>
    </GuestToggleContainer>
  );
}
