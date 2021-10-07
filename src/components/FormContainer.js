import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import useForms from "../hooks/useForms";
import FormInput from "./FormInput";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FormContainer({ formId, setIsSubmitting }) {
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
