import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cleanSubmissions from "../utils/cleanSubmissions";
import { SUBMISSIONS_URL } from "../constraints";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

const FormDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center
`;

const Button = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  height: 2rem;
  border-radius: 0%;
  background-color: #3a5174;
  font-weight: bold;
  color: white;
`

export default function SubmissionsLogin() {
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchSubmissions();
  }

  function fetchSubmissions() {
    fetch(SUBMISSIONS_URL, {
      headers: {
        authorization: password,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.statusText);
      })
      .then((json) => {
        const data = cleanSubmissions(json);
        history.push({
          pathname: "/submissions",
          state: { submissions: data },
        });
      })
      .catch((err) => {
        console.log(err); // need to handle this later
      });
  }

  return (
    <div>
      <H2>Submissions Login</H2>
      <P>Please log in to view submitted forms</P>

      <FormDiv>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
          />
          <Button type="submit">Log In</Button>
        </form>
      </FormDiv>
    </div>
  );
}
