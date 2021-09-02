import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

import { SUBMISSIONS_URL } from "../constraints";

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState(null);

  useEffect(() => {
    fetch(SUBMISSIONS_URL)
      .then((res) => res.json())
      .then((json) => {
        const data = cleanSubmissions(json);
        setSubmissions(data);
      });
  }, []);

  function cleanSubmissions(json) {
    const rawSubmissions = json.submissions;
    const submissionDates = Object.keys(rawSubmissions);
    submissionDates.forEach((submissionDate) => {
      rawSubmissions[submissionDate] = rawSubmissions[submissionDate].map(
        (submissionsString, idx) => {
          return [idx].concat(
            submissionsString.split(",").map((entry) => {
              return entry.trim();
            })
          );
        }
      );
    });
    return rawSubmissions;
  }

  useEffect(() => {
    console.log(submissions);
  }, [submissions]);

  function populateSubmissions() {
    const submissionDates = Object.keys(submissions);
    return submissionDates.map((submissionDate, idx) => {
      return (
        <CSVLink filename={`Soundside Submissions ${submissionDate}`} key={`submission-date-${idx}`} data={submissions[submissionDate]}>{submissionDate}</CSVLink>
      );
    });
  }

  return <div>{submissions ? populateSubmissions() : "loading..."}</div>;
}
