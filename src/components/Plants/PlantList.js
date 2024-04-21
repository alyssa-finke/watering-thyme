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
                id={plantInfo.id}
                name={plantInfo.name}
                firstWater={plantInfo.firstWater}
                frequency={plantInfo.frequency}
                onDeletePlant={() => props.onDeletePlant(plantInfo.id)}

            />
        ))}</ul>
};

export default PlantList;