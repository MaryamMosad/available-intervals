exports.extractAvailableIntervals = (originalIntervals, busyIntervals) => {
  const finalAvailableIntervals = [];
  for (const originalInterval of originalIntervals) {
    let noOfNonOverlappingBusyIntervals = 0;
    for (let i = 0; i < busyIntervals.length; i++) {
      const previousShift = busyIntervals[i - 1];
      const currentBusyShift = busyIntervals[i];
      const nextBusyShift = busyIntervals[i + 1];

      if (isTheWholeIntervalCovered(currentBusyShift, originalInterval))
        continue;

      if (!areShiftsOverlapping(currentBusyShift, originalInterval)) {
        noOfNonOverlappingBusyIntervals++;
        continue;
      }
      let startOfAvailableShift = originalInterval.start;
      let endOfAvailableShift = originalInterval.end;

      if (
        previousShift &&
        areShiftsOverlapping(previousShift, originalInterval)
      )
        startOfAvailableShift = previousShift.end;

      if (
        nextBusyShift &&
        areShiftsOverlapping(nextBusyShift, originalInterval)
      )
        endOfAvailableShift = nextBusyShift.start;

      if (originalInterval.start >= currentBusyShift.start) {
        startOfAvailableShift = currentBusyShift.end;
      }

      if (originalInterval.end <= currentBusyShift.end) {
        endOfAvailableShift = currentBusyShift.start;
      }

      if (
        originalInterval.start >= currentBusyShift.start ||
        originalInterval.end <= currentBusyShift.end
      ) {
        pushIntervalToFinalAvailableIntervals(finalAvailableIntervals, {
          start: startOfAvailableShift,
          end: endOfAvailableShift,
        });
      } else {
        const firstIntervalAfterSplitting = {
          start: startOfAvailableShift,
          end: currentBusyShift.start,
        };
        const secondIntervalAfterSplitting = {
          start: currentBusyShift.end,
          end: endOfAvailableShift,
        };

        pushIntervalToFinalAvailableIntervals(
          finalAvailableIntervals,
          firstIntervalAfterSplitting
        );
        pushIntervalToFinalAvailableIntervals(
          finalAvailableIntervals,
          secondIntervalAfterSplitting
        );
      }
    }

    if (noOfNonOverlappingBusyIntervals === busyIntervals.length) {
      pushIntervalToFinalAvailableIntervals(
        finalAvailableIntervals,
        originalInterval
      );
    }
  }

  return finalAvailableIntervals;
};

function areShiftsOverlapping(firstShift, secondShift) {
  return (
    (firstShift.start >= secondShift.start &&
      firstShift.start <= secondShift.end) ||
    (secondShift.start >= firstShift.start &&
      secondShift.end <= firstShift.start)
  );
}

function pushIntervalToFinalAvailableIntervals(
  availableIntervals,
  intervalToAdd
) {
  if (
    !availableIntervals.find(
      (interval) =>
        interval.start === intervalToAdd.start &&
        interval.end === intervalToAdd.end
    )
  ) {
    availableIntervals.push({
      start: intervalToAdd.start,
      end: intervalToAdd.end,
    });
  }
}

function isTheWholeIntervalCovered(currentInterval, originalInterval) {
  return (
    (currentInterval.start <= originalInterval.start &&
      currentInterval.end >= originalInterval.end) ||
    (currentInterval.start === originalInterval.start &&
      currentInterval.end > originalInterval.end) ||
    (currentInterval.end === originalInterval.end &&
      currentInterval.start < originalInterval.start)
  );
}
