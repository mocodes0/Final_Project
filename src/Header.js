import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import  ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className='header'>
      <img className="Header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
    <div
    className="header_search">
      <input
      className="header_search_input" type="text" />
      <SearchIcon
        className="header_searchIcon"  />
      </div>
    <div className="header_nav">
      <div className='header_option'>
          <span className='header__optionlineOne'>Hello Guest</span>
          <span className='header__optionlineTwo'>Sign In</span>
          
      </div>

      <div className='header_option'>
          <span className='header_optionlineOne'>Returns</span>
          <span className='header_optionlineTwo'>& Orders</span>
          

      </div>

      <div className='header_option'>
          <span className='header_optionlineOne'>Your</span>
          <span className='header_optionlineTwo'>Prime</span>
          
      </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionlineTwo header_basketCount">0</span>
        </div> 


    </div>
    </div>


  );
}

export default Header;
