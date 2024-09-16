import { useState, useEffect } from "react";
import useBooking from "../hooks/useBooking";
import useDate from "../hooks/useDate";

const TodayBooking = () => {
  const { bookingEvents, roomId, handleCheckUpComingBookings } = useBooking();
  const { currentDateName, currentDayAndMonth, timeFormat } = useDate();
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    if (bookingEvents?.today.length > 0) {
      const upcomingList = handleCheckUpComingBookings(bookingEvents?.today);
      setUpcomingBookings(upcomingList);
    }
  }, [bookingEvents]);

  return (
    <section className="w-5/12 min-w-2/6 flex flex-col items-end gap-12 bg-[#46529D]">
      {/* RoomId */}
      <div className="w-4/5 bg-[#2EBAEE] text-white pt-10 pl-5 pb-5 text-4xl font-semibold h-[100px]">
        {roomId}
      </div>

      {/* Upcoming */}

      <div className="w-4/5">
        <p className="text-white text-sm">Upcoming</p>

        <div className="mt-10">
          <p className="text-4xl font-thin -tracking-tighter text-white opacity-50">
            {`${currentDateName()}`}
          </p>
          <p className="text-4xl font-thin -tracking-tighter text-white mt-2">
            {`${currentDayAndMonth()}`}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {upcomingBookings?.length > 0 ? (
            upcomingBookings.map((booking) => (
              <div key={booking?.id}>
                <p className="text-sm text-white opacity-50 ">
                  {`${timeFormat(booking?.startTime)} -
                ${timeFormat(booking?.endTime)}`}
                </p>
                <p className="text-white">{`${booking?.title}`}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-start justify-center h-40">
              <p className="text-white opacity-50 text-sm">
                No upcoming bookings
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TodayBooking;
