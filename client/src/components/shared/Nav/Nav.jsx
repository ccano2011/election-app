import React, {Component} from 'react'
import './Nav.css';
import Burger from 'react-css-burger';




class Nav extends Component {
    
    state = {
        active: false,
    };

    render() {
    return(
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
                <div className='BallotIcon'>
                </div>
            </div>
        </nav>
    )
}
}

export default Nav