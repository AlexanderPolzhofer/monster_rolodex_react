import "./Card.style.css";

const Card = ({ monster }) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
            <h2>{monster.name}</h2>
            <h4>{monster.email}</h4>
        </div>
    );
}

export default Card;
