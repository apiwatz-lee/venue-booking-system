import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import { useEffect } from "react";
import useBooking from "./hooks/useBooking";

function App() {
  const navigate = useNavigate();
  const { roomId } = useBooking();
  const routes = [{ path: "/bookings/:period", element: <BookingPage /> }];
  const roomLists = ["A101", "A102", "Auditorium"];

  useEffect(() => {
    if (!roomId || !roomLists.includes(roomId)) {
      navigate("/bookings/thisweek?roomId=A101");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route?.path}
            path={route?.path}
            element={route?.element}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
