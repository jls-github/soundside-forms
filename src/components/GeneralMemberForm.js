import React from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
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

export default function GeneralMemberForm({setIsLoading}) {
  const { handleChange, handleSubmit, formData } = useForms(
    initialFormData,
    false,
    setIsLoading
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
