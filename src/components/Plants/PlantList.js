import Plant from "./Plant";
import "./PlantList.css";
import React, { useState } from 'react';

const PlantList = props => {
    //const [items, setItems] = useState(props.plant);


    if (props.plant.length === 0) {
        return <h2 className="plant-list-empty">No plants found.</h2>
    }

    console.log(props);

    // const deleteItem = (id) => {
    //    setItems((items) => {
    //       return items.filter(item => item.id !== id);
    //  });
    //};

    return <ul className="plant-list">
        {props.plant.map((plantInfo) => (
            <Plant
                key={plantInfo.id}
                id={plantInfo.id}
                name={plantInfo.name}
                firstWater={plantInfo.firstWater}
                frequency={plantInfo.frequency}
                onDeletePlant={() => props.onDeletePlant(plantInfo.Id)}

            />
        ))}</ul>
};

//how should I pass delete here? to plant?



export default PlantList;