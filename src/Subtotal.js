import React from 'react';
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider"
import {GetTotalPrice} from "./Reducer"
function Subtotal() {
    const [{cart},dispatch]=useStateValue()
    return (
        <div className ="subtotal">
            <button className=".check" >Proceed to Checkout</button>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({cart.length} items):
                        <strong>{value}</strong>
                        {console.log(value)}

                    </p>
                </>
            )}
            decimalScale={2}
            value={GetTotalPrice(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

        </div>
    );
}

export default Subtotal;