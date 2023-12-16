import React from "react";
import "./SearchResult.css";
// import FavoriteBordeIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}:any) {
  return (
    <div className="searchResult">
      <img src={img} alt="" className="object-cover"/>
      {/* <FavoriteBordeIcon className="searchResult__heart" /> */}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p className="font-bold">{location}</p>
          <h3 className="font-extrabold">{title}</h3>
          <p>____</p>
          <p className="font-bold">{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            {/* <StarIcon className="searchResult__star" /> */}
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2 className="font-bold">{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
