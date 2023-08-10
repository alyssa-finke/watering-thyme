import React, { useState } from 'react';
import Card from '../UI/Card';
import './WaterAlert.css';
import WaterList from './WaterList';



const WaterAlert = props => {
    // const [isShow, setShow] = useState(true);
    // const handleClose = (e) => {
    //     e.preventDefault();
    //     setShow(false);
    // };

    return (
        <Card className="alert-card">
            <div>
                {/*<div className="alert-title" show={isShow}>Water your plants!
                    <span className="closebtn" onClick={handleClose}>   &times;
    </span></div>*/}
                <div>
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