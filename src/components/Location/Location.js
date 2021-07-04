import React from "react";
import GoogleMapReact from "google-map-react";
import "./Location.css";

function Location() {
  return (
    <div className="location p-5 md:pl-36 md:pr-36 w-full">
      <div className="location__heading">Our Location</div>
      <div className="location__location">
        <GoogleMapReact
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        />
      </div>
    </div>
  );
}

export default Location;
