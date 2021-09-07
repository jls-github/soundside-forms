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
  preferred_contact: {
    labelText: "Preferred Contact",
    name: "preferred_contact",
    type: "text",
    value: ""
  },
  pastor: {
    labelText: "I want to talk to a pastor",
    name: "pastor",
    type: "checkbox",
    value: false,
  },
  prayer: {
    labelText: "I have a prayer request",
    name: "prayer",
    type: "checkbox",
    value: false,
  },
  follow: {
    labelText: "I want to know more about following Christ",
    name: "follow",
    type: "checkbox",
    value: false,
  },
  explain: {
    labelText: "Would you like us to know anything else?",
    name: "explain",
    type: "textarea",
    value: "",
  }
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
