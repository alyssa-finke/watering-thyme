import FirstWater from './FirstWater';
import Card from '../UI/Card';
import './Plant.css'

const Plant = (props) => {

    const handleDeleteItem = (id) => {
        console.log('made it into handleDeleteItem')
        console.log(id);
        props.onDeletePlant(id);
    };
    return (
        <li>
            <Card className="individual-plant">
                <FirstWater firstWater={props.firstWater} />
                <div className="plant-info">
                    <h2>{props.name}</h2>
                    <div className="water-frequency">{props.frequency}</div>
                </div>
                <button id={props.id} className="delete-button" onClick={() => handleDeleteItem(props.id)}>Delete</button>
            </Card>
        </li>
    );

}

export default Plant;