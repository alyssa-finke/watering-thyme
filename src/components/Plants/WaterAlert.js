import React, { useState } from 'react';
import Card from '../UI/Card';
import './WaterAlert.css';
import WaterList from './WaterList';


const WaterAlert = props => {
    let [showAlert, toggleShowAlert] = useState(true);

    //set today so that can compare water date to today
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    //keep for now while testing filter
    var pseudoDay = new Date(2023, 9, 10);
    console.log('Pseudo Day');
    console.log(pseudoDay);

    const filteredData = props.plants.filter((item) => {
        //get each firstWater as date object
        const firstWaterDate = new Date(item.firstWater);

        //Take the difference between today and the firstWaterDate - converted to days
        const daysDifference = Math.floor((pseudoDay - firstWaterDate) / (1000 * 60 * 60 * 24));

        //Take water frequency from props
        const waterFrequency = item.frequency;

        //return if evenly divisible by waterFrequency (ie 7 days, 14 days, 21 days)
        return daysDifference >= 0 && (daysDifference % waterFrequency === 0);

    });

    //if it's not water day for any of the plants, don't show the alert box
    const filteredCount = filteredData.length;
    if (filteredCount === 0) {
        showAlert = false;
    }

    //on closing of individual alerts, decrement length. when 0, close outer alert box
    let startingFilterCount = filteredData.length;
    const recalculate = () => {
        startingFilterCount = startingFilterCount - 1;
        if (startingFilterCount === 0) {
            toggleShowAlert();
        }
    }

    return (
        <div>
            {showAlert ?
                <Card className="alert-card">
                    <button onClick={() => toggleShowAlert(!showAlert)}>X</button>
                    <div className="alert-message">
                        <div>
                            <h2>These plants are thirsty!</h2>
                            {filteredData.map((plantInfo) => (
                                <WaterList
                                    key={plantInfo.id}
                                    name={plantInfo.name}
                                    firstWater={plantInfo.firstWater}
                                    onClick={recalculate}
                                />
                            ))}
                        </div>
                    </div>
                </Card> : null}
        </div>
    );
}

export default WaterAlert;