import React, { FC, useEffect, useState } from "react";
// import { Box } from '@mui/material';
import Oneway from "./Oneway";
import Roundtrip from "./Roundtrip";
import Multicity from "./Multicity";


const Flights: FC<{ data?: any }> = ({ data }) => {
  const [flightOption, setFlightOption] = useState("oneway");

  useEffect(() => {
    if(data?.flights) // for multicity data
    {
      const flightsArray = JSON.parse(data.flights);
      const flightTripType=flightsArray[0].tripType.toString()
       setFlightOption(flightTripType)

    }

    else if(data?.tripType)// for oneway and roundtrip data
    {

    console.log('data trip type is', data.tripType)

    setFlightOption(data.tripType)
    }

  }, []);

  const handleSelectOption = (option: any) => {
    setFlightOption(option);
  };

  return (
    <div className="p-2 px-5 bg-primarycolor">
      <div className="flex flex-row">
        <button
          className={`  text-white px-3 py-2 mb-2 rounded-xl border-gray-600  shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300  ${
            flightOption === "oneway" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("oneway")}
        >
          One way
        </button>
        <button
          className={`text-white px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            flightOption === "roundtrip" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("roundtrip")}
        >
          Round Trip
        </button>
        <button
          className={`text-white px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            flightOption === "multicity" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("multicity")}
        >
          Multicity
        </button>
      </div>
      <div>
        {flightOption === "oneway" && <Oneway data={data} />}
        {flightOption === "roundtrip" && <Roundtrip data={data} />}
        {flightOption === "multicity" && <Multicity data={data} />}
      </div>
    </div>
  );
};

export default Flights;
