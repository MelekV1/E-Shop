import React  from 'react';
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from './StateProvider'

function Header() {
    const [{cart}]=useStateValue()
    return (
        <nav className="header">
            <Link to="/">
                <div className="logo">
                    <span >Shop</span>
                </div>
            </Link>
            <div className="SearchBar">
                <input type="text" className="SearchInput"/>
                <SearchIcon className="SearchIcon" />
            </div>
            <div className="NavHead">
                
                <Link to="/Checkout" classname="link">
                    <div className="option">
                        <span className="option1">Your</span>
                        <span className="option2">Prime</span>
                    </div>
                </Link>

                <Link to="/Checkout" classname="link">
                    <div className="option">
                        <span className="option1">Returns</span>
                        <span className="option2">&Orders</span>
                    </div>
                </Link>

                <Link to="/Checkout" classname="link">
                    <div className="optionBasket">
                        <span className="option2"><ShoppingCartIcon/></span>
                        <span className="option2">{cart.length}</span>
                    </div>
                </Link>
                
            </div>
           
        </nav>
    );
}

export default Header;