import React, { useState } from 'react';
import Plants from './components/Plants/Plants'
import NewPlant from './components/NewPlant/NewPlant';
import WaterAlert from './components/Plants/WaterAlert';

const initialPlants = [
  { id: 1, name: 'Pothos', firstWater: new Date(2024, 3, 14), frequency: '1' },
  { id: 2, name: 'Money Tree', firstWater: new Date(2024, 3, 7), frequency: '2' },
  { id: 3, name: 'Snake Plant', firstWater: new Date(2024, 3, 14), frequency: '1' },
  { id: 4, name: 'Succulent', firstWater: new Date(2023, 9, 27), frequency: '1' }
];

const App = () => {

  const [plantInfo, setNewPlant] = useState(initialPlants);
  const [show, toggleShow] = useState(false);
  let buttonValue = show ? "Close" : "Add Plant";

  const addPlantHandler = (plant) => {
    setNewPlant((prevPlants) => {
      return [plant, ...prevPlants];
    });
  };

  const deletePlantHandler = (id) => {
    setNewPlant((items) => {
      return items.filter(item => item.id !== id);
    });
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
      <Plants plants={plantInfo} onDeletePlant={deletePlantHandler} />
    </div>
  );
}

export default App;
