import React, { useContext, useRef } from 'react';
import { MapContainer } from '../MapContainer/MapContainer';
import { locationContext } from '../Navigate/Navigate';
import '../Navigate/Navigate.css';


const PickLocation = () => {
    const [locationFrom, setLocationFrom, locationTo, setLocationTo] = useContext(locationContext);
    const locationFromRef = useRef();
    const locationToRef = useRef();

    function handleLocationSearch(e){
        e.preventDefault();
        setLocationFrom(locationFromRef.current.value);
        setLocationTo(locationToRef.current.value);
    }

    return (
        <div className="location-search">
            <form className="location-search-form" onSubmit={handleLocationSearch}>
                <p>Pick from</p>
                <input type="text" placeholder="select place" required ref={locationFromRef} />
                <p>Pick to</p>
                <input type="text" placeholder="select place" required ref={locationToRef} />
                <button className="btn submit-btn">Search</button>
            </form>
            <MapContainer />
        </div>
    );
};

export default PickLocation;