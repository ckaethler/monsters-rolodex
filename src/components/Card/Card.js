import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <img 
                alt="monster" 
                src={`https://robohash.org/${props.monster.id}?s
                    et=set2&size=180x180`} />
            <h2 key={props.monster.id}>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}

export default Card;