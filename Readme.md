## Summary

Find available time slots of an original schedule after having some booked time slots.

for example: it can be used to find suitable booking time in doctor's schedule, booking flights, etc.

### Features

- calculates the available timeslots for an original free schedule after bookings have been made
- refines the start of the timeslot's minutes (from 1:03 to 1:05) to make more sense for end user

### Test Cases

Test cases are provided to mock real world booking scenarios,
There could be cases where there are booked shifts then the original schedule has changed for some reason, the booked timeslots cannot be changed but they still exist and accounted for when calculating the rest of the available shifts
