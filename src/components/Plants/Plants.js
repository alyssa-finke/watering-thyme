import React, { useState } from 'react';
import PlantFilter from './PlantFilter';
import Card from '../UI/Card';
import './Plants.css';
import PlantList from './PlantList';

const Plants = (props) => {
    const [filteredFrequency, setFilteredFrequency] = useState('1');
    //const [items, setItems] = useState(filteredFrequency); //should this be filteredFrequency or props?

    const filterChangeHandler = selectedFrequency => {
        setFilteredFrequency(selectedFrequency)
    };

    const filteredPlants = props.plants.filter(plant => {
        return plant.frequency === filteredFrequency;
    });


    return (
        <Card className="plants">
            <PlantFilter selected={filteredFrequency} onChangeFilter={filterChangeHandler} />
            <PlantList plant={filteredPlants} onDeletePlant={props.onDeletePlant} />
        </Card>
    );
}

export default Plants;