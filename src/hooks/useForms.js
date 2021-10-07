import { useState, useEffect } from "react";
import { FORMS_URL, SUBMISSIONS_URL } from "../constraints";
import { useHistory } from "react-router-dom";

export default function useForms(formId, setIsSubmitting) {
  const history = useHistory();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function fetchForm() {
      const res = await fetch(`${FORMS_URL}/${formId}`);
      const json = await res.json();
      setFormData(json.inputs.map((input) => ({ ...input, value: "" })));
    }
    fetchForm();
  }, [formId]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting?.(true);
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
    const values = formData.map((formInput) => formInput.value);
    return { csv_data: values.join(",SPLIT,"), formId: formId };
  }

  function handleChange(e) {
    const currentInput = formData.find((input) => input.name === e.target.name);
    if (currentInput.type === "checkbox") {
      currentInput.value = !currentInput.value;
    } else {
      currentInput.value = e.target.value;
    }
    const newFormData = formData.map((input) => {
      if (currentInput.name === formData.name) {
        return currentInput;
      }
      return { ...input };
    });
    setFormData(newFormData);
  }

  return { formData, setFormData, handleSubmit, handleChange };
}
