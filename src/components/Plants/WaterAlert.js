import React, { useState } from 'react';
import Card from '../UI/Card';
import './WaterAlert.css';
import WaterList from './WaterList';


const WaterAlert = props => {
    const [showAlert, toggleShowAlert] = useState(true);

    return (
        <div>
            {showAlert ?
                <Card className="alert-card">
                    <button onClick={() => toggleShowAlert(!showAlert)}>X</button>
                    <div className="alert-message">
                        <div>
                            <h2>These plants are thirsty!</h2>
                            {props.plants.map((plantInfo) => (
                                <WaterList
                                    key={plantInfo.id}
                                    name={plantInfo.name}
                                    firstWater={plantInfo.firstWater}
                                />
                            ))}
                        </div>
                    </div>
                </Card> : null}
        </div>
    );
}

export default WaterAlert;