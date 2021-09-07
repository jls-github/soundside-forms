import React from "react";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  gospel_conversations: {
    labelText: "How many gospel conversations did you have this week?",
    name: "gospel_conversations",
    type: "text",
    value: "",
  },
  prayer: {
    labelText: "Do you have a prayer request this week?",
    name: "prayer",
    type: "textarea",
    value: ""
  }
};

export default function GeneralMemberForm() {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    false
  );

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          const formInput = formData[key];
          return (
            <FormInput
              labelText={formInput.labelText}
              name={formInput.name}
              onChange={handleChange}
              value={formInput.value}
              type={formInput.type}
              selectOptions={formInput.selectOptions}
              key={formInput.name}
            />
          );
        })}
        <SubmitButton />
      </form>
    </FormWrapper>
  );
}
