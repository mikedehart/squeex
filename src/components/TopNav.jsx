import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import kkona from '../img/kkona2.png';
import sheldon from '../img/sheldon_face.png';
import bazinga from '../sounds/bazinga.mp3';

let audio = new Audio(bazinga);

const start = () => {
	audio.play();
}

class TopNav extends Component {
	
	render(){
		return(
			<Navbar variant="dark" bg="dark" className="topnav">
				<Navbar.Brand href="#home"></Navbar.Brand>
				<Nav className="me-auto">
					<Button className="sq-nav" onClick={this.props.handleMain} onMouseEnter={start}>Home</Button>
					<Button className="sq-nav" onClick={this.props.handleNames} onMouseEnter={start}>Say Name</Button>
					<Button className="sq-nav" onClick={this.props.handleDraw} onMouseEnter={start}>Drawing</Button>
					<Button className="sq-nav" onClick={this.props.handleFAQs} onMouseEnter={start}>FAQs</Button>
					<Button className="sq-nav-img" onClick={this.props.handleKKona} onMouseEnter={start}><img src={kkona} alt="kkona" height="50px" width="50px" /></Button>
				</Nav>
				<h6>Hi chat! <img src={sheldon} alt="sheldor" height="50px" width="50px" /></h6>
				<Button onClick={this.props.audioToggle}>{this.props.audioOn ? 'Pause' : 'Play'}</Button>
			</Navbar>
		);
	}
}

TopNav.propTypes = {
	handeMain: PropTypes.func,
	handleKKona: PropTypes.func,
	handleFAQs: PropTypes.func,
	handleNames: PropTypes.func,
	handleDraw: PropTypes.func,
	audioToggle: PropTypes.func,
	audioOn: PropTypes.bool
};

export default TopNav;