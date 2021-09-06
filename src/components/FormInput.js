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
`

export default function FormInput({
  labelText,
  name,
  onChange,
  value,
  type,
  selectOptions,
}) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      {type === "textarea" ? (
        <TextArea name={name} value={value} onChange={onChange} />
      ) : type === "select" ? (
        <Select name={name} value={value} onChange={onChange}>
          {selectOptions.map((optionText) => (
            <option>{optionText}</option>
          ))}
        </Select>
      ) : (
        <Input name={name} value={value} onChange={onChange} type={type} />
      )}
      <br />
    </>
  );
}
