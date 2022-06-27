import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const location = {
    address: "5757 Transit Road, East Amherst, New York",
    lat: 43.0056,
    lng: -78.6964,
  };

  const zoomLevel = 17;

  return (
    <>
      <div className="google-map">
        <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel} />
      </div>
    </>
  );
};

export default Map;
