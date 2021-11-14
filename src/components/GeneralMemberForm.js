import React from "react";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  gospel_conversations: {
    labelText: "How often do you read God's Word? 1-2x/week, 3-5x/week, 6-7x/week?",
    name: "gospel_conversations",
    type: "text",
    value: "",
  },
  prayer: {
    labelText: "Any prayer requests?",
    name: "prayer",
    type: "textarea",
    value: "",
  },
};

export default function GeneralMemberForm({setIsSubmitting}) {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    false,
    setIsSubmitting
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
