import React from "react";
import useForms from "../hooks/useForms";
import FormWrapper from "./FormWrapper";
import SubmitButton from "./SubmitButton";

const initialFormData = {
  referral_source: "",
  tithe: "Yes",
  sermon_length: ""
};

export default function GeneralGuestForm() {
  const { handleChange, handleSubmit, formData } = useForms(initialFormData, true);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label for="referral_source">How did you hear about us?</label>
        <br />
        <br />
        <textarea
          value={formData["referral_source"]}
          onChange={handleChange}
          name="referral_source"
        />
        <br />
        <br />
        <label for="tithe">Did you tithe today?</label>
        <br />
        <br />
        <select name="tithe" value={formData["tithe"]} onChange={handleChange}>
          <option>Yes</option>
          <option>I'm a bad person</option>
        </select>
        <br />
        <br />
        <label for="sermon_length">How many minutes long was Aaron's sermon today?</label>
        <br />
        <br />
        <input type="number" name="sermon_length" value={formData["sermon_length"]} onChange={handleChange}/>

        <SubmitButton />
      </form>
    </FormWrapper>
  );
}
