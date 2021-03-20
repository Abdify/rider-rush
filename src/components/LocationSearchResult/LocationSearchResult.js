import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Map from "../MapContainer/MapContainer";
import { locationContext } from "../Navigate/Navigate";

const LocationSearchResult = ({ vehicle }) => {
    const [locationFrom, setLocationFrom, locationTo, setLocationTo] = useContext(locationContext);

    const location = {
        lat: 23.8103,
        lng: 90.4125,
    };

    return (
        <div className="location-container">
            <div className="location-search-form">
                <div className="location-search-places">
                    <ul>
                        <li>
                            <h2>{locationFrom}</h2>
                        </li>
                        To
                        <li>
                            <h2>{locationTo}</h2>
                        </li>
                    </ul>
                </div>
                {vehicle &&
                    vehicle.riders?.map((rider, i) => {
                        return (
                            <div className="rider-result-box" key={i}>
                                <img src={vehicle.rider_image} alt="rider" />
                                <p>{vehicle.type}</p>
                                <p>
                                    <FontAwesomeIcon icon={faUserFriends} /> {rider.number_of_seats}
                                </p>
                                <p>${rider.price}</p>
                            </div>
                        );
                    })}
            </div>
            <Map location={location} zoomLevel={10} />
        </div>
    );
};

export default LocationSearchResult;
