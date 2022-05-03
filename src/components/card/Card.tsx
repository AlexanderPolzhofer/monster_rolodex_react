import "./Card.style.css";

import { Monster } from "../../App";

type CardProps = {
    monster: Monster
}

const Card = ({ monster }: CardProps) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
            <h2>{monster.name}</h2>
            <h4>{monster.email.toLowerCase()}</h4>
        </div>
    );
}

export default Card;
