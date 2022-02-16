import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img className="Header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
    <div
    className="header_search">
      <input
      className="header_search_input" type="text" />
      {/* Logo */}
      </div>
    <div className="header_nav">
      <div className='header__option'>
          <span className='header__optionlineOne'>Hello Suley</span>
          <span className='header__optionlineTwo'>Sign In</span>
          
      </div>

      <div className='header__option'>
          <span className='header__optionlineOne'>Returns</span>
          <span className='header__optionlineTwo'>& Orders</span>
          

      </div>

      <div className='header__option'>
          <span className='header__optionlineOne'>Your</span>
          <span className='header__optionlineTwo'>Prime</span>
          
      </div>




    </div>
    </div>


  );
}

export default Header;
