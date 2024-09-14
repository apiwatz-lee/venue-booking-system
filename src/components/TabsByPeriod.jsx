import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

const TabsByPeriod = () => {
  const [tab, setTab] = useState("this week");

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
              <Tab label="THIS WEEK" value="this week" />
              <Tab label="NEXT WEEK" value="next month" />
              <Tab label="WHOLE MONTH" value="whole month" />
            </TabList>
          </Box>

          <div
            className="w-full overflow-y-scroll"
            style={{ height: "calc(90vh - 40px)" }}
          >
            <TabPanel value="this week">
              <div className="pl-7">
                <div className="border-l h-10"></div>
              </div>

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
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                  <div className="border-l">
                    <div className="pl-5 py-5 relative">
                      <span className="absolute -left-1 top-6 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      <p className="text-sm text-gray-400">13:00 - 14:00</p>
                      <p className="font-light">Lunch with Petr</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="next month">Item Two</TabPanel>
            <TabPanel value="whole month">Item Three</TabPanel>
          </div>
        </TabContext>
      </Box>
    </section>
  );
};

export default TabsByPeriod;
