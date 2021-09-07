import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cleanSubmissions from "../utils/cleanSubmissions";
import { SUBMISSIONS_URL } from "../constraints";

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
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
