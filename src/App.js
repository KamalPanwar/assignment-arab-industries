import { Box, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import Card1 from "./components/Card1";
import { PlanData } from "./utils/PlanData";
import { Navbar } from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
import Card2 from "./components/Card2";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="pricingSection">
          <Box className="heding-div" >
            <Typography variant="h4" className="heading" >
              Choose a plan that's just right for you!
            </Typography>
            <ToggleButton />
          </Box>
          <div className="plancards">
            {PlanData.map((e) => (
              <Card1
                plantype={e.planType}
                price={e.price}
                discountedPrice={e.discountedPrice}
                buttonColor={e.buttonColor}
                usersAllowed={e.usersAllowed}
                storageAllowed={e.storageAllowed}
                supportType={e.supportType}
              />
            ))}
          </div>

          <Card2 />
        </div>
      </div>
    </>
  );
}

export default App;
