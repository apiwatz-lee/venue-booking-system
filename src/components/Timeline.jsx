import { useEffect, useState } from "react";
import VerticalLine from "./VerticalLine";
import useBooking from "../hooks/useBooking";
import useDate from "../hooks/useDate";

// eslint-disable-next-line react/prop-types
const Timeline = ({ data = [] }) => {
  const [bookingByDay, setBookingByDay] = useState({});
  const { groupBookingByDay } = useBooking();
  const { handleTimelineDate } = useDate();

  useEffect(() => {
    setBookingByDay(groupBookingByDay(data));
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
                <p className="text-[#787878]">{`${
                  handleTimelineDate(date).dayName
                }, ${handleTimelineDate(date).day} ${
                  handleTimelineDate(date).month
                }`}</p>{" "}
              </div>

              <div className="pl-7">
                <div className="border-l">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500" />

                      <p className="text-sm text-gray-400">
                        {booking?.startTime?.split(" ")[1].slice(0, 5)} -{" "}
                        {booking?.endTime?.split(" ")[1].slice(0, 5)}
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
