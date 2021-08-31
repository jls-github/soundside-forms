import React, { useState } from "react";
import GuestToggle from "./GuestToggle";

export default function GeneralForm() {
  const [isGuest, setIsGuest] = useState(null);

  return (
    <div>
      <GuestToggle isGuest={isGuest} setIsGuest={setIsGuest} />
      {isGuest !== null ? (
        isGuest ? (
          <div>Guest Form</div>
        ) : (
          <div>Member Form</div>
        )
      ) : null}
    </div>
  );
}
