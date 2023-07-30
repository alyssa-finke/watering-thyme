import FirstWater from './FirstWater';
import Card from '../UI/Card';
import './Plant.css'

const Plant = (props) => {

    return (
        <li>
            <Card className="individual-plant">
                <FirstWater firstWater={props.firstWater} />
                <div className="plant-info">
                    <h2>{props.name}</h2>
                    <div className="water-frequency">{props.frequency}</div>
                </div>
            </Card>
        </li>
    );

}

export default Plant;