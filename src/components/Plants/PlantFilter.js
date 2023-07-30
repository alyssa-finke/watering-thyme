import React from 'react';

import './PlantFilter.css';

const PlantFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    };

    return (
        <div className='plant-filter'>
            <div className='plant-filter__control'>
                <label>Filter by Water Frequency</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </div>
        </div>
    );
};

export default PlantFilter;