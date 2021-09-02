const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://soundside-forms-backend.herokuapp.com";
const SUBMISSIONS_URL = BASE_URL + "/submissions";

export { BASE_URL, SUBMISSIONS_URL };
