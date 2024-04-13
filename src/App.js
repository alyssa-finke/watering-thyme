import React, { useState } from 'react';
import Plants from './components/Plants/Plants'
import NewPlant from './components/NewPlant/NewPlant';
import WaterAlert from './components/Plants/WaterAlert';

const initialPlants = [
  { id: 1, name: 'Pothos', firstWater: new Date(2023, 8, 11), frequency: '1' },
  { id: 2, name: 'Money Tree', firstWater: new Date(2023, 9, 30), frequency: '2' },
  { id: 3, name: 'Snake Plant', firstWater: new Date(2023, 9, 3), frequency: '1' },
  { id: 4, name: 'Succulent', firstWater: new Date(2023, 9, 27), frequency: '1' }
];

const App = () => {

  const [plantInfo, setNewPlant] = useState(initialPlants);
  //const [plantInfo, setItems] = useState(initialPlants)
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

  //why isn't the id passing?
  const deletePlantHandler = (id) => {
    console.log(id);
    setNewPlant((items) => {
      console.log('Pressed Delete!');
      return items.filter(item => item.id !== 1);
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
