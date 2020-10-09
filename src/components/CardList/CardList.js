import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => {
    return(
        <div className='card-list'>
            {props.monsters.map((monster, index) => {
              return <Card monster={monster} key={index}/>
            })}
        </div>
    );
}

export default CardList;
