const test = require("node:test");

const { strictEqual } = require("node:assert");

const { extractAvailableIntervals } = require("./extract-available-intervals");

const { testSamples } = require("./test-samples");

for (let testSample in testSamples) {
  const IntervalsToCheck = testSamples[testSample];
  test(`${testSample}`, () => {
    const availableIntervals = extractAvailableIntervals(
      convertDatesToTimestamp(IntervalsToCheck.originalIntervals),
      convertDatesToTimestamp(IntervalsToCheck.busyIntervals)
    );

    strictEqual(
      availableIntervals.length,
      IntervalsToCheck.availableIntervals.length
    );
    IntervalsToCheck.availableIntervals.forEach((interval, index) => {
      strictEqual(
        availableIntervals[index].start,
        new Date(interval.start).getTime()
      );
      strictEqual(
        availableIntervals[index].end,
        new Date(interval.end).getTime()
      );
    });
  });
}

function convertDatesToTimestamp(intervals) {
  return intervals.map((interval) => ({
    start: new Date(interval.start).getTime(),
    end: new Date(interval.end).getTime(),
  }));
}
