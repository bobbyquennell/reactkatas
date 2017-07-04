import React from 'react';
import Card from './Card';

const CardList = ({cardDataArray})=>{

    return(
        <div>
            {cardDataArray.map(card=><Card key={card.name} {...card}/>)}
        </div>
    );
};

export default CardList;
