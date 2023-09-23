exports.extractAvailableIntervals = (originalIntervals, busyIntervals) => {
  const finalAvailableIntervals = [];
  for (const originalInterval of originalIntervals) {
    let noOfNonOverlappingBusyIntervals = 0;
    for (let i = 0; i < busyIntervals.length; i++) {
      const previousShift = busyIntervals[i - 1];
      const currentBusyShift = busyIntervals[i];
      const nextBusyShift = busyIntervals[i + 1];

      if (areSfhiftsIdentical(currentBusyShift, originalInterval)) continue;

      if (!areShiftsOverlapping(currentBusyShift, originalInterval)) {
        noOfNonOverlappingBusyIntervals++;
        continue;
      }
      if (
        currentBusyShift.start === originalInterval.start ||
        originalInterval.end === currentBusyShift.end
      ) {
        let startOfAvailableShift = originalInterval.start;

        if (originalInterval.start === currentBusyShift.start) {
          startOfAvailableShift = currentBusyShift.end;
        }

        if (
          previousShift &&
          areShiftsOverlapping(previousShift, originalInterval)
        )
          startOfAvailableShift = previousShift.end;

        let endOfAvailableShift = originalInterval.end;

        if (originalInterval.end === currentBusyShift.end) {
          endOfAvailableShift = currentBusyShift.start;
        }

        if (
          nextBusyShift &&
          areShiftsOverlapping(nextBusyShift, originalInterval)
        )
          endOfAvailableShift = nextBusyShift.start;

        pushIntervalToFinalAvailableIntervals(finalAvailableIntervals, {
          start: startOfAvailableShift,
          end: endOfAvailableShift,
        });
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
      firstShift.start < secondShift.end) ||
    (secondShift.start >= firstShift.start &&
      secondShift.end < firstShift.start)
  );
}

function areSfhiftsIdentical(firstShift, secondShift) {
  return (
    firstShift.start === secondShift.start && firstShift.end === secondShift.end
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
