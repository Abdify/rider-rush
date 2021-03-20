import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import ImageCredits from '../ImageCredits/ImageCredits';
import './Home.css';


const Home = () => {
        const [vehicles, setVehicles] = useState([]);

        //Load data from firestore
        const vehiclesRef = firestore.collection("vehicles");
        useEffect(() => {
            vehiclesRef.get().then((res) => {
                let vehiclesList = [];
                res.forEach((vehicle) => {
                    console.log(vehicle.data());
                    vehiclesList.push(vehicle.data());
                });
                setVehicles(vehiclesList);
            });
        }, []);

    return (
        <div className="home">
            {vehicles &&
                vehicles.map((vehicle) => {
                    return (
                        <Link to={`/go/${vehicle.type}`}
                            key={vehicle.type}
                            className="vehicle-box"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${vehicle.image})`, backgroundSize: '160%', backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* <img src={vehicle.image} alt="vehicle image" /> */}
                            <h2>{vehicle.type}</h2>
                        </Link>
                    );
                })}
            <ImageCredits />
        </div>
    );
};

export default Home;