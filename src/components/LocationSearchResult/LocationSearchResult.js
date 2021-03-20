import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MapContainer } from "../MapContainer/MapContainer";
import { locationContext } from "../Navigate/Navigate";

const LocationSearchResult = ({ vehicle }) => {
    const [locationFrom, setLocationFrom, locationTo, setLocationTo] = useContext(locationContext);

    // useEffect(() => {
    //     fetch(
    //         `https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoiYWJkaWZ5IiwiYSI6ImNrbWgydzNreTAzZHMyb3Q0ZzA4dWxxbzUifQ.4q9Ovi_sOiAxKTGDfy7tww`
    //     ).then((data) => console.log(data));
    // }, [])

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
            <MapContainer />
        </div>
    );
};

export default LocationSearchResult;
