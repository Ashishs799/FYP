import React, { useContext, useEffect } from "react";
import "../../styles/SellCar.css";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import {
  Stepper,
  StepLabel,
  Step
} from "@mui/material";
import { multiStepContext } from "../../../contextApi/SellCarContext";
export const SellCar = () => {
  const { currentStep, finalSellerData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="sections">
      <div className="section_wrapper public-m">
        <h1>Sell Your Car Online</h1>
        {/* <div className="sellcar_form"> */}
        <div className="center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        
      </div>
    </div>
  );
};
