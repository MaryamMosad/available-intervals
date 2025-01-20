/**
 * @param {Date | number } timestamp
 * @returns { {isValid:boolean, dateAfterModification:number }}
 */
exports.transformTimeToFiveMinutesMark = (timestamp) => {
  const remainder = new Date(timestamp).getTime() % (5 * 60 * 1000);
  const minutesToAdd = remainder ? 5 - remainder / (60 * 1000) : 0;
  const dateAfterModification =
    new Date(timestamp).getTime() + +minutesToAdd * 60 * 1000;

  return {
    isValid: !(new Date(timestamp).getTime() % (5 * 60 * 1000)),
    dateAfterModification,
  };
};
