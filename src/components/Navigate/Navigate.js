import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import LocationSearchResult from "../LocationSearchResult/LocationSearchResult";
import PickLocation from "../PickLocation/PickLocation";
import "./Navigate.css";

export const locationContext = createContext();

const Navigate = () => {
    const [locationFrom, setLocationFrom] = useState("");
    const [locationTo, setLocationTo] = useState("");

    const { vehicleType } = useParams();
    const [vehicle, setVehicle] = useState({});
    const vehicleRef = firestore.collection("vehicles").doc(vehicleType);
    //Load data
    useEffect(() => {
        vehicleRef.get().then((res) => {
            setVehicle(res.data());
        });
    }, []);
    // console.log(vehicleType, vehicle);
    return (
        <locationContext.Provider
            value={[locationFrom, setLocationFrom, locationTo, setLocationTo]}
        >
            <div className="navigate-box">
                <div>
                    {locationFrom && locationTo ? (
                        <LocationSearchResult vehicle={vehicle} />
                    ) : (
                        <PickLocation />
                    )}
                </div>
            </div>
        </locationContext.Provider>
    );
};

export default Navigate;
