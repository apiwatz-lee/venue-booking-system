import { useParams } from "react-router";
import TodayBooking from "../components/TodayBooking";
import TabsByPeriod from "../components/TabsByPeriod";

const BookingPage = () => {
  // const params = useParams();

  // const searchParams = new URLSearchParams(window.location.search);
  // const roomId = searchParams.get("roomId");

  return (
    <main className="border flex h-screen">
      <TodayBooking />
      <TabsByPeriod />
    </main>
  );
};

export default BookingPage;
