export default function cleanSubmissions(json) {
    const rawSubmissions = json.submissions;
    const submissionDates = Object.keys(rawSubmissions);
    submissionDates.forEach((submissionDate) => {
      rawSubmissions[submissionDate] = rawSubmissions[submissionDate].map(
        (submissionsString, idx) => {
          return [idx].concat(
            submissionsString.split(",SPLIT,").map((entry) => {
              return entry.trim();
            })
          );
        }
      );
    });
    return rawSubmissions;
  }