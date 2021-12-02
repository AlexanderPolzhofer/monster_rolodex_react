import React from 'react';
import "./CardList.style.css";
import Card from "../card/Card.js";


const Cardlist = props => {
    return (
        <div className="cardList">
            {props.monsters.map(monster => (
                <Card key={monster.id} id={monster.id} monster={monster.name} email={monster.email} />
            ))}
        </div>
    );
}

export default Cardlist;
