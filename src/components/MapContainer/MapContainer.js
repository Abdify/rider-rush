import { GoogleApiWrapper, Map } from "google-maps-react";
import React, { Component } from "react";

const mapStyles = {
    width: "50%",
    height: "100%",
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 23.8,
                    lng: 90.4,
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
})(MapContainer);
