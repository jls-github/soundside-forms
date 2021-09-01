import React, { useState } from "react";
import GeneralGuestForm from "./GeneralGuestForm";
import GeneralMemberForm from "./GeneralMemberForm";
import GuestToggle from "./GuestToggle";

export default function GeneralForm() {
  const [isGuest, setIsGuest] = useState(null);

  return (
    <div>
      <GuestToggle isGuest={isGuest} setIsGuest={setIsGuest} />
      {isGuest !== null ? (
        isGuest ? (
          <GeneralGuestForm />
        ) : (
          <GeneralMemberForm />
        )
      ) : null}
    </div>
  );
}
