/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, useState } from 'react';
// import { Box, Typography } from '@mui/material';
import Flights from './Flights';
import Hotels from './Hotels';
import Cars from './Cars';
import Insurance from './Insurance';
import Travel from './Travel';
import Visa from './Visa';
import Button from './shared/Button'


// import { Flight, DriveEta as InsuranceIcon, FlightTakeoff } from '@mui/icons-material';
// import { BeachAccess } from '@mui/icons-material';
// import { Payment } from '@mui/icons-material';
// import { DirectionsCar } from '@mui/icons-material';
// import { Hotel } from '@mui/icons-material';
// import { LocalHospital } from '@mui/icons-material';

import {Link} from 'react-router-dom';
// commented now
// import Video from './Video';
// import ReactPlayer from 'react-player'

const FlightForm :FC<{data?:any}>= ({data}) => {
  // dashboard state management
  const [showFlights, setShowFlights] = useState(true);
  const [showHotels, setShowHotels] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showTravel, setShowTravel] = useState(false);
  const [showVisa, setShowVisa] = useState(false);
  const[listingpath, setListingpath] = useState('');



  const handleClickFlights = () => {
    setListingpath('/flightslisting')
    setShowFlights(true);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickHotels = () => {
    setListingpath('/hotelslisting')
    setShowFlights(false);
    setShowHotels(true);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickCars = () => {
    setListingpath('/carslisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(true);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickInsurance = () => {
    setListingpath('/insurancelisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(true);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickTravel = () => {
    setListingpath('/travellisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(true);
    setShowVisa(false);
  };

  const handleClickVisa = () => {
    setListingpath('/visalisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(true);
  };

  
  return (
    <div>
      {/* commented now */}
    {/* <Video /> */}
    


    <div  className='border border-gray-300 rounded-lg p-2   shadow-2xl shadow-zinc-950  bg-zinc
 md:mx-[50px]  lg:mx-[100px]  xl:mx-[160px]   bg-secondarycolor opacity-90'>
    



      <div   className="flex p-1 justify-center  "  >
      
      <button
  className={`  mr-5 font-bold text-[19px] flex  ${
    showFlights ? 'text-primarycolor ' : 'text-white'
  } hover:text-primarycolor `}
  onClick={handleClickFlights}
>
  {/* <FlightTakeoff /> */}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-luggage mt-1 "><path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
  Tour Package
</button>
<button
  className={`mr-5 font-bold text-lg text-[21px] flex   ${
    showHotels ? 'text-primarycolor ' : 'text-white'
  } hover:text-primarycolor `}
  onClick={handleClickHotels}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bed mt-1 mr-1"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
  Hotels
</button>
<button
  className={`mr-5 font-bold text-lg text-[21px] flex   ${
    showCars ? 'text-primarycolor ' : 'text-white'
  } hover:text-primarycolor `}
  onClick={handleClickCars}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-taxi-front mt-1 mr-1"><path d="M10 2h4"/><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
  Cars
</button>



      </div> 
     
      <div className="border border-solid border-gray-300 h-0"></div>
  <div>
  
      {showFlights && <Flights data={data} />}
      {showHotels && <Hotels />}
      {showCars && <Cars />}
     
      {
        
      }
      {/* <div className="flex justify-center ">
  
        <Link href='/flightslisting'>
        <button type="submit"className='bg-teal-700 text-white px-7 py-4 rounded-md shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 w-40' >Book now</button>
        </Link>
          
    </div> */}
  </div>
     
    </div>
    </div>

  );
};

export default FlightForm;
