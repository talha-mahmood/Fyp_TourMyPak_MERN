import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";

export default function PlacePage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);


 


  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">
        {/* {place.title} */}
        title
        </h1>
      <AddressLink>
        {/* {place.address} */}
        address
        </AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {/* {place.description} */}
            place description
          </div>
          Check-in: 
          {/* {place.checkIn} */}
          place checkin
          <br />
          Check-out: 
          {/* {place.checkOut} */}
          place checkout
          <br />
          Max number of guests:
            place guests
           {/* {place.maxGuests} */}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          place extrainfo
          </div>
      </div>
    </div>
  );
}
