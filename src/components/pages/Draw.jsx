import React, { Component } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import baldy from '../../img/bald1.png';



const style = {
	border: '0.0625rem solid #9c9c9c',
	borderRadius: '0.25rem',
};

class Draw extends Component {
	constructor(props) {
		super(props);

		this.canvas = React.createRef();
	}

	componentDidMount() {
		this.props.musicOn();
	}

	componentWillUnmount() {
		this.props.musicOff();
	}


	render() {
		return(
			<Container className="draw_cnt">
				<h2>Draw Hair on Squeex!</h2>
				<Button className="clear_btn" onClick={() => {this.canvas.current.clearCanvas()}}>Clear</Button>
				<ReactSketchCanvas className="draw_cnvs"
				ref={this.canvas}
				style={style}
				width="700px"
				height="750px"
				strokeWidth={10}
				strokeColor="black" 
				backgroundImage={baldy}
				preserveBackgroundImageAspectRatio="xMidYMid meet" />
			</Container>
		);
	}
}

Draw.propTypes = {
	musicOn: PropTypes.func,
	musicOff: PropTypes.func
};

export default Draw;