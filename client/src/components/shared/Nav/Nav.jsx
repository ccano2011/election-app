import React, {Component} from 'react'
import './Nav.css';
import Burger from 'react-css-burger';
import BallotImg from '../../../Assets/ballot.svg';
import LogoImg from '../../../Assets/logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }
    
    state = {
        active: false,
    };

    displayMobileMenu = () => {
        return (

            <ul className='hamburgerDropDown'>
                <li className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black', fontFamily: 'comicsans' }} to='/' ><h4 className="linky">Home</h4></NavLink></li>
                <li className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/'><h4>Track Your Ballot</h4></NavLink></li>
                <li className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/'><h4>Admin Only</h4></NavLink></li>
            </ul>
        )
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={35}
                    height={25}
                    strokeWidth={3}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.3}
                />
            )
        }

    render() {
    return(
        <div>
        <nav>
            <div className='header'>
                <div className='burger'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayHamburgerMenu(): this.displayHamburgerMenu()}
                </div>
                
                <NavLink className='link' to='/'>
                    <div className='logo-div'>
                        <img className='logo' src={LogoImg} alt='logo' height='65' weight='65'/>
                    </div>
                </NavLink>
                <NavLink className='link' to='/request-ballot'>
                    <div className='ballotIcon'>
                        <img className='svg' src={BallotImg} alt='ballot' />
                    </div>
                </NavLink>
                
            </div>
        </nav>
        </div>
    )
}
}

export default Nav