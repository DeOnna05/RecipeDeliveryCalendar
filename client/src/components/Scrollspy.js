import React from 'react';


export default class Scrollspy extends React.Component {
    //state ref active element
    state = {
        activeElement: 1
    }
    
    activeClass = (val) => {
        this.setState({
            activeElement: val
        })
    }
    render(){
    return (
        <nav className="nav nav-pills flex-column flex-sm-row">
            <a className={this.state.activeElement === 1 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(1)} href="#">Monday</a>
            <a className={this.state.activeElement === 2 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(2)} href="#">Tuesday</a>
            <a className={this.state.activeElement === 3 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(3)} href="#">Wednesday</a>
            <a className={this.state.activeElement === 4 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(4)} href="#">Thursday</a>
            <a className={this.state.activeElement === 5 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(5)} href="#">Friday</a>
            <a className={this.state.activeElement === 6 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(6)} href="#">Saturday</a>
            <a className={this.state.activeElement === 7 ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={() => this.activeClass(7)} href="#">Sunday</a>
        </nav>
        )
    }
}
