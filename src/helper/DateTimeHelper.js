const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const GetDateTIme = () => {
  // Getting Month
  const date = new Date();
  const dt = date.toISOString().split('T');
  const d = dt[0];
  const spliteddate = d.split('-');

  // Getting Time

  ////////////////////////////////////////////

  //   exect Month
  const MONTH = months[spliteddate[1].slice(1, 2) - 1];
  //   exect Day
  const Day = spliteddate[2];
  //    exect Year
  const Year = spliteddate[0];

  /////////////////////////////////////////
  const DATE = `${MONTH} ${Day}, ${Year}`;

  return DATE;
};

export default GetDateTIme;
