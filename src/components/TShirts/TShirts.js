import React from 'react';
import './TShirts.css';

const TShirts = ({ tShirt, handleAddToCart }) => {
        const { name, picture, price, gender, _id } = tShirt;
        return (
                <div className="t-shirt">
                        <img src={picture} className="" alt="" />
                        <h3>{name}</h3>
                        <h4>Price: ${price}</h4>
                        <button onClick={() => { handleAddToCart(tShirt) }}>Add To Cat</button>
                </div>
        );
};

export default TShirts;