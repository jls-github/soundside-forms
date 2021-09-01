import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  referral_source: "",
};

export default function GeneralGuestForm() {
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

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
