import React from 'react';

function Header(){
    return (
         <header className="flex flex-center flex-between">
              <img className="app-logo" src="Logo.png" alt="" />
              <h3 className="logo-text">C o o k P a d</h3>
            <h6 className="logo-caption">A Little slice of heaven</h6>
            <nav>
                <ul className="flex">
                    <li>
                        <a  href="">Home</a>
                    </li>
                    <li>
                        <a  href="">Checkout</a>
                    </li>
                </ul>
            </nav>
         </header>
    )
}

export default Header;