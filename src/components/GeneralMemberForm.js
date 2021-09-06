import React from "react";
import useForms from "../hooks/useForms";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  gospel_conversations: "",
};

export default function GeneralMemberForm() {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    false
  );

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label for="gospel_conversations">
          How many gospel conversations did you have this week?
        </label>
        <br />
        <br />
        <input
          type="number"
          name="gospel_conversations"
          onChange={handleChange}
          value={formData["gospel_conversations"]}
        />
        <br />
        <SubmitButton />
      </form>
    </FormWrapper>
  );
}
