import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

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
      <label htmlFor={name}>{labelText}</label>
      <br />
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
