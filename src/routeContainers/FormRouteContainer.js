import React from "react";
import { useParams } from "react-router-dom";
import GeneralForm from "../components/GeneralForm";

export default function FormRouteContainer() {
  const { formName } = useParams();

  return (
    <>
      {formName === "general" ? (
        <GeneralForm />
      ) : formName === "new" ? (
        <div>Create a new form at this page</div>
      ) : (
        <div>Form could not be found</div>
      )}
    </>
  );
}
