import useBooking from "../hooks/useBooking";
import useDate from "../hooks/useDate";

const TodayBooking = () => {
  const { bookingEvents, roomId } = useBooking();
  const { handleUpcomingDate, handleTimeFormatted } = useDate();

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
            {`${handleUpcomingDate().dayName}`}
          </p>
          <p className="text-4xl font-thin -tracking-tighter text-white mt-2">
            {`${handleUpcomingDate()?.day} ${handleUpcomingDate()?.month}`}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {bookingEvents?.today?.length === 0 ? (
            <p className="text-white opacity-50">No bookings today</p>
          ) : (
            bookingEvents?.today?.map((booking) => (
              <div key={booking?.id}>
                <p className="text-sm text-white opacity-50 ">
                  {`${handleTimeFormatted(booking?.startTime)} -
                ${handleTimeFormatted(booking?.endTime)}`}
                </p>
                <p className="text-white">{`${booking?.title}`}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TodayBooking;
