import { format } from "date-fns";

const useDate = () => {
  const handleCheckToday = (date) => {
    return new Date().getDate() === new Date(date).getDate();
  };

  const handleCheckTomorrow = (date) => {
    const today = new Date();
    return today.getDate() + 1 === new Date(date).getDate();
  };

  const currentDateName = () => {
    const today = new Date();
    const dayName = format(today, "EEEE");
    return dayName;
  };

  const currentDayAndMonth = () => {
    const today = new Date();
    const dayAndMonth = format(today, "d MMM");
    return dayAndMonth;
  };

  const dayNameFormat = (date) => {
    const dayName = format(date, "EEE");
    return dayName;
  };

  const dateMonthFormat = (date) => {
    const dayAndMonth = format(date, "d MMM");
    return dayAndMonth;
  };

  const timeFormat = (date) => {
    const time = format(date, "HH:mm");
    return time;
  };

  return {
    handleCheckToday,
    handleCheckTomorrow,
    currentDateName,
    currentDayAndMonth,
    dayNameFormat,
    dateMonthFormat,
    timeFormat,
  };
};

export default useDate;
