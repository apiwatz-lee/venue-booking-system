import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import { useEffect } from "react";

function App() {
  const routes = [{ path: "/bookings/:period", element: <BookingPage /> }];
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/bookings/thisweek?roomId=A101");
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
