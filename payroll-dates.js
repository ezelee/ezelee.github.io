function isWeekend(date) {
  const day = date.getDay();
  //console.log("isWeekend date", date, "day", day, "isWeekend", day === 0 || day === 6);
  return day === 0 || day === 6; // Sunday or Saturday
}

function isMonday(date) {
  //console.log("isMonday date", date, "day", date.getDay(), "isMonday", date.getDay() === 1);
  return date.getDay() === 1;
}

function isSameDay(date1, date2) {
  //console.log("isSameDay date1", date1);
  //console.log("isSameDay date2", date2);
  //console.log("isSameDay result", date1.getFullYear() === date2.getFullYear() &&
  //       date1.getMonth() === date2.getMonth() &&
  //       date1.getDate() === date2.getDate());

  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

function isHoliday(date) {
  var holidays = [
    new Date(2024, 0, 1),
    new Date(2024, 2, 24), 
    new Date(2024, 2, 28), 
    new Date(2024, 2, 29), 
    new Date(2024, 3, 2),
    new Date(2024, 4, 1),
    new Date(2024, 4, 25),
    new Date(2024, 5, 17), 
    new Date(2024, 5, 20), 
    new Date(2024, 6, 9),
    new Date(2024, 7, 17), 
    new Date(2024, 9, 12), 
    new Date(2024, 10, 20),
    new Date(2024, 11, 8),
    new Date(2024, 11, 24),
    new Date(2024, 11, 25),
    new Date(2024, 11, 31),
    new Date(2025, 0, 1),
    new Date(2025, 2, 3),
    new Date(2025, 2, 4),
    new Date(2025, 2, 24),
    new Date(2025, 3, 2),
    new Date(2025, 3, 17),
    new Date(2025, 3, 18),
    new Date(2025, 4, 1),
    new Date(2025, 4, 2),
    new Date(2025, 4, 25),
    new Date(2025, 5, 16),
    new Date(2025, 5, 20),
    new Date(2025, 6, 9),
    new Date(2025, 7, 15),
    new Date(2025, 7, 17),
    new Date(2025, 9, 10),
    new Date(2025, 10, 21),
    new Date(2025, 10, 24),
    new Date(2025, 11, 8),
    new Date(2025, 11, 24),
    new Date(2025, 11, 25),
    new Date(2025, 11, 31),
    new Date(2026, 0, 1),
  ];

  //console.log("isHoliday date", date);
  return holidays.some(holiday => isSameDay(date, holiday));
}

function isWeekendOrHoliday(date) {
  return isWeekend(date) || isHoliday(date);
}

function getFirstBusinessDayOfMonth(year, month) {
  let date = new Date(year, month, 1);

  while (isWeekend(date)) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function getLastBusinessDayOfMonth(year, month) {
  // Get last day of month
  let date = new Date(year, month + 1, 0);

  while (isWeekendOrHoliday(date)) {
    date.setDate(date.getDate() - 1);
  }

  return date;
}

function getPayDate(year, month) {
  // Get first business day of next month
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  const firstBusinessDayNextMonth = getFirstBusinessDayOfMonth(nextYear, nextMonth);

  // Apply payment logic
  if (isWeekendOrHoliday(firstBusinessDayNextMonth) || isMonday(firstBusinessDayNextMonth)) {
    // Case 1: Pay on last business day of current month
    return getLastBusinessDayOfMonth(year, month);
  } else {
    // Case 2: Pay on first business day of next month
    return firstBusinessDayNextMonth;
  }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}/${month}/${day}`;
}

function getPayDateFormatted(year, month) {
  const payDate = getPayDate(year, month);
  return formatDate(payDate);
}

module.exports = {
  getPayDate,
  getPayDateFormatted,
  isWeekend,
  isMonday,
  isHoliday,
  isWeekendOrHoliday,
  getFirstBusinessDayOfMonth,
  getLastBusinessDayOfMonth,
  formatDate
};