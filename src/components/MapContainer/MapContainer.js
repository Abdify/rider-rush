import GoogleMapReact from "google-map-react";
import React from "react";

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Result Found:</h2>
        <p>
            error-messages#api-not-activated-map-error <br/><br/> I don't have any credit card to activate map key!!
        </p>
        <div className="google-map">
            <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}></GoogleMapReact>
        </div>
    </div>
);

export default Map;