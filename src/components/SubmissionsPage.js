import React, { useEffect, useState } from "react";
import { SUBMISSIONS_URL } from "../constraints";

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState(null);

  useEffect(() => {
    fetch(SUBMISSIONS_URL)
      .then((res) => res.json())
      .then(json => {setSubmissions(json.submissions)});
  }, []);

  function populateSubmissions() {
    const submissionDates = Object.keys(submissions);
    return submissionDates.map((submissionDate) => {
      return <div>{submissions[submissionDate]}</div>;
    });
  }

  return <div>{submissions ? populateSubmissions() : "loading..."}</div>;
}
