import { useEffect, useState } from "react";
import VerticalLine from "./VerticalLine";
import useBooking from "../hooks/useBooking";
import useDate from "../hooks/useDate";
import { isToday, isTomorrow } from "date-fns";

// eslint-disable-next-line react/prop-types
const Timeline = ({ data = [] }) => {
  const [bookingByDay, setBookingByDay] = useState({});
  const { groupBookingByDay } = useBooking();
  const { timeFormat, dayNameFormat, dateMonthFormat } = useDate();

  const handleDisplayDate = (dateString) => {
    if (isToday(dateString)) {
      return `Today (${dayNameFormat(dateString)}, ${dateMonthFormat(
        dateString
      )})`;
    } else if (isTomorrow(dateString)) {
      return `Tomorrow (${dayNameFormat(dateString)}, ${dateMonthFormat(
        dateString
      )})`;
    } else {
      return `(${dayNameFormat(dateString)}, ${dateMonthFormat(dateString)})`;
    }
  };

  const handleRandomColorClass = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-gray-500",
      "bg-orange-500",
      "bg-teal-500",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    setBookingByDay(groupBookingByDay(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {Object.entries(bookingByDay).length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-400">No bookings for this period</p>
        </div>
      ) : (
        <>
          <VerticalLine />
          {Object.entries(bookingByDay).map(([date, bookings]) => (
            <div key={date} className="day-wrapper">
              <div className="w-full bg-[#ECECEC] p-2 pl-16 font-semibold text-sm">
                <p className="text-[#787878]">{handleDisplayDate(date)}</p>
              </div>

              <div className="pl-7">
                <div className="border-l">
                  {bookings?.map((booking) => (
                    <div key={booking?.id} className="pl-5 py-5 relative">
                      <span
                        className={`absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 ${handleRandomColorClass()}`}
                      />

                      <p className="text-sm text-gray-400">
                        {`${timeFormat(booking?.startTime)} - ${timeFormat(
                          booking?.endTime
                        )}`}
                      </p>

                      <p className="font-light">{booking?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Timeline;
