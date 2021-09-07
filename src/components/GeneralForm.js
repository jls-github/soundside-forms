import React, { useState } from "react";
import GeneralGuestForm from "./GeneralGuestForm";
import GeneralMemberForm from "./GeneralMemberForm";
import GuestToggle from "./GuestToggle";

export default function GeneralForm() {
  const [isGuest, setIsGuest] = useState("Please select an option");

  return (
    <div>
      <GuestToggle
        isGuest={isGuest}
        setIsGuest={setIsGuest}
      />
      {isGuest === "guest" ? (
        <GeneralGuestForm />
      ) : isGuest === "member" ? (
        <GeneralMemberForm />
      ) : null}
    </div>
  );
}
