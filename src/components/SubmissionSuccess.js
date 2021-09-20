import React from "react";
import styled from "styled-components";
import useScrollToTop from "../hooks/useScrollToTop";

const SubmimssionMessage = styled.div`
  margin: 2rem;
  text-align: center;
`;

export default function SubmissionSuccess() {
  useScrollToTop();

  return (
    <SubmimssionMessage>
      <h2>Submission Success</h2>
      <p>Thank you for taking the time to connect!</p>
    </SubmimssionMessage>
  );
}
