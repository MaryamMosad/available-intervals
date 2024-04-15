const test = require("node:test");

const assert = require("node:assert");

const extractAvailableIntervals =
  require("./extract-available-intervals").extractAvailableIntervals;

const testSamples = require("./test-samples").testSamples;

for (let testSample in testSamples) {
  const IntervalsToCheck = testSamples[testSample];
  test(`${testSample}`, () => {
    const availableIntervals = extractAvailableIntervals(
      convertDatesToTimestamp(IntervalsToCheck.originalIntervals),
      convertDatesToTimestamp(IntervalsToCheck.busyIntervals)
    );

    assert.strictEqual(
      availableIntervals.length,
      IntervalsToCheck.availableIntervals.length
    );
    IntervalsToCheck.availableIntervals.forEach((interval, index) => {
      assert.strictEqual(
        new Date(interval.start).getTime(),
        availableIntervals[index].start
      );
      assert.strictEqual(
        new Date(interval.end).getTime(),
        availableIntervals[index].end
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
