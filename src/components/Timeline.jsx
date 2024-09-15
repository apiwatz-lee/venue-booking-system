const Timeline = ({ data = [] }) => {
  return (
    <>
      {data.length > 0 && (
        <div className="day-wrapper">
          <div className="w-full bg-[#ECECEC] p-2 pl-16 font-semibold text-sm">
            <p className="text-[#787878]">Today (Mon, 20 Sep)</p>
          </div>

          <div className="pl-7">
            <div className="border-l">
              <div className="pl-5 py-5 relative">
                <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                <p className="text-sm text-gray-400">13:00 - 14:00</p>
                <p className="font-light">Lunch with Petr</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
