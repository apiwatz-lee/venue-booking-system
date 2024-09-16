import { bookings } from "../data/Booking";
import { useEffect, useState } from "react";
import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from "date-fns";

const useBooking = () => {
  const [bookingEvents, setBookingEvents] = useState({
    today: [],
    thisWeek: [],
    nextWeek: [],
    wholeMonth: [],
  });

  const searchParams = new URLSearchParams(window.location.search);
  const roomId = searchParams.get("roomId");

  /**
   *
   * @param {*} booking:- The booking to check if it is within the range
   * @param {*} range - The range to check if the booking is within
   * @returns Boolean - True if the booking is within the range, false otherwise
   */
  const isBookingWithinRange = (booking, range) => {
    const bookingStart = new Date(booking.startTime);
    const bookingEnd = new Date(booking.endTime);
    return (
      isWithinInterval(bookingStart, {
        start: range.start,
        end: range.end,
      }) ||
      isWithinInterval(bookingEnd, { start: range.start, end: range.end }) ||
      (bookingStart < range.start && bookingEnd > range.end) // Booking spans over the whole range
    );
  };

  const bookingsByPeriod = (roomId) => {
    const now = new Date();

    const todayRange = {
      start: startOfDay(now),
      end: endOfDay(now),
    };

    const thisWeekRange = {
      start: startOfWeek(now),
      end: endOfWeek(now),
    };

    const nextWeekRange = {
      start: startOfWeek(
        new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
        { weekStartsOn: 1 }
      ),
      end: endOfWeek(
        new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
        { weekStartsOn: 1 }
      ),
    };

    const thisMonthRange = {
      start: startOfMonth(now),
      end: endOfMonth(now),
    };

    setBookingEvents((event) => ({
      ...event,
      today: bookings.filter(
        (booking) =>
          booking.roomId === roomId && isBookingWithinRange(booking, todayRange)
      ),
      thisWeek: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, thisWeekRange)
      ),
      nextWeek: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, nextWeekRange)
      ),
      wholeMonth: bookings.filter(
        (booking) =>
          booking.roomId === roomId &&
          isBookingWithinRange(booking, thisMonthRange)
      ),
    }));
  };

  /**
   * Group the bookings by day to display in the timeline
   * @param {*} data - The list of bookings to group by day
   * @returns Object containing the bookings grouped by day
   */
  const groupBookingByDay = (data) => {
    return data.reduce((groups, booking) => {
      const date = booking.startTime.split(" ")[0];

      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(booking);

      return groups;
    }, {});
  };

  const handleCheckUpComingBookings = (bookings) => {
    const currentTime = new Date().getTime();

    return bookings.filter((booking) => {
      const bookingStart = new Date(booking.startTime).getTime();
      return bookingStart >= currentTime;
    });
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
    groupBookingByDay,
    handleCheckUpComingBookings,
  };
};

export default useBooking;
