import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBooking from "../hooks/useBooking";
import Timeline from "./Timeline";
import VerticalLine from "./VerticalLine";

const TabsByPeriod = () => {
  const [tab, setTab] = useState("thisweek");
  const { period } = useParams();
  const navigate = useNavigate();
  const { bookingEvents, roomId } = useBooking();
  const periodList = ["thisweek", "nextweek", "wholemonth"];

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const customTabsStyle = {
    width: "100%",

    ".MuiTabPanel-root": {
      padding: 0,
    },
    "& .MuiTab-root": {
      marginRight: 4,
    },
    "& .Mui-selected": {
      color: "#000", // Active color
    },

    "& .MuiTab-root:last-child": {
      marginRight: 0,
    },
  };

  useEffect(() => {
    if (!periodList.includes(period)) {
      navigate("/bookings/thisweek?roomId=A101");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-7/12">
      <Box sx={customTabsStyle}>
        <TabContext value={tab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              paddingTop: "52px",
              paddingLeft: "30px",
              background: "#EFEEEC",
              height: "100px",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab
                label="THIS WEEK"
                value="thisweek"
                onClick={() => navigate(`/bookings/thisweek?roomId=${roomId}`)}
              />
              <Tab
                label="NEXT WEEK"
                value="nextweek"
                onClick={() => navigate(`/bookings/nextweek?roomId=${roomId}`)}
              />
              <Tab
                label="WHOLE MONTH"
                value="wholemonth"
                onClick={() =>
                  navigate(`/bookings/wholemonth?roomId=${roomId}`)
                }
              />
            </TabList>
          </Box>

          <div
            className="w-full overflow-y-scroll"
            style={{ height: "calc(90vh - 40px)" }}
          >
            <TabPanel value="thisweek">
              <Timeline data={bookingEvents?.thisWeek} />
            </TabPanel>
            <TabPanel value="nextweek">
              <Timeline data={bookingEvents?.nextWeek} />
            </TabPanel>
            <TabPanel value="wholemonth">
              <Timeline data={bookingEvents?.wholeMonth} />
            </TabPanel>
          </div>
        </TabContext>
      </Box>
    </section>
  );
};

export default TabsByPeriod;
