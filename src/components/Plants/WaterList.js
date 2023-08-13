import './Plant.css'
import AlertItems from '../UI/AlertItems';
import '../UI/AlertItems.css';
import React, { useState } from 'react';

const WaterList = (props) => {
    const [active, setActive] = useState(false);

    function closeItem() {
        setActive(true);
    }

    return (
        <div className={active ? "close" : "open"}>
            <AlertItems className="individual-alert">
                {/*<FirstWater firstWater={props.firstWater} Will need to calculate water date based of first water and frequency /> */}
                <div className="plant-to-water">
                    <h2>{props.name} </h2>
                </div>
                <button onClick={closeItem}>X</button>
            </AlertItems>
        </div>
    );

}

export default WaterList;