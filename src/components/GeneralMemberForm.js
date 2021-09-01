import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  gospel_conversations: "",
};

export default function GeneralMemberForm() {
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
        <label for="gospel_conversations">
          How many gospel conversations did you have this week?
        </label>
        <br />
        <input
          type="number"
          name="gospel_conversations"
          onChange={handleChange}
        />
        <br />
        <SubmitButton />
      </form>
    </FormWrapper>
  );
}
