import Plant from "./Plant";
import "./PlantList.css";

const PlantList = props => {
    if (props.plant.length === 0) {
        return <h2 className="plant-list-empty">No plants found.</h2>
    }
    return <ul className="plant-list">
        {props.plant.map((plantInfo) => (
            <Plant
                key={plantInfo.id}
                name={plantInfo.name}
                firstWater={plantInfo.firstWater}
                frequency={plantInfo.frequency}
            />
        ))}</ul>
};

export default PlantList;