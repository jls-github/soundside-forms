import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-bottom: 1rem;
`;

const Select = styled.select`
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
`;

export default function FormInput({
  labelText,
  name,
  onChange,
  value,
  type,
  selectOptions,
}) {
  if (type === "checkbox") {
    return (
      <>
        <Input name={name} checked={value} onChange={onChange} type={type} />
        <label htmlFor={name}>{labelText}</label>
        <br />
      </>
    );
  }

  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      {type === "textarea" ? (
        <TextArea name={name} value={value} onChange={onChange} />
      ) : type === "select" ? (
        <Select name={name} value={value} onChange={onChange}>
          {selectOptions.map((optionText) => (
            <option key={optionText}>{optionText}</option>
          ))}
        </Select>
      ) : type === "checkbox" ? null : (
        <Input name={name} value={value} onChange={onChange} type={type} />
      )}
      <br />
    </>
  );
}
