import { useState } from "react";
import { SUBMISSIONS_URL } from "../constraints";

export default function useForms(initialFormData) {
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(_formDataToCSV())
    fetch(SUBMISSIONS_URL, {
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
    return {"csv_data": values.join(", ")}
  }

  function handleChange(e) {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  return { formData, setFormData, handleSubmit, handleChange };
}
