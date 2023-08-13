import React, { useState } from 'react';
import Card from '../UI/Card';
import './WaterAlert.css';
import WaterList from './WaterList';


const WaterAlert = props => {
    return (
        <Card className="alert-card">
            <div>
                <div>
                    <h2 className="alert-message">These plants are thirsty!</h2>
                    {props.plants.map((plantInfo) => (
                        <WaterList
                            key={plantInfo.id}
                            name={plantInfo.name}
                            firstWater={plantInfo.firstWater}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default WaterAlert;