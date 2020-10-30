import React from 'react'
import './Nav.css';

const Nav = () => {

    function hamburgerAnimation(e) {
        e.classList.toggle("spin");
      }

    return(
        <nav>
            <div className='header'>
                <div class="container" onclick={hamburgerAnimation}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav