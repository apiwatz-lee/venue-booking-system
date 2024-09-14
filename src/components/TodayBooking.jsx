const TodayBooking = () => {
  return (
    <section className="w-5/12 min-w-2/6 flex flex-col items-end gap-12 bg-[#46529D] ">
      {/* RoomId */}
      <div className="w-4/5 bg-[#2EBAEE] text-white pt-10 pl-5 pb-5 text-4xl font-semibold">
        A101
      </div>

      {/* Upcoming */}
      <div className="w-4/5">
        <p className="text-white text-sm">Upcoming</p>

        <div className="mt-10">
          <p className="text-4xl font-thin -tracking-tighter text-white opacity-50">
            Monday
          </p>
          <p className="text-4xl font-thin -tracking-tighter text-white mt-2">
            28 Sep
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          <div>
            <p className="text-sm text-white opacity-50 ">10:00 - 11:00</p>
            <p className="text-white">Meeting with John</p>
          </div>

          <div>
            <p className="text-sm text-white opacity-50">10:00 - 11:00</p>
            <p className="text-white">Meeting with John</p>
          </div>

          <div>
            <p className="text-sm text-white opacity-50">10:00 - 11:00</p>
            <p className="text-white">Meeting with John</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayBooking;
