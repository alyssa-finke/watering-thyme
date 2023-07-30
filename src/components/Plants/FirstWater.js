import './FirstWater.css';

function FirstWater(props) {
    const month = props.firstWater.toLocaleString('en-US', { month: 'short' });
    const day = props.firstWater.toLocaleString('en-US', { day: '2-digit' });
    const year = props.firstWater.toLocaleString('en-us', { year: 'numeric' })


    return (
        <div className="first-water-date">
            <div className="first-water-month">{day}</div>
            <div className="first-water-day">{month}</div>
            <div className="first-water-year">{year}</div>
        </div>
    );

}

export default FirstWater;