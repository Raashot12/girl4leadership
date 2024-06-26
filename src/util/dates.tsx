// check if window exists, important because during SSR, window doesn't
const checkGlobal = () => typeof window !== `undefined`;

// This function converts dates like 2001-01-13 to 13th January, 2001
// I guess there's a better way to do it in GatsbyJS, but I haven't figured out yet.
const formatBlogDate = (date: Date | string) => {
  const dateArr = String(date).split('');

  // Slice the array to break the date
  const yearArr = dateArr.slice(0, 4);
  const monthArr = dateArr.slice(5, 7);
  const dayArr = dateArr.slice(8, 10);

  // parse the dates to integers and also get the last digit of the day for day suffixes
  const month = parseInt(monthArr.join(''), 10);
  const day = parseInt(dayArr.join(''), 10);
  const lastDigitOfDay = parseInt(
    dayArr.join('').charAt(dayArr.join('').length - 1),
    10
  );
  const year = parseInt(yearArr.join(''), 10);

  // switch case to get the month name
  let monthName;

  switch (month) {
    case 1:
      monthName = 'January';
      break;
    case 2:
      monthName = 'February';
      break;
    case 3:
      monthName = 'March';
      break;
    case 4:
      monthName = 'April';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'June';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'August';
      break;
    case 9:
      monthName = 'September';
      break;
    case 10:
      monthName = 'October';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'December';
      break;
    default:
      monthName = '';
  }

  // switch case to get the suffix of the day
  let daySuffix;

  switch (lastDigitOfDay) {
    case 1:
      daySuffix = 'st';
      break;
    case 2:
      daySuffix = 'nd';
      break;
    case 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
  }

  // exceptions for 11 to 19
  switch (day) {
    case 11:
    case 12:
    case 13:
      daySuffix = 'th';
      break;
    default:
      break;
  }

  const fullDate = `${monthName} ${day}${daySuffix}, ${year}`;
  return fullDate;
};
const formatDateDecampCms = (dateTimeString: string) => {
  // Split the date and time parts
  const [datePart, timePart] = dateTimeString.split('T');

  // Split the date part into day, month, and year
  const [day, month, year] = datePart.split('.').map(Number);

  // Split the time part into hours and minutes
  const [hours, minutes] = timePart.split(':').map(Number);

  // Create a Date object
  const date = new Date(year, month - 1, day, hours, minutes);

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);

  return formattedDate;
};

export { formatBlogDate, checkGlobal, formatDateDecampCms };
