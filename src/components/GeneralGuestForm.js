import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { FORMS_URL } from "../constraints";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  guest_name: {
    labelText: "Name",
    name: "guest_name",
    type: "text",
    value: "",
  },
  guest_email: {
    labelText: "Email",
    name: "guest_email",
    type: "email",
    value: "",
  },
  preferred_contact: {
    labelText: "Preferred Contact",
    name: "preferred_contact",
    type: "text",
    value: "",
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
    labelText: "Any prayer requests?",
    name: "explain",
    type: "textarea",
    value: "",
  },
};

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GeneralGuestForm({ formId, setIsSubmitting }) {
  const { handleChange, handleSubmit, formData } = useForms(formId, setIsSubmitting);

  if (!formData)
    return (
      <SpinnerWrapper>
        <ClipLoader color="#3a5174" loading={!formData} size={150} />
      </SpinnerWrapper>
    );

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {formData.map((formInput) => {
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
