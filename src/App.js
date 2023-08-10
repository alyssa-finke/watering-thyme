import React, { useState } from 'react';
import Plants from './components/Plants/Plants'
import NewPlant from './components/NewPlant/NewPlant';
import WaterAlert from './components/Plants/WaterAlert';

const initialPlants = [
  { id: 1, name: 'Pothos', firstWater: new Date(2023, 5, 1), frequency: '1' },
  { id: 2, name: 'Money Tree', firstWater: new Date(2023, 5, 1), frequency: '1' },
  { id: 3, name: 'Snake Plant', firstWater: new Date(2023, 5, 1), frequency: '1' },
  { id: 4, name: 'Succulent', firstWater: new Date(2022, 5, 1), frequency: '1' }
];

const App = () => {
  // const initialPlants = [
  //   { name: 'Pothos', firstWater: new Date(2023, 5, 1), frequency: 'once a week' },
  //   { name: 'Money Tree', firstWater: new Date(2023, 5, 1), frequency: 'once a week' },
  //   { name: 'Snake Plant', firstWater: new Date(2023, 5, 1), frequency: 'once a week' },
  //   { name: 'Succulent', firstWater: new Date(2022, 5, 1), frequency: 'twice a week' }
  // ];

  const [plantInfo, setNewPlant] = useState(initialPlants);
  const [show, toggleShow] = useState(false);
  let buttonValue = show ? "Close" : "Add Plant";

  const addPlantHandler = (plant) => {
    console.log('In App.js')
    console.log(plant);
    setNewPlant((prevPlants) => {
      return [plant, ...prevPlants];
    });
    console.log(plantInfo);
  };


  return (
    <div>
      <header>
        <WaterAlert plants={plantInfo}></WaterAlert>
        <h1>Thyme</h1>
      </header>
      <div className="new-plant-submit">
        <button onClick={() => toggleShow(!show)}>{buttonValue}</button>
      </div>{
        show ? <NewPlant onAddPlant={addPlantHandler} /> : null
      }
      <Plants plants={plantInfo} />
    </div>
  );
}

export default App;
