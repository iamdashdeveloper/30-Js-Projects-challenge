// Create a Day.js object for the current date and time
const now = dayjs();

// Authored format for the entire date
const formattedDate = now.format('DD dddd MMMM YYYY');

// Extract individual components
const currentMonth = now.format('MMMM'); // Month name
const currentDay = now.format('dddd'); // Day name
const currentDate = now.format('DD'); // Day of the month (with leading zero if necessary)
const currentYear = now.format('YYYY'); // Year

// Set the innerHTML of the HTML elements with the formatted components
document.getElementById('date').innerHTML = currentDate;
document.getElementById('day').innerHTML = currentDay;
document.getElementById('month').innerHTML = currentMonth;
document.getElementById('year').innerHTML = currentYear;

// Optionally, log the formatted date to the console

