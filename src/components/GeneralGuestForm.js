import React from "react";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  guest_name: {
    labelText: "Name",
    name: "guest_name",
    type: "text",
    value: ""
  },
  guest_email: {
    labelText: "Email",
    name: "guest_email",
    type: "email",
    value: ""
  },
  follow: {
    labelText: "I want to learn more about following Jesus",
    name: "follow",
    type: "checkbox",
    value: false,
  },
  pastors: {
    labelText: "I want to speak to a pastor",
    name: "pastors",
    type: "checkbox",
    value: false,
  },
  church: {
    labelText: "I want to learn more about Soundside Church",
    name: "church",
    type: "checkbox",
    value: false,
  },
  prayer: {
    labelText: "How can we pray for you?",
    name: "prayer",
    type: "textarea",
    value: "",
  }
};

export default function GeneralGuestForm({setIsSubmitting}) {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    true,
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
