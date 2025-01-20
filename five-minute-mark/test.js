const test = require("node:test");

const { strictEqual } = require("node:assert");

const { transformTimeToFiveMinutesMark } = require("./five-minute-mark");

const { fiveMinuteMarkTestSamples } = require("./test-samples");

for (let testSample in fiveMinuteMarkTestSamples) {
  const datesToCheck = fiveMinuteMarkTestSamples[testSample];
  test(`${testSample}`, () => {
    const res = transformTimeToFiveMinutesMark(datesToCheck.date);

    strictEqual(res.isValid, datesToCheck.isValid);
    strictEqual(
      res.dateAfterModification,
      new Date(datesToCheck.dateAfterModification).getTime()
    );
  });
}
