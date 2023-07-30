import React from 'react';
import './NewPlant.css';
import PlantForm from './PlantForm';

const NewPlant = (props) => {
    const savePlantInfoHandler = (enteredPlantInfo) => {
        const plantInfo = {
            ...enteredPlantInfo,
            id: Math.random().toString()
        };
        console.log(plantInfo);
        props.onAddPlant(plantInfo);
    };

    return <div className="new-plant">
        <PlantForm onSavePlantInfo={savePlantInfoHandler} />
    </div>

};

export default NewPlant;