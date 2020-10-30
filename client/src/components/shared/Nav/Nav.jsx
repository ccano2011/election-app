import React, {Component} from 'react'
import './Nav.css';
import Burger from 'react-css-burger';
import BallotImg from '../../../Assets/ballot.svg';
import LogoImg from '../../../Assets/logo.png';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }
    
    state = {
        active: false,
    };

    render() {
    return(
        <div>
        <nav>
            <div className='header'>
                <div className='burger'>
                    <Burger
                    onClick={() => this.setState({ active: !this.state.active })}
                    active={this.state.active}
                    burger="slider"
                    color="white"
                    hoverOpacity={0.8}
                    scale={1}
                    />
                </div>
                <div className='dropdown-menu'>
                    <NavLink className='links' to='/'>Home</NavLink>
                    <NavLink className='links' to='/'>Track Your Ballot</NavLink>
                    <NavLink className='links' to='/'>Admin Only</NavLink>
                </div>
                <NavLink className='link' to='/'>
                    <div className='logo-div'>
                        <img className='logo' src={LogoImg} alt='logo' height='65' weight='65'/>
                    </div>
                </NavLink>
                <NavLink className='link' to='/'>
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