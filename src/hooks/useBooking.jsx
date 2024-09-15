import { bookings } from "../data/Booking";
import { useEffect, useState } from "react";

const useBooking = () => {
  const [bookingEvents, setBookingEvents] = useState({
    today: [],
    thisWeek: [],
    nextWeek: [],
    wholeMonth: [],
  });

  const searchParams = new URLSearchParams(window.location.search);
  const roomId = searchParams.get("roomId");

  const isBookingWithinRange = (booking, rangeStart, rangeEnd) => {
    // Helper function to check if booking overlaps with a date range
    const bookingStart = new Date(booking.startTime).getTime();
    const bookingEnd = new Date(booking.endTime).getTime();
    return (
      (bookingStart >= rangeStart.getTime() &&
        bookingStart <= rangeEnd.getTime()) ||
      (bookingEnd >= rangeStart.getTime() &&
        bookingEnd <= rangeEnd.getTime()) ||
      (bookingStart < rangeStart.getTime() && bookingEnd > rangeEnd.getTime()) // Spans over the range
    );
  };

  /**
   *
   * @param {*} roomId - The room ID to filter the bookings
   * @returns Object containing the bookings for today, this week, next week, and the whole month
   */
  const bookingsByPeriod = (roomId) => {
    const now = new Date();

    // Clone the current date to avoid mutating the 'now' object
    const todayStart = new Date(now);
    const todayEnd = new Date(now);
    todayStart.setHours(0, 0, 0, 0); // Start of today
    todayEnd.setHours(23, 59, 59, 999); // End of today

    // This week (Monday to Sunday)
    const currentWeekStart = new Date(todayStart);
    const currentWeekEnd = new Date(currentWeekStart);
    currentWeekStart.setDate(todayStart.getDate() - todayStart.getDay() + 1); // Monday of current week
    currentWeekEnd.setDate(currentWeekStart.getDate() + 6); // Sunday of current week

    // Next week (Monday to Sunday)
    const nextWeekStart = new Date(currentWeekEnd);
    const nextWeekEnd = new Date(nextWeekStart);
    nextWeekStart.setDate(currentWeekEnd.getDate() + 1); // Start of next Monday
    nextWeekEnd.setDate(nextWeekStart.getDate() + 6); // End of next Sunday

    // Whole month (from the 1st day to the last day of the current month)
    const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1); // Start of the month
    const currentMonthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0); // End of the month
    currentMonthEnd.setHours(23, 59, 59, 999); // Set to the end of the last day of the month

    setBookingEvents((event) => ({
      ...event,
      today: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, todayStart, todayEnd)
      ),
      thisWeek: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, currentWeekStart, currentWeekEnd)
      ),
      nextWeek: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, nextWeekStart, nextWeekEnd)
      ),
      wholeMonth: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, currentMonthStart, currentMonthEnd)
      ),
    }));
  };

  useEffect(() => {
    if (roomId) {
      bookingsByPeriod(roomId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return {
    bookingEvents,
    roomId,
  };
};

export default useBooking;
