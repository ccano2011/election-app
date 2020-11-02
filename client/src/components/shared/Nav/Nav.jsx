import React, {Component} from 'react'
import './Nav.css';
import BallotImg from '../../../Assets/ballot.svg';
import LogoImg from '../../../Assets/logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayMenu = () => {
        return (

            <ul className='hamburgerDropDown'>
                <li className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black'}} to='/' >Home</NavLink></li>
                <li className='nav-link' id='nav2'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/status'>Track Your Ballot</NavLink></li>
                <li className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/'>Admin Only</NavLink></li>
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
                    borderRadius={2}
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
                { this.state.open ?  this.displayMenu() : null}
                { window.innerWidth > 0 ? this.displayHamburgerMenu(): null }
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