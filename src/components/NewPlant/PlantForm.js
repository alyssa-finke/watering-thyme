import React, { useState } from 'react';
import './PlantForm.css';

const PlantForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredFrequency, setEnteredFrequency] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const frequencyChangeHandler = (event) => {
        setEnteredFrequency(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const firstWaterDate = new Date(enteredDate);
    const firstWaterTimeZone = firstWaterDate.toLocaleString('en-US', {
        timeZone: 'UTC'
    });
    const firstWaterFinal = new Date(firstWaterTimeZone);

    const submitHandler = (event) => {
        event.preventDefault();

        const plantInfo = {
            name: enteredName,
            frequency: enteredFrequency,
            firstWater: firstWaterFinal
        };

        props.onSavePlantInfo(plantInfo);
        setEnteredName('');
        setEnteredFrequency('');
        setEnteredDate('');

        console.log('In Plant Form')
        console.log(plantInfo)

    };

    return (

        <form onSubmit={submitHandler}>
            <div className="new-plant__controls">
                <div className="new-plant__control">
                    <label>
                        Plant Name
                    </label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="new-plant__control">
                    <label>
                        Water Frequency (in weeks)
                    </label>
                    <input type="number" value={enteredFrequency} onChange={frequencyChangeHandler} />
                </div>
                <div className="new-plant__control">
                    <label>
                        Date of First Water
                    </label>
                    <input type="date" min="2022-01-01" max="2030-01-01" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-plant__actions"><button type="submit">Add Plant</button></div>
        </form>
    )
};


export default PlantForm;