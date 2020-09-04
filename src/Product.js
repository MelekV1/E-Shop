import React from 'react';
import "./product.css"
import {useStateValue} from './StateProvider'

function Product({title,image,price,rating,id}) {
    const [,dispatch]=useStateValue()
    
    const  AddToCart = ()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                title:title,
                image:image,
                price:price,
                rating:rating,
                id:id
            }
        })
    };

    return (
        <div className="product">
            <div className="info">
                <p>{title}</p>
                <p className="product_price">$ <strong>{price}</strong></p>
                <div className="productRating">
                    {
                    Array(rating)
                    .fill()
                    .map(
                        (el)=>(<span role="img" aria-label="Star">⭐</span>)
                        )}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={AddToCart}>Add to cart</button>
        </div>
    );
}

export default Product;