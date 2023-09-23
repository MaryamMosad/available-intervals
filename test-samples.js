exports.testSamples = {
  "booking appointment in the start of the shifts": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695207600000 }],
    availableIntervals: [{ start: 1695207600000, end: 1695232800000 }],
  },
  "booking appointment at the end of the shifts": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695225600000, end: 1695232800000 }],
    availableIntervals: [{ start: 1695204000000, end: 1695225600000 }],
  },
  "booking one appointment at the start and one at the end": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [
      { start: 1695204000000, end: 1695207600000 },
      { start: 1695225600000, end: 1695232800000 },
    ],
    availableIntervals: [{ start: 1695207600000, end: 1695225600000 }],
  },
  "booking one appointment at the start and one at the end with two available shifts":
    {
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
  "booking the whole available shift": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the available shifts from both sides": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695200400000, end: 1695236400000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the available shifts end ": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695204000000, end: 1695236400000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the available shifts start": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695200400000, end: 1695232800000 }],
    availableIntervals: [],
  },
  "booking appointments that exceed the available shifts start but before the end":
    {
      originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
      busyIntervals: [{ start: 1695200400000, end: 1695229200000 }],
      availableIntervals: [{ start: 1695229200000, end: 1695232800000 }],
    },
  "booking appointments that exceed the available shifts end but after the start":
    {
      originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
      busyIntervals: [{ start: 1695207600000, end: 1695236400000 }],
      availableIntervals: [{ start: 1695204000000, end: 1695207600000 }],
    },
  "booking appointment at the middle of the shifts": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695207600000, end: 1695214800000 }],
    availableIntervals: [
      { start: 1695204000000, end: 1695207600000 },
      { start: 1695214800000, end: 1695232800000 },
    ],
  },
  "booking appointment outside the range of the shifts": {
    originalIntervals: [{ start: 1695204000000, end: 1695232800000 }],
    busyIntervals: [{ start: 1695236400000, end: 1695240000000 }],
    availableIntervals: [{ start: 1695204000000, end: 1695232800000 }],
  },
  "multiple shifts with multiple booked appointments in all original ranges": {
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
  "multiple shifts with multiple booked appointments inside one of the original ranges":
    {
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
