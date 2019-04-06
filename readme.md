# Node JS TDD Exercise

## Tasks

1. Create controller API endpoint with GET method that returns current time
2. Back controller with a service
3. Extend service to allow GMT offset to be passed in via controller param
4. Ensure implementation follows TDD


# Documentation

## How to run
After you have ran `npm i` at least once you can either run:
- $`npm run start:debug` to run the server in debug mode,
- $`npm run start` to run the server in normal mode,
- $`npm run test` to run the spec securing that the server acts as expected.


## Assumptions

- There are 2 valid offset formats:
    1. GMT(+/-)XX:XX format that is correct when the value falls between -12:00 to +14:00, since actual GMT zones outside this range do not exist (ref. https://en.wikipedia.org/wiki/List_of_UTC_time_offsets)
    2. Number, which is interpreted as hours if it is greater than -16 and less than 16, otherwise interpreted as minutes. As future work, these values could be limited to actual timezones, but this was not done at this moment in order to allow the user to get the time for any time difference; given that this time difference is provided as a number.


