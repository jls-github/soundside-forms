import React from "react";
import FormWrapper from "./FormWrapper";

export default function GeneralGuestForm() {
  return (
    <FormWrapper>
      <form>
        <label for="referral-source">How did you hear about us?</label>
        <br />
        <textarea name="referral-source" />
      </form>
    </FormWrapper>
  );
}
