import React from "react";
import useForms from "../hooks/useForms";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  referral_source: "",
};

export default function GeneralGuestForm() {
  const { handleChange, handleSubmit, formData } = useForms(initialFormData);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label for="referral_source">How did you hear about us?</label>
        <br />
        <textarea
          value={formData["referral_source"]}
          onChange={handleChange}
          name="referral_source"
        />
        <br />
        <SubmitButton />
      </form>
    </FormWrapper>
  );
}
