import './Plant.css'
import AlertItems from '../UI/AlertItems';
import '../UI/AlertItems.css';

const WaterList = (props) => {

    return (
        <AlertItems className="individual-alert">
            {/*<FirstWater firstWater={props.firstWater} Will need to calculate water date based of first water and frequency /> */}
            <div className="plant-info">
                <h2>{props.name}</h2>
            </div>
        </AlertItems>
    );

}

export default WaterList;