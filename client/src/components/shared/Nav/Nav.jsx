import React, { Component } from 'react'
import './Nav.css';
import BallotImg from '../../../Assets/account.png';
import LogoImg from '../../../Assets/logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    handleClickOutside = (e) => {
        if (this.container.current && !this.container.current.contains(e.target)) {
            this.setState({
                open: false,
            });
        }
    };

    container = React.createRef();
    state = {
        open: false,
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    compenentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
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
        return (
            <div>
                <nav>
                    <div className='header'>
                        <div className='burger' ref={this.container}>
                            {/* { this.state.open ?  this.displayMenu() : null} */}
                            {this.displayHamburgerMenu()}
                            {this.state.open && (
                                <ul className='hamburgerDropDown'>
                                    <li onClick={() => this.state.open} className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard' >Home</NavLink></li>
                                    <li onClick={() => this.state.open} className='nav-link' id='nav2'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/status'>Track Your Ballot</NavLink></li>
                                    <li onClick={() => this.state.open} className='nav-link'><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/admin">Admin Only</NavLink></li>
                                </ul>
                            )}
                        </div>
                        <NavLink className='link' to='/dashboard'>
                            <div className='logo-div'>
                                <img className='logo' src={LogoImg} alt='logo' height='65' weight='65' />
                            </div>
                        </NavLink>
                        <NavLink className='link' to="/account-landing-page">
                            <div className='ballotIcon'>
                                <img className='logo' src={BallotImg} alt='account' height='55' weight='55' />
                            </div>
                        </NavLink>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav