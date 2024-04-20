import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../../../contextApi/SellCarContext";

export const SecondStep = () => {
  const { setStep, sellerData, setSellerData } = useContext(multiStepContext);
  return (
    <div>
      <h2>Seller Info</h2>
      <div>
        <TextField
          label="Licence Plate"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={sellerData["licence_plate"]}
          onChange={(e) =>
            setSellerData((prevSellerData) => ({
              ...prevSellerData,
              licence_plate: e.target.value,
            }))
          }
        ></TextField>
      </div>
      <div>
        <TextField
          label="VIN"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={sellerData["VIN"]}
          onChange={(e) =>
            setSellerData((prevSellerData) => ({
              ...prevSellerData,
              VIN: e.target.value,
            }))
          }
        ></TextField>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};
