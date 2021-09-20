import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import GeneralGuestForm from "./GeneralGuestForm";
import GeneralMemberForm from "./GeneralMemberForm";
import GuestToggle from "./GuestToggle";

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GeneralForm() {
  const [isGuest, setIsGuest] = useState("Please select an option");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div>
      {isSubmitting ? (
        <SpinnerWrapper>
          <ClipLoader color="#3a5174" loading={isSubmitting} size={150} />
        </SpinnerWrapper>
      ) : (
        <>
          <GuestToggle isGuest={isGuest} setIsGuest={setIsGuest} />
          {isGuest === "guest" ? (
            <GeneralGuestForm setIsSubmitting={setIsSubmitting} />
          ) : isGuest === "member" ? (
            <GeneralMemberForm setIsSubmitting={setIsSubmitting} />
          ) : null}
        </>
      )}
    </div>
  );
}
