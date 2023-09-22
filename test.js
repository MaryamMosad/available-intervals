const test = require("node:test");

const assert = require("node:assert");

const extractAvailableIntervals =
  require("./extract-available-intervals").extractAvailableIntervals;

const testSamples = require("./test-samples").testSamples;

for (let testSample in testSamples) {
  const IntervalsToCheck = testSamples[testSample];
  test(`${testSample}`, () => {
    const availableIntervals = extractAvailableIntervals(
      IntervalsToCheck.originalIntervals,
      IntervalsToCheck.busyIntervals
    );

    assert.strictEqual(
      availableIntervals.length,
      IntervalsToCheck.availableIntervals.length
    );
    IntervalsToCheck.availableIntervals.forEach((interval, index) => {
      assert.strictEqual(interval.start, availableIntervals[index].start);
      assert.strictEqual(interval.end, availableIntervals[index].end);
    });
  });
}
