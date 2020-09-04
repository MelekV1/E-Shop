import React from 'react';
import "./home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
           <img
            className="background"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            alt=""
           /> 
           <div className="home_row">
            <Product 
                title="Handheld 3-Axis Smartphone Gimbal Stabilizer"
                price={149.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71yauPbL7KL._AC_SY355_.jpg"
                rating={4}
                id={1}/>
             <Product 
                title="USB 3.0 Hub"
                price={13.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61UjWiygcyL._AC_SX522_.jpg"
                rating={4}
                id={2}/>
            <Product 
                title="Gaming Headset with Mic"
                price={24.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71%2Bo0H2KWOL._AC_SX679_.jpg"
                rating={5}
                id={3}/>
           </div>
        </div>
    );
}

export default Home;