exports.testSamples = {
  "booking the start of the interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695207600000 }],
    availableIntervals: [{ start: 1695207600000, end: 1695232800000 }],
  },
  "booking the end of the interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695225600000, end: 1695232800000 }],
    availableIntervals: [{ start: 1695204000000, end: 1695225600000 }],
  },
  "booking the start and end of the interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [
      { start: 1695204000000, end: 1695207600000 },
      { start: 1695225600000, end: 1695232800000 },
    ],
    availableIntervals: [{ start: 1695207600000, end: 1695225600000 }],
  },
  "booking the start and end of the interval with two original intervals": {
    originalIntervals: [
      { start: 1695168000000, end: 1695178800000 },
      { start: 1695204000000, end: 1695232800000 },
    ],
    busyIntervals: [
      { start: 1695204000000, end: 1695207600000 },
      { start: 1695225600000, end: 1695232800000 },
    ],
    availableIntervals: [
      { start: 1695168000000, end: 1695178800000 },
      { start: 1695207600000, end: 1695225600000 },
    ],
  },
  "booking the whole original interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval from both sides": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695200400000, end: 1695236400000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval end": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695236400000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval start": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695200400000, end: 1695232800000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the original interval start but before the end":
    {
      originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
      busyIntervals: [{ start: 1695200400000, end: 1695229200000 }],
      availableIntervals: [{ start: 1695229200000, end: 1695232800000 }],
    },
  "booking appointments that exceed the original interval end but after the start":
    {
      originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
      busyIntervals: [{ start: 1695207600000, end: 1695236400000 }],
      availableIntervals: [{ start: 1695204000000, end: 1695207600000 }],
    },
  "booking at the middle of the interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695207600000, end: 1695214800000 }],
    availableIntervals: [
      { start: 1695204000000, end: 1695207600000 },
      { start: 1695214800000, end: 1695232800000 },
    ],
  },
  "booking outside the range of the interval": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695236400000, end: 1695240000000 }],
    availableIntervals: [{ start: 1695204000000, end: 1695232800000 }],
  },
  "multiple booked intervals in all original intervals": {
    originalIntervals: [
      { start: 1695168000000, end: 1695178800000 },
      { start: 1695204000000, end: 1695232800000 },
    ],
    busyIntervals: [
      { start: 1695171600000, end: 1695173400000 },
      { start: 1695218400000, end: 1695222000000 },
    ],
    availableIntervals: [
      { start: 1695168000000, end: 1695171600000 },
      { start: 1695173400000, end: 1695178800000 },
      { start: 1695204000000, end: 1695218400000 },
      { start: 1695222000000, end: 1695232800000 },
    ],
  },
  "multiple booked intervals inside only one of the original intervals": {
    originalIntervals: [
      { start: 1695160800000, end: 1695162600000 },
      { start: 1695164400000, end: 1695243600000 },
    ],
    busyIntervals: [
      { start: 1695204000000, end: 1695208200000 },
      { start: 1695208500000, end: 1695210900000 },
      { start: 1695211200000, end: 1695217200000 },
      { start: 1695224400000, end: 1695228900000 },
    ],
    availableIntervals: [
      { start: 1695160800000, end: 1695162600000 },
      { start: 1695164400000, end: 1695204000000 },
      { start: 1695208200000, end: 1695208500000 },
      { start: 1695210900000, end: 1695211200000 },
      { start: 1695217200000, end: 1695224400000 },
      { start: 1695228900000, end: 1695243600000 },
    ],
  },
};
