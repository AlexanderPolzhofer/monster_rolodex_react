import "./CardList.style.css";
import { Monster } from "../../App";
import Card from "../card/Card";

type CardListProps = {
    monsters: Monster[]
}

const Cardlist = ({ monsters }: CardListProps) => {
    return (
        <div className="card-list">
            {monsters.map(monster => (
                <Card
                    key={monster.id}
                    monster={monster}
                />
            ))}
        </div>
    );
}

export default Cardlist;
