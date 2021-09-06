import { useState } from "react";
import { SUBMISSIONS_URL } from "../constraints";
import { useHistory } from "react-router-dom";

export default function useForms(initialFormData, guest) {
  const history = useHistory();

  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(_formDataToCSV());
    fetch(SUBMISSIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(_formDataToCSV()),
    }).then((res) => {
      if (res.ok) {
        history.push("/submission-success");
      } else {
        history.push("/submission-failure");
      }
    });
  }

  function _formDataToCSV() {
    const values = [];
    for (const input in formData) {
      values.push(formData[input].value);
    }
    // guest form is hard coded to 1 for now
    return { csv_data: values.join(", "), form_id: guest ? 1 : 2 };
  }

  function handleChange(e) {
    const currentInput = { ...formData[e.target.name] };
    currentInput.value = e.target.value;
    const newFormData = { ...formData, [e.target.name]: currentInput };
    setFormData(newFormData);
  }

  return { formData, setFormData, handleSubmit, handleChange };
}
