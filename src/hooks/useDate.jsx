const useDate = () => {
  const daysFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysShort = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  const monthShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleCurrentDate = () => {
    const date = new Date();
    const dayName = daysFull[date.getDay()];
    const day = date.getDate();
    const month = monthShort[date.getMonth()];

    return { dayName, day, month };
  };

  const handleTimelineDate = (dateString) => {
    const date = new Date(dateString);
    const dayName = daysShort[date.getDay()];
    const day = date.getDate();
    const month = monthShort[date.getMonth()];

    return { dayName, day, month };
  };

  const handleTimeFormatted = (dateString) => {
    const date = new Date(dateString);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const handleCheckToday = (date) => {
    return new Date().getDate() === new Date(date).getDate();
  };

  const handleCheckTomorrow = (date) => {
    const today = new Date();
    return today.getDate() + 1 === new Date(date).getDate();
  };

  return {
    handleCurrentDate,
    handleTimeFormatted,
    handleTimelineDate,
    handleCheckToday,
    handleCheckTomorrow,
  };
};

export default useDate;
