import React from "react";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  referral_source: {
    labelText: "How did you hear about us?",
    name: "referral_source",
    type: "text",
    value: "",
  },
  tithe: {
    labelText: "Did you tithe today?",
    name: "tithe",
    type: "select",
    value: "Yes",
    selectOptions: ["Yes", "I am a bad person"],
  },
  sermon_length: {
    labelText: "How long was Aaron's sermon today?",
    name: "sermon_length",
    type: "number",
    value: 0,
  },
};

export default function GeneralGuestForm() {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    true
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
