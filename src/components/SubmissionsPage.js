import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { CSVLink } from "react-csv";
import styled from "styled-components";

const SubmissionsHeader = styled.h2`
  text-align: center;
`;

const SubmissionsWrapper = styled.div`
  margin: 1rem;
`;

export default function SubmissionsPage() {
  const location = useLocation();

  const submissions = location?.state?.submissions

  function populateSubmissions() {
    const submissionDates = Object.keys(submissions);
    return submissionDates.map((submissionDate, idx) => {
      return (
        <>
          <CSVLink
            filename={`Soundside Submissions ${submissionDate}`}
            key={`submission-date-${idx}`}
            data={submissions[submissionDate]}
          >
            {submissionDate}
          </CSVLink>{" "}
          <br />
        </>
      );
    });
  }

  return (
    <SubmissionsWrapper>
      <SubmissionsHeader>Submissions</SubmissionsHeader>
      {!submissions ? (
        <Redirect to="/submissions-login" />
      ) : Object.keys(submissions).length === 0 ? (
        <div>No Submissions Found</div>
      ) : (
        populateSubmissions()
      )}
    </SubmissionsWrapper>
  );
}
