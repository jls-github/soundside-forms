import { useState } from "react";
import { FORMS_URL } from "../constraints";

export default function useForms(initialFormData) {
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(_formDataToCSV())
    });
  }
  
  function _formDataToCSV() {
    const values = Object.values(formData)
    return values.join(", ")
  }

  function handleChange(e) {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  return { formData, setFormData, handleSubmit, handleChange };
}
