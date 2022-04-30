import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurMission from '../OurMission/OurMission';
import Repair from '../Repair/Repair';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurMission></OurMission>
            <Repair></Repair>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;