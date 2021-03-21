import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "50%",
    minWidth: "330px",
    height: "400px",
    margin: "10px auto"
};

const center = {
    lat: 23.8103,
    lng: 90.4125,
};

function Map() {
    return (
        <LoadScript googleMapsApiKey="">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
                {/* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(Map);
