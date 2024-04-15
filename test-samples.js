exports.testSamples = {
  "booking the start of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "booking appointment that starts at the end of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T22:00:00Z", end: "2024-01-05T23:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "booking appointment that ends at the start of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T13:00:00Z", end: "2024-01-05T14:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "booking the end of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T20:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T20:00:00Z" },
    ],
  },
  "booking the start and end of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      { start: "2024-01-05T20:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T20:00:00Z" },
    ],
  },
  "booking the start and end of the interval with two original intervals": {
    originalIntervals: [
      { start: "2024-01-05T08:00:00Z", end: "2024-01-05T10:00:00Z" },
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      { start: "2024-01-05T18:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T08:00:00Z", end: "2024-01-05T10:00:00Z" },
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T18:00:00Z" },
    ],
  },
  "booking the whole original interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval from both sides": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T13:00:00Z", end: "2024-01-05T23:00:00Z" },
    ],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval end": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T23:00:00Z" },
    ],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval start": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T13:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval start but before the end":
    {
      originalIntervals: [
        { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
      ],
      busyIntervals: [
        { start: "2024-01-05T13:00:00Z", end: "2024-01-05T20:00:00Z" },
      ],
      availableIntervals: [
        { start: "2024-01-05T20:00:00Z", end: "2024-01-05T22:00:00Z" },
      ],
    },
  "booking appointments that exceed the original interval end but after the start":
    {
      originalIntervals: [
        { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
      ],
      busyIntervals: [
        { start: "2024-01-05T15:00:00Z", end: "2024-01-05T23:00:00Z" },
      ],
      availableIntervals: [
        { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      ],
    },
  "booking at the middle of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T17:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      { start: "2024-01-05T17:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "booking outside the range of the interval": {
    originalIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T23:00:00Z", end: "2024-01-06T00:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "multiple booked intervals in all original intervals": {
    originalIntervals: [
      { start: "2024-01-04T14:00:00Z", end: "2024-01-04T22:00:00Z" },
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-04T14:00:00Z", end: "2024-01-04T14:30:00Z" },
      { start: "2024-01-04T16:00:00Z", end: "2024-01-04T18:00:00Z" },
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T16:00:00Z" },
      { start: "2024-01-05T18:00:00Z", end: "2024-01-05T20:00:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-04T14:30:00Z", end: "2024-01-04T16:00:00Z" },
      { start: "2024-01-04T18:00:00Z", end: "2024-01-04T22:00:00Z" },
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      { start: "2024-01-05T16:00:00Z", end: "2024-01-05T18:00:00Z" },
      { start: "2024-01-05T20:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
  "multiple booked intervals inside only one of the original intervals": {
    originalIntervals: [
      { start: "2024-01-04T14:00:00Z", end: "2024-01-04T22:00:00Z" },
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T22:00:00Z" },
    ],
    busyIntervals: [
      { start: "2024-01-05T15:00:00Z", end: "2024-01-05T15:30:00Z" },
      { start: "2024-01-05T16:00:00Z", end: "2024-01-05T16:30:00Z" },
      { start: "2024-01-05T17:00:00Z", end: "2024-01-05T18:00:00Z" },
      { start: "2024-01-05T19:00:00Z", end: "2024-01-05T19:30:00Z" },
    ],
    availableIntervals: [
      { start: "2024-01-04T14:00:00Z", end: "2024-01-04T22:00:00Z" },
      { start: "2024-01-05T14:00:00Z", end: "2024-01-05T15:00:00Z" },
      { start: "2024-01-05T15:30:00Z", end: "2024-01-05T16:00:00Z" },
      { start: "2024-01-05T16:30:00Z", end: "2024-01-05T17:00:00Z" },
      { start: "2024-01-05T18:00:00Z", end: "2024-01-05T19:00:00Z" },
      { start: "2024-01-05T19:30:00Z", end: "2024-01-05T22:00:00Z" },
    ],
  },
};
