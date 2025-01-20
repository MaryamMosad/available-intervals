exports.fiveMinuteMarkTestSamples = {
  "return same input for 0 minutes": {
    date: "2025-01-20T18:00:00",
    isValid: true,
    dateAfterModification: "2025-01-20T18:00:00",
  },
  "transform 3 minutes past the hour to 5": {
    date: "2025-01-20T18:03:00",
    isValid: false,
    dateAfterModification: "2025-01-20T18:05:00",
  },
  "transform 13 minutes past the hour to 15": {
    date: "2025-01-20T18:13:00",
    isValid: false,
    dateAfterModification: "2025-01-20T18:15:00",
  },
  "return same input for 30 minutes": {
    date: "2025-01-20T18:30:00",
    isValid: true,
    dateAfterModification: "2025-01-20T18:30:00",
  },
  "transform 44 minutes past the hour to 45": {
    date: "2025-01-20T18:44:00",
    isValid: false,
    dateAfterModification: "2025-01-20T18:45:00",
  },
  "transform 58 minutes past the hour to the next hour": {
    date: "2025-01-20T18:58:00",
    isValid: false,
    dateAfterModification: "2025-01-20T19:00:00",
  },
};
