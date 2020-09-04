import React from 'react';
import {useStateValue} from './StateProvider'
import "./checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{cart}]=useStateValue()
    return (
        <div className="Checkpoint"> 
            <img className="checkoutAd" src="shopad.jpg" alt=""/>
            <div className="checkout">
                <div> 
                {cart.length===0?
                    (<h2>Shop cart is empty</h2> ):(
                    <div>
                        <h2>Your Shopping cart</h2>
                        {cart.map( (item,i)=>
                        <CheckoutProduct key={i}
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}
                        />)}
                    </div>
                )}
                </div>
                {cart.length > 0 && 
                (<div className="CheckoutTotal">
                    <Subtotal/>
                </div>) }
            </div>
        </div>
        
    );
}

export default Checkout;