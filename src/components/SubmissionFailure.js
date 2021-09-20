import React from "react";
import styled from "styled-components";
import useScrollToTop from "../hooks/useScrollToTop";

const SubmimssionMessage = styled.div`
  margin: 2rem;
  text-align: center;
`;

export default function SubmissionFailure() {
  useScrollToTop()
  
  return (
    <SubmimssionMessage>
      <h2>Submission Failure</h2>
      <p>Sorry, Something went wrong.</p>
      <p>Please try again later.</p>
    </SubmimssionMessage>
  );
}
