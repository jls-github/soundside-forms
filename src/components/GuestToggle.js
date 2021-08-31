import React from "react";

export default function GuestToggle({ isGuest, setIsGuest }) {
  return (
    <div>
      <input
        checked={isGuest === true}
        onClick={() => setIsGuest(true)}
        type="radio"
        id={true}
        name="is-guest"
        value="Guest"
      />
      <label for="is-guest">Guest</label>
      <br />
      <input
        checked={isGuest === false}
        onClick={() => setIsGuest(false)}
        type="radio"
        id={false}
        name="is-guest"
        value="Member"
      />
      <label for="is-guest">Member</label>
      <br />
    </div>
  );
}
