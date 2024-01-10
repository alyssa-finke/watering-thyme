import Plant from "./Plant";
import "./PlantList.css";
import React, { useState } from 'react';

const PlantList = props => {
    const [items, setItems] = useState(props.plant);
    console.log(items);

    if (props.plant.length === 0) {
        return <h2 className="plant-list-empty">No plants found.</h2>
    }


    const deleteItem = (id) => {
        setItems((items) => {
            return items.filter(item => item.id !== id);
        });
    };


    return <ul className="plant-list">
        {items.map((plantInfo) => ( //when this is items.map, it successfully deletes but breaks the filter
            <Plant
                key={plantInfo.id}
                id={plantInfo.id}
                name={plantInfo.name}
                firstWater={plantInfo.firstWater}
                frequency={plantInfo.frequency}
                buttonClickHandler={deleteItem}
            />
        ))}</ul>
};

export default PlantList;