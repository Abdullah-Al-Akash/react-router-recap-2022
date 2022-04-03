import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirts from '../hooks/useTshirts';
import TShirts from '../TShirts/TShirts';
import './Home.css';

const Home = () => {
        const [tShirts, setTShirts] = useTshirts();
        const [cart, setCart] = useState([]);

        const handleAddToCart = (selectedItem) => {
                console.log(selectedItem);
        }
        return (
                <div className="home-container">
                        <div className="t-shirt-container">
                                {
                                        tShirts.map(tShirt => <TShirts
                                                key={tShirt._id}
                                                tShirt={tShirt}
                                                handleAddToCart={handleAddToCart}
                                        ></TShirts>)
                                }
                        </div>
                        <div className="cart-container">
                                <Cart></Cart>
                        </div>
                </div>
        );
};

export default Home;