import React from 'react';
import './TShirts.css';

const TShirts = (props) => {
        const { name, picture, price, gender, _id } = props.tShirt;
        return (
                <div className="t-shirt">
                        <img src={picture} className="" alt="" />
                        <h3>{name}</h3>
                        <h4>Price: ${price}</h4>
                        <button>Add To Cat</button>
                </div>
        );
};

export default TShirts;