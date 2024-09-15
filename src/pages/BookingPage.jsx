import TodayBooking from "../components/TodayBooking";
import TabsByPeriod from "../components/TabsByPeriod";

const BookingPage = () => {
  return (
    <main className="flex h-screen">
      <TodayBooking />
      <TabsByPeriod />
    </main>
  );
};

export default BookingPage;
