import React from "react";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  name: {
    labelText: "Name",
    name: "name",
    type: "text",
    value: "",
  },
  prayer: {
    labelText: "How can we pray for you?",
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
