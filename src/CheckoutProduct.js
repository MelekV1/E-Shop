import React from 'react';
import "./CheckoutProduct.css"
import {useStateValue} from './StateProvider'

function CheckoutProduct({id,title,price,image,rating}) {
    const [{cart},dispatch]=useStateValue()
    console.log(cart)
    const  RemoveFromCart = ()=>{
            dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    };
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutImage" src={image} alt="" />
            <div className="CheckoutInfo">
                <p className="CheckoutTitle">{title}</p>
                <p className="CheckoutPrice">$ <strong>{price}</strong></p>
            <div className="CheckoutProductRating">
                    {
                    Array(rating)
                    .fill()
                    .map(
                        (el)=>(<span role="img" aria-label="Star">⭐</span>)
                        )}
            </div>
            <button onClick={RemoveFromCart}>Remove from cart</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;